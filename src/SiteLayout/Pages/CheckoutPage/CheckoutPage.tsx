import React, {useCallback, useContext, useState} from 'react';
import styles from './CheckoutPage.module.scss';
import {Header} from "../../Components/Header/Header.jsx";
import {Footer} from "../../Components/Footer/Footer.jsx";
import {BasketContext} from "../../../Context/BasketContext.jsx";
import {Link, useNavigate} from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {ProductDetail} from "../../../types.ts";
import {Bounce, toast} from "react-toastify";


type FormFields = {
    id: number | null;
    firstName: string;
    lastName: string;
    districtArea: string;
    streetAddress: string;
    phoneNumber: string;
    status: string;
    description: string;
    companyName: string;
    postCode: string;
    paymentType: number;
    products: ProductDetail[];
    addedAt: number | null;
};

const defaults: FormFields = {
    id: null,
    firstName: '',
    lastName: '',
    districtArea: '',
    streetAddress: '',
    phoneNumber: '',
    status: 'pending',
    description: '',
    companyName: '',
    postCode: '',
    paymentType: 0,
    products: [],
    addedAt: null
}

export const CheckoutPage = () => {
    const {
        cartItems,
        calculateSubtotal,
        emptyCart
    } = useContext(BasketContext);

    const [formFields, setFormFields] = useState(defaults);
    const [paymentMethod, setPaymentMethod] = React.useState<string | undefined>('');
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();



    const handleChange = useCallback((event: SelectChangeEvent) => {
        setPaymentMethod(event.target.value);
    }, [setPaymentMethod]);

    const handleClose = useCallback((): void => {
        setOpen(false);
    }, [setOpen]);

    const handleOpen = useCallback((): void => {
        setOpen(true);
    }, [setOpen]);


    const handleInputChange = useCallback((field: keyof FormFields, value: string | number) => {
        setFormFields((prev) => ({
            ...prev,
            [field]: value,
        }));
    }, [setFormFields]);

    const handlePostOrder = useCallback(() => {
        if (
            !formFields.firstName
            ||
            !formFields.lastName
            ||
            !formFields.districtArea
            ||
            !formFields.streetAddress
        ) {
            toast.error('Fill all important fields marked with *', {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });

        } else if (!/^\+994\d{9}$/.test(formFields.phoneNumber)) {
            toast.error('Wrong number! Number must be "+994XXXXXXXXX"', {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
        } else if (!paymentMethod) {
            toast.error('Select payment method', {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } else {
            navigate('/completed');
            emptyCart();
        }
    }, [formFields, paymentMethod]);

    return (
        <>
            <Header/>
            <main className={styles.checkoutMain}>
                {
                    cartItems.length < 1 ?
                        <div className={styles.checkoutEmpty}>
                            <img src="/images/emptyCart.png" alt="Cart Empty"/>
                            <p>Your basket is empty</p>
                            <p>Add products to basket first</p>
                            <div className={styles.container}>
                            <Link to="/menu" className={`${styles.button} ${styles.blackBtn}`}>
                                Return to Menu
                            </Link>
                            </div>
                        </div>
                        :
                        <section className={styles.checkoutSection}>
                            <div className={styles.checkoutContent}>
                                <div className={styles.checkoutForm}>
                                    {/* LEFT */}
                                    <div className={styles.checkoutLeft}>
                                        <h3>Billing Details</h3>
                                        <div className={styles.formRow}>
                                            <div className={styles.formShortBlock}>
                                                <p>
                                                    First Name<span>*</span>
                                                </p>
                                                <input
                                                    type="text"
                                                    value={formFields.firstName}
                                                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                                                />
                                            </div>
                                            <div className={styles.formShortBlock}>
                                                <p>
                                                    Last Name<span>*</span>
                                                </p>
                                                <input
                                                    type="text"
                                                    value={formFields.lastName}
                                                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.formRow}>
                                            <div className={styles.formLongBlock}>
                                                <p>Company name (Optional)</p>
                                                <input
                                                    type="text"
                                                    value={formFields.companyName}
                                                    onChange={(e) => handleInputChange('companyName', e.target.value)}

                                                />
                                            </div>
                                        </div>
                                        <div className={styles.formRow}>
                                            <div className={styles.formLongBlock}>
                                                <p>Phone number <b style={{
                                                    color: "red"
                                                }}>*</b></p>
                                                <input
                                                    type="tel"
                                                    placeholder="+994XXXXXXXX"
                                                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                                                    value={formFields.phoneNumber}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.formRow}>
                                            <div className={styles.formLongBlock}>
                                                <p>
                                                    District / Area<span>*</span>
                                                </p>
                                                <select
                                                    name="area"
                                                    value={formFields.districtArea}
                                                    onChange={(e) => handleInputChange('districtArea', e.target.value)}
                                                >
                                                    <option value="">Select a district/area</option>
                                                    <option value="Binagadi">Binagadi</option>
                                                    <option value="Yasamal">Yasamal</option>
                                                    <option value="Khatai">Khatai</option>
                                                    <option value="Nasimi">Nasimi</option>
                                                    <option value="Narimanov">Narimanov</option>
                                                    <option value="Nizami">Nizami</option>
                                                    <option value="Khazar">Khazar</option>
                                                    <option value="Sabayel">Sabayel</option>
                                                    <option value="Sabunchu">Sabunchu</option>
                                                    <option value="Surakhny">Surakhny</option>
                                                    <option value="Garadagh">Garadagh</option>
                                                    <option value="Pirallahi">Pirallahi</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className={styles.formRow}>
                                            <div className={styles.formLongBlock}>
                                                <p>
                                                    Street Address<span>*</span>
                                                </p>
                                                <input
                                                    type="text"
                                                    placeholder="Example (Dilara Aliyeva str.237 app.26)"
                                                    value={formFields.streetAddress}
                                                    onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.formRow}>
                                            <div className={styles.formLongBlock}>
                                                <p>Post Code (Optional)</p>
                                                <input
                                                    type="text"
                                                    placeholder="AZXXXX"
                                                    value={formFields.postCode}
                                                    onChange={(e) => handleInputChange('postCode', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.additionalInfo}>
                                            <h3>Additional information</h3>
                                            <label htmlFor="info">
                                                Order Notes (Optional)<textarea
                                                name="info"
                                                id="info"
                                                placeholder="Notes about your order, e.g. special notes for delivery."
                                                value={formFields.description}
                                                onChange={(e) => handleInputChange('description', e.target.value)}

                                            ></textarea>
                                            </label>
                                        </div>
                                    </div>
                                    {/* RIGHT */}
                                    <div className={styles.checkoutRight}>
                                        <div className={styles.orderContainer}>
                                            <h3>Your Order</h3>
                                            {/* TOTAL AND SUBTOTAL PRICE HERE */}
                                            {cartItems?.map((cartProduct) => {
                                                return (
                                                    <div key={cartProduct.id} className={styles.orderRow}>
                                                        <p>{cartProduct.title} <span> × {cartProduct?.count}</span>
                                                        </p>
                                                        <p>$ {(cartProduct?.salePrice * cartProduct?.count)?.toFixed(2)}</p>
                                                    </div>

                                                )
                                            })}
                                            <div className={styles.orderRow}>
                                                <p>Subtotal</p>
                                                <p>$ {calculateSubtotal?.toFixed(2)}</p>
                                            </div>
                                            <div
                                                className={styles.orderRow}
                                                style={{borderColor: 'transparent', color: '#EC3D08'}}
                                            >
                                                <p style={{
                                                    color: "red"
                                                }}>Total</p>
                                                <p>$ {calculateSubtotal?.toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <div className={styles.paymentContainer}>
                                            <h3 className={styles.payment}>Shipping & Payment</h3>
                                            <div className={styles.paymentTypeRow}>
                                                <b>Select payment method</b>
                                                <FormControl sx={{
                                                    m: 5,
                                                    minWidth: 120,
                                                    maxWidth: 300,
                                                    margin: 0,
                                                    '& label.Mui-focused': {
                                                        color: 'orangered',
                                                    },
                                                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'orangered',
                                                    },
                                                }}>
                                                    <InputLabel
                                                        id="demo-controlled-open-select-label">Payment</InputLabel>
                                                    <Select
                                                        labelId="demo-controlled-open-select-label"
                                                        id="demo-controlled-open-select"
                                                        open={open}
                                                        onClose={handleClose}
                                                        onOpen={handleOpen}
                                                        value={paymentMethod}
                                                        label="Payment"
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={"cash"}>CASH upon delivery</MenuItem>
                                                        <MenuItem value={"card"}>CARD upon delivery</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className={styles.paymentPrivacyPolicy}>
                                                <p>
                                                    Your personal data will be used to process your order, support
                                                    your
                                                    experience throughout this website, and for other purposes
                                                    described in
                                                    our {' '}
                                                    <a style={{
                                                        color: "orangered",
                                                        textDecoration: "underline"
                                                    }}
                                                       href="#"
                                                       className="woocommerce-privacy-policy-link"
                                                       target="_blank"
                                                       rel="noopener noreferrer"
                                                    >
                                                        privacy policy
                                                    </a>
                                                    .
                                                </p>
                                                {/* PLACE ORDER BUTTON */}
                                                <div className={styles.container}>
                                                    <div className={`${styles.button} ${styles.blackToWhiteBtn}`}
                                                         onClick={handlePostOrder}>
                                                        Place order
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                }
            </main>
            <Footer/>
        </>
    );
};
