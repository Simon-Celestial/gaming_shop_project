import React, {useState, useCallback, ChangeEvent, FormEvent} from 'react';
import styles from "../LoginAndRegister.module.scss";
import {Link, useNavigate} from 'react-router-dom';
import {Bounce, toast} from 'react-toastify';
import axios from 'axios';
import {Header} from "../../../Components/Layout/Header/Header";
import {PageBanner} from "../../../Components/Layout/PageBanner/PageBanner";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {FooterTwo} from "../../../Components/Layout/FooterTwo/FooterTwo";
import {useTranslation} from "react-i18next";

interface User {
    userName: string;
    userEmail: string;
    userPassword: string;
    userPhone: string;
    registerDate: string | null
}

interface PasswordBtnsStates {
    mainPass: boolean;
    confirmPass: boolean;
}

const userDefaults: User = {
    userName: "",
    userEmail: "",
    userPassword: "",
    userPhone: "",
    registerDate: null

}

export const RegisterPage: React.FC = () => {
    const [userForm, setUserForm] = useState<User>(userDefaults);
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [registerLoading, setRegisterLoading] = useState<boolean>(false);

    const [passwordBtnsStates, setPasswordBtnsStates] = useState<PasswordBtnsStates>({
        mainPass: false,
        confirmPass: false,
    });

    const navigate = useNavigate();
    const {t} = useTranslation();

    const handlePassView = useCallback((btnName: keyof PasswordBtnsStates) => {
        setPasswordBtnsStates((prevState) => ({
            ...prevState,
            [btnName]: !prevState[btnName],
        }));
    }, []);

    const handleConfirmPass = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }, []);

    const addUser = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            try {
                setRegisterLoading(true);

                if (!userForm.userEmail || !userForm.userName || !userForm.userPassword || !userForm.userPhone) {
                    toast.error(`${t('registerPage.allFieldsRequired')}`, {
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                    return;
                }

                const response = await axios.get("https://gaming-shop-server.vercel.app/users");
                const data: User[] = response.data;

                const serverEmail = data.find((userData) => userData.userEmail === userForm.userEmail);

                if (serverEmail) {
                    toast.error(`${t('registerPage.accountExists')}`, {
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                } else if (userForm.userPassword.length >= 6 && confirmPassword === userForm.userPassword) {
                    const userData = {
                        userEmail: userForm.userEmail.trim(),
                        userName: userForm.userName.trim(),
                        userPassword: userForm.userPassword,
                        userPhone: userForm.userPhone.trim(),
                        registerDate: new Date().toLocaleString(),
                    }

                    await axios.post("https://gaming-shop-server.vercel.app/users", userData, {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    toast.success(`${t('registerPage.registrationSuccess')}`, {
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });

                    navigate("/login");
                    setUserForm(userDefaults);
                    setConfirmPassword("");
                } else {
                    toast.error(`${t('registerPage.passwordError')}`, {
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                }
            } catch (error) {
                console.error("Error:", error);
                toast.error(`${t('registerPage.registrationError')}`, {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            } finally {
                setRegisterLoading(false);
            }
        },
        [
            userForm.userEmail,
            userForm.userName,
            userForm.userPassword,
            userForm.userPhone,
            confirmPassword,
            t,
            navigate
        ]
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUserForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <PageBanner
                    greenText={t('registerPage.title')}
                    whiteText={""}
                    smallText={t('registerPage.createAccount')}
                />
                <div className={styles.pageContent}>
                    <div className={styles.formContainer}>
                        <form onSubmit={addUser}>
                            <div className={styles.inputContainer}>
                                <p>{t('registerPage.email')} <span>*</span></p>
                                <input
                                    type="email"
                                    name="userEmail"
                                    required
                                    placeholder={t('registerPage.enterEmail')}
                                    onChange={handleChange}
                                    value={userForm.userEmail}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <p>{t('registerPage.username')} <span>*</span></p>
                                <input
                                    style={{textTransform: "capitalize"}}
                                    type="text"
                                    name="userName"
                                    placeholder={t('registerPage.enterUsername')}
                                    onChange={handleChange}
                                    value={userForm.userName}
                                    required
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <p>{t('registerPage.password')} <span>*</span></p>
                                <div className={styles.passInputWrapper}>
                                    <div className={styles.viewBtn} onClick={() => handlePassView('mainPass')}>
                                        {passwordBtnsStates.mainPass ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                    </div>
                                    <input
                                        type={passwordBtnsStates.mainPass ? "text" : "password"}
                                        name="userPassword"
                                        required
                                        placeholder={t('registerPage.enterPassword')}
                                        onChange={handleChange}
                                        value={userForm.userPassword}
                                    />
                                </div>
                            </div>
                            <div className={styles.inputContainer}>
                                <p>{t('registerPage.confirmPassword')} <span>*</span></p>
                                <div className={styles.passInputWrapper}>
                                    <div className={styles.viewBtn} onClick={() => handlePassView('confirmPass')}>
                                        {passwordBtnsStates.confirmPass ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                    </div>
                                    <input
                                        type={passwordBtnsStates.confirmPass ? "text" : "password"}
                                        placeholder={t('registerPage.confirmPassword')}
                                        onChange={handleConfirmPass}
                                        value={confirmPassword}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.inputContainer}>
                                <p>{t('registerPage.number')} <span>*</span></p>
                                <input
                                    required
                                    type="tel"
                                    name="userPhone"
                                    placeholder={t('registerPage.enterNumber')}
                                    onChange={handleChange}
                                    value={userForm.userPhone}
                                    pattern="^\+994\d{9}$"
                                />
                            </div>
                            <button
                                style={{
                                    opacity: registerLoading ? "0.5" : "1"
                                }}
                                disabled={registerLoading}
                                type="submit"
                                className={styles.submitButton}
                            >
                                {registerLoading ? t('registerPage.loading') : t('registerPage.title')}
                            </button>
                            <div className={styles.redirect}>
                                <Link to="/login">{t('registerPage.hasAccount')}</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <FooterTwo/>
        </>
    );
}
