import React, {useCallback, useContext, useState} from 'react';
import styles from './CheckoutPage.module.scss';
import {Link, useNavigate} from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {Bounce, toast} from "react-toastify";
import {BasketContext} from "../../../Context/BasketContext/BasketContext.tsx";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import {PageBanner} from "../../Components/Layout/PageBanner/PageBanner.tsx";
import {DefaultButton} from "../../Components/Reusables/DefaultButton/DefaultButton.tsx";
import {PRODUCTS_DATA} from "../../../Types/types.ts";
import axios from "axios";
import {useTranslation} from "react-i18next";


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
    const [postLoading, setPostLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = React.useState<string | undefined>('');
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();

    const {t} = useTranslation();


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
            toast.error(`${t('checkoutPage.mandatoryFieldsMessage')}`, {
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
            toast.error(`${t('checkoutPage.invalidPhoneNumber')}`, {
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
            toast.error(`${t('checkoutPage.selectPaymentMethod')}`, {
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
    }, [
        formFields.districtArea,
        formFields.firstName,
        formFields.lastName,
        formFields.phoneNumber,
        formFields.streetAddress,
        paymentMethod,
        t]);

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
                toast.success(`${t('checkoutPage.orderPlacedSuccess')}`, {
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
            toast.error(`${t('checkoutPage.orderPlacementFailed')}`, {
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
                <PageBanner
                    greenText={t('checkoutPage.checkout')}
                    whiteText={""}
                    smallText={t('checkoutPage.journeyStart')}
                />
                {
                    cartItems.length < 1 ?
                        <div className={styles.checkoutEmpty}>
                            <img src="/images/icons/empty.png" alt="Cart Empty"/>
                            <p>{t('checkoutPage.chooseProductFirst')}...</p>
                            <DefaultButton
                                wide={false}
                                grayBtn={false}
                                link={"/shop"}
                                title={t('checkoutPage.returnToShop')}
                            />
                        </div>
                        :
                        <section className={styles.checkoutSection}>
                            <div className={styles.checkoutContent}>
                                <div className={styles.checkoutForm}>
                                    {/* LEFT */}
                                    <div className={styles.checkoutLeft}>
                                        <h3>{t('checkoutPage.billingDetails')}</h3>
                                        <div className={styles.formRow}>
                                            <div className={styles.formShortBlock}>
                                                <p>
                                                    {t('checkoutPage.firstName')}<span>*</span>
                                                </p>
                                                <input
                                                    type="text"
                                                    value={formFields.firstName}
                                                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                                                />
                                            </div>
                                            <div className={styles.formShortBlock}>
                                                <p>
                                                    {t('checkoutPage.lastName')}<span>*</span>
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
                                                <p>{t('checkoutPage.companyNameOptional')}</p>
                                                <input
                                                    type="text"
                                                    value={formFields.companyName}
                                                    onChange={(e) => handleInputChange('companyName', e.target.value)}

                                                />
                                            </div>
                                        </div>
                                        <div className={styles.formRow}>
                                            <div className={styles.formLongBlock}>
                                                <p>{t('checkoutPage.phoneNumber')} <span>*</span></p>
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
                                                    {t('checkoutPage.districtArea')}<span>*</span>
                                                </p>
                                                <select
                                                    name="area"
                                                    value={formFields.districtArea}
                                                    onChange={(e) => handleInputChange('districtArea', e.target.value)}
                                                >
                                                    <option value="">{t('checkoutPage.selectDistrictArea')}</option>
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
                                                    {t('checkoutPage.streetAddress')}<span>*</span>
                                                </p>
                                                <input
                                                    type="text"
                                                    placeholder={t('checkoutPage.exampleName')}
                                                    value={formFields.streetAddress}
                                                    onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.formRow}>
                                            <div className={styles.formLongBlock}>
                                                <p>{t('checkoutPage.postCodeOptional')}</p>
                                                <input
                                                    type="text"
                                                    placeholder="AZXXXX"
                                                    value={formFields.postCode}
                                                    onChange={(e) => handleInputChange('postCode', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.additionalInfo}>
                                            <h3>{t('checkoutPage.additionalInformation')}</h3>
                                            <label htmlFor="info">
                                                {t('checkoutPage.orderNotesOptional')}<textarea
                                                name="info"
                                                id="info"
                                                placeholder={t('checkoutPage.orderNotesPlaceholder')}
                                                value={formFields.description}
                                                onChange={(e) => handleInputChange('description', e.target.value)}

                                            ></textarea>
                                            </label>
                                        </div>
                                    </div>
                                    {/* RIGHT */}
                                    <div className={styles.checkoutRight}>
                                        <div className={styles.orderContainer}>
                                            <h3>{t('checkoutPage.yourOrder')}</h3>
                                            {/* TOTAL AND SUBTOTAL PRICE HERE */}
                                            {cartItems?.map((cartProduct) => {
                                                return (
                                                    <div key={cartProduct?.id} className={styles.orderRow}>
                                                        <p><img src={cartProduct?.image?.[0]}
                                                                alt=""/> {cartProduct?.name} ({cartProduct?.selectedColor})
                                                            <span> × {cartProduct?.count}</span></p>
                                                        <p>$ {(cartProduct?.salePrice * cartProduct?.count)?.toFixed(2)}</p>
                                                    </div>

                                                )
                                            })}
                                            <div className={styles.orderRow}
                                                 style={{borderColor: 'transparent'}}
                                            >
                                                <p>{t('checkoutPage.subtotal')}</p>
                                                <p>$ {calculateSubtotal?.toFixed(2)}</p>
                                            </div>
                                            <div
                                                className={styles.orderRow}
                                                style={{borderColor: 'transparent', color: '#0EF0AD'}}
                                            >
                                                <p style={{
                                                    color: "#0EF0AD"
                                                }}>{t('checkoutPage.total')}</p>
                                                <p>$ {calculateSubtotal?.toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <div className={styles.paymentContainer}>
                                            <h3 className={styles.payment}>
                                                {t('checkoutPage.shippingAndPayment')}
                                            </h3>
                                            <div className={styles.paymentTypeRow}>
                                                <b>{t('checkoutPage.selectPaymentMethod')}</b>
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
                                                    >
                                                        {t('checkoutPage.payment')}
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
                                                            {t('checkoutPage.cashOnDelivery')}
                                                        </MenuItem>
                                                        <MenuItem
                                                            value={"card"}
                                                        >
                                                            {t('checkoutPage.cardOnDelivery')}
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className={styles.paymentPrivacyPolicy}>
                                                <p>
                                                    {t('checkoutPage.privacyPolicyInfo')} {' '}
                                                    <Link to={"/privacy-policy"}
                                                          style={{
                                                              color: "#0EF0AD",
                                                              textDecoration: "underline"
                                                          }}
                                                          target="_blank"
                                                    >
                                                        {t('checkoutPage.privacyPolicy')}
                                                    </Link>
                                                </p>
                                                {/* PLACE ORDER BUTTON */}
                                                <div
                                                    className={`${styles.postBtn} ${postLoading ? styles.loading : ""}`}
                                                    onClick={!postLoading ? handlePostOrder : undefined}
                                                >
                                                    <DefaultButton
                                                        link={""}
                                                        title={!postLoading ? t('checkoutPage.placeOrder') : t('checkoutPage.loading')}                                                        grayBtn={false}
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
