import React, {useCallback, useContext, useState} from 'react';
import styles from './CheckoutPage.module.scss';
import {useNavigate} from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {Bounce, toast} from "react-toastify";
import {BasketContext} from "../../../Context/BasketContext/BasketContext.tsx";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import {PageBanner} from "../../Components/Reusables/PageBanner/PageBanner.tsx";
import {DefaultButton} from "../../Components/Reusables/DefaultButton/DefaultButton.tsx";
import {PRODUCTS_DATA} from "../../../Types/types.ts";
import axios from "axios";


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
    paymentType: string;
    products: PRODUCTS_DATA[];
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
    paymentType: '',
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
    const [postLoading,setPostLoading] = useState(false);
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

    const validateForm = useCallback((): boolean => {
        if (!formFields.firstName || !formFields.lastName || !formFields.districtArea || !formFields.streetAddress) {
            toast.error('Please fill all mandatory fields marked with *', {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
            return false;
        }
        if (!/^\+994\d{9}$/.test(formFields.phoneNumber)) {
            toast.error('Invalid phone number! Format should be "+994XXXXXXXXX"', {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
            return false;
        }
        if (!paymentMethod) {
            toast.error('Please select a payment method', {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
            return false;
        }
        return true;
    }, [formFields, paymentMethod]);

    const handlePostOrder = useCallback(async () => {
        if (!validateForm()) {
            return;
        }
        const orderData = {
            firstName: formFields.firstName.trim(),
            lastName: formFields.lastName.trim(),
            districtArea: formFields.districtArea,
            streetAddress: formFields.streetAddress.trim(),
            phoneNumber: formFields.phoneNumber.trim(),
            status: formFields.status,
            description: formFields.description.trim(),
            companyName: formFields.companyName.trim(),
            postCode: formFields.postCode.trim(),
            products: [...cartItems],
            paymentType: paymentMethod,
            addedAt: new Date().toLocaleString(),
        };

        try {
            setPostLoading(true);
            const response = await axios.post('https://gaming-shop-server.vercel.app/orders', orderData);
            if (response.status === 201 || response.status === 200) {
                toast.success('Order placed successfully!', {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                    transition: Bounce,
                });

                navigate('/completed');
                emptyCart();
                setFormFields(defaults);
                setPaymentMethod('');
            } else {
                throw new Error('Something went wrong! Please try again.');
            }
        } catch (error) {
            console.error('Error placing order:', error);
            toast.error('Failed to place the order. Please check your connection or try again later.', {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
        } finally {
            setPostLoading(false);
        }
    }, [formFields, paymentMethod, navigate, emptyCart]);

    return (
        <>
            <Header/>
            <main className={styles.checkoutMain}>
                <PageBanner greenText={"Checkout"} whiteText={""} smallText={"Your journey to ultimate entertainment starts now!"}/>
                {
                    cartItems.length < 1 ?
                        <div className={styles.checkoutEmpty}>
                            <img src="/images/empty.png" alt="Cart Empty"/>
                            <p>Choose product to buy first</p>
                            <DefaultButton
                                wide={false}
                                grayBtn={false}
                                link={"/shop"}
                                title={"Return to Shop"}
                            />
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
                                                <p>Phone number <span>*</span></p>
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
                                                    placeholder="Example (Adil Mammadov 75 / 5)"
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
                                                    <div key={cartProduct?.id} className={styles.orderRow}>
                                                        <p><img src={cartProduct?.image[0]} alt=""/> {cartProduct?.name} ({cartProduct?.selectedColor})
                                                            <span> × {cartProduct?.count}</span></p>
                                                        <p>$ {(cartProduct?.salePrice * cartProduct?.count)?.toFixed(2)}</p>
                                                    </div>

                                                )
                                            })}
                                            <div className={styles.orderRow}
                                                 style={{borderColor: 'transparent'}}
                                            >
                                                <p>Subtotal</p>
                                                <p>$ {calculateSubtotal?.toFixed(2)}</p>
                                            </div>
                                            <div
                                                className={styles.orderRow}
                                                style={{borderColor: 'transparent', color: '#0EF0AD'}}
                                            >
                                                <p style={{
                                                    color: "#0EF0AD"
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
                                                        color: '#0EF0AD',
                                                    },
                                                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: '#0EF0AD',
                                                    }
                                                }}>
                                                    <InputLabel
                                                        id="demo-controlled-open-select-label"
                                                        sx={{
                                                            color: "rgb(197, 197, 200)"
                                                        }}
                                                    >Payment
                                                    </InputLabel>
                                                    <Select
                                                        labelId="demo-controlled-open-select-label"
                                                        id="demo-controlled-open-select"
                                                        open={open}
                                                        onClose={handleClose}
                                                        onOpen={handleOpen}
                                                        value={paymentMethod}
                                                        label="Payment"
                                                        onChange={handleChange}
                                                        sx={{
                                                            color: '#F5F5F5',
                                                            '& .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: '#F5F5F5',
                                                            },
                                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: '#0EF0AD',
                                                            },
                                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: '#0EF0AD',
                                                            },
                                                            '& .MuiSvgIcon-root': {
                                                                color: '#F5F5F5',
                                                            },
                                                        }}
                                                    >
                                                        <MenuItem
                                                            value={"cash"}
                                                        >
                                                            CASH upon delivery</MenuItem>
                                                        <MenuItem
                                                            value={"card"}
                                                        >CARD upon delivery
                                                        </MenuItem>
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
                                                        color: "#0EF0AD",
                                                        textDecoration: "underline"
                                                    }}
                                                       href="#"
                                                       className="woocommerce-privacy-policy-link"
                                                       target="_blank"
                                                       rel="noopener noreferrer"
                                                    >
                                                        privacy policy
                                                    </a>
                                                </p>
                                                {/* PLACE ORDER BUTTON */}
                                                <div
                                                    className={`${styles.postBtn} ${postLoading ? styles.loading : ""}`}
                                                    onClick={!postLoading ? handlePostOrder : undefined}
                                                >
                                                    <DefaultButton
                                                        link={""}
                                                        title={!postLoading ? "Place Order" : "Loading..."}
                                                        grayBtn={false}
                                                        wide={true}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                }
            </main>
            <FooterOne/>
        </>
    );
};
