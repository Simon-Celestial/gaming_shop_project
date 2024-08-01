import React, {useState, useCallback} from 'react';
import styles from "../LoginAndRegister.module.scss";
import {Link, useNavigate} from 'react-router-dom';
import {Bounce, toast} from 'react-toastify';
import axios from 'axios';
import {FooterTwo} from "../../../Components/Layout/FooterTwo/FooterTwo.tsx";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {Header} from "../../../Components/Layout/Header/Header.tsx";
import {PageBanner} from "../../../Components/Reusables/PageBanner/PageBanner.tsx";

interface UserLoginState {
    userLoginEmail: string;
    userLoginPassword: string;
}

export const LoginPage: React.FC = () => {

    const [userLogin, setUserLogin] = useState<UserLoginState>({
        userLoginEmail: "",
        userLoginPassword: ""
    });


    const [viewPassword, setViewPassword] = useState<boolean>(false);
    const [loginLoading, setLoginLoading] = useState(false);
    const handlePassView = useCallback(() => {
        setViewPassword((prevState) => !prevState);
    }, [setViewPassword]);

    const navigate = useNavigate();

    const logIn = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            try {
                setLoginLoading(true);
                const response = await axios.get("https://gaming-shop-server.vercel.app/users");
                const users = response.data;

                const userWithEmail = users.find(
                    (userData: { userEmail: string }) =>
                        userData.userEmail === userLogin.userLoginEmail
                );
                const userPassword = users.find(
                    (userData: { userPassword: string }) =>
                        userData.userPassword === userLogin.userLoginPassword
                );

                if (userWithEmail && userPassword) {
                    localStorage.setItem("user", JSON.stringify({email: userWithEmail.userEmail}));
                    toast.success(`You have successfully logged into your account`, {
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                    navigate("/");
                } else if (!userWithEmail) {
                    toast.error(`No such account exists`, {
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                } else if (!userPassword) {
                    toast.error(`The password for this account is incorrect`, {
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
        [userLogin, navigate]
    );

    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <PageBanner smallText={"Enter into your account"} greenText={"Login"} whiteText={""}/>
                <div className={styles.pageContent}>
                    <div className={styles.formContainer}>
                        <form onSubmit={logIn}>
                            <div className={styles.inputContainer}>
                                <p>Email <span>*</span></p>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    onChange={(e) => setUserLogin({...userLogin, userLoginEmail: e.target.value})}
                                    value={userLogin.userLoginEmail}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <p>Password <span>*</span></p>
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
                                        placeholder="Enter your password"
                                        onChange={(e) => setUserLogin({
                                            ...userLogin,
                                            userLoginPassword: e.target.value
                                        })}
                                        value={userLogin.userLoginPassword}
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={loginLoading}
                                style={{opacity: loginLoading ? "0.5" : "1"}}
                            >
                                {loginLoading ? "Loading..." : "Login"}
                            </button>
                            <div className={styles.redirect}>
                                <Link to="/register">Don't have an account? Click here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <FooterTwo/>
        </>
    );
};
