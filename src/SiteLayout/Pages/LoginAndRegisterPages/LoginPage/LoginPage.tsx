import React, {useState, useCallback, useContext} from 'react';
import styles from "../LoginAndRegister.module.scss";
import {Link, useNavigate} from 'react-router-dom';
import {Bounce, toast} from 'react-toastify';
import axios from 'axios';
import {FooterTwo} from "../../../Components/Layout/FooterTwo/FooterTwo.tsx";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {Header} from "../../../Components/Layout/Header/Header.tsx";
import {PageBanner} from "../../../Components/Layout/PageBanner/PageBanner.tsx";
import {AuthContext} from "../../../../Context/AuthContext/AuthContext.tsx";
import {useTranslation} from "react-i18next";

// I DONT HAVE A NORMAL BACKEND WITH JWT TOKEN, SO THIS IS TEMPORARY DECISION
const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJiNTdkOTRlMC01MDFiLTExZWYtYTEzNC1hYjE4MzQzN2NiNWYiLCJpYXQiOjE3MjI1MjY2MjIsImV4cCI6MTcyMjYxMzAyMn0.TWRTsf3n57Vii3TISjw2Mbk_AbW7DZoFs9UeLwlYYDw";

interface USER_LOGIN {
    userEmail: string;
    userPassword: string;
}

const userDefault: USER_LOGIN = {
    userEmail: "",
    userPassword: ""
}

export const LoginPage: React.FC = () => {
    const {setToken} = useContext(AuthContext);
    const [userLogin, setUserLogin] = useState<USER_LOGIN>(userDefault);
    const [viewPassword, setViewPassword] = useState<boolean>(false);
    const [loginLoading, setLoginLoading] = useState(false);

    const handlePassView = useCallback(() => {
        setViewPassword((prevState) => !prevState);
    }, [setViewPassword]);

    const navigate = useNavigate();

    const {t} = useTranslation();

    const logIn = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            try {
                setLoginLoading(true);
                const response = await axios.get("https://gaming-shop-server.vercel.app/users");
                const users = response.data;

                const user = users.find((userData: { userEmail: string, userPassword: string }) =>
                    userData.userEmail === userLogin.userEmail &&
                    userData.userPassword === userLogin.userPassword
                );
                if (user) {
                    localStorage.setItem("userData", JSON.stringify({
                        username: user.userName,
                        email: user.userEmail,
                        registerDate: user.registerDate,
                        phone: user.userPhone,
                        userID: user.id
                    }));
                    localStorage.setItem("token", JSON.stringify({
                        token
                    }));
                    setToken(token);
                    toast.success(`${t('loginPage.loginSuccess')}`, {
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                    navigate("/");
                    window.location.reload();
                } else if (!users.find((userData: { userEmail: string }) =>
                    userData.userEmail === userLogin.userEmail)) {
                    toast.error(`${t('loginPage.noAccountExists')}`, {
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                } else {
                    toast.error(`${t('loginPage.wrongPassword')}`, {
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
                console.error("error:", error);
            } finally {
                setLoginLoading(false);
            }
        },
        [userLogin.userEmail, userLogin.userPassword, setToken, navigate]
    );
    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <PageBanner
                    smallText={t('loginPage.enterAccount')}
                    greenText={t('loginPage.login')}
                    whiteText={""}
                />
                <div className={styles.pageContent}>
                    <div className={styles.formContainer}>
                        <form onSubmit={logIn}>
                            <div className={styles.inputContainer}>
                                <p>{t('loginPage.email')} <span>*</span></p>
                                <input
                                    type="email"
                                    required
                                    placeholder={t('loginPage.enterEmail')}
                                    onChange={(e) => setUserLogin({...userLogin, userEmail: e.target.value})}
                                    value={userLogin.userEmail}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <p>{t('loginPage.password')} <span>*</span></p>
                                <div className={styles.passInputWrapper}>
                                    <div
                                        className={styles.viewBtn}
                                        onClick={handlePassView}
                                    >
                                        {viewPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                    </div>
                                    <input
                                        type={viewPassword ? "text" : "password"}
                                        required
                                        placeholder={t('loginPage.enterPassword')}
                                        onChange={(e) => setUserLogin({
                                            ...userLogin,
                                            userPassword: e.target.value
                                        })}
                                        value={userLogin.userPassword}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={loginLoading}
                                style={{opacity: loginLoading ? "0.5" : "1"}}
                            >
                                {loginLoading ? t('loginPage.loading') : t('loginPage.login')}
                            </button>
                            <div className={styles.redirect}>
                                <Link to="/register">{t('loginPage.noAccount')}</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <FooterTwo/>
        </>
    );
};
