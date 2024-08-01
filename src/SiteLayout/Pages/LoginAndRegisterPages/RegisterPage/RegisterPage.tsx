import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react'; // Added ChangeEvent and FormEvent for type annotations
import styles from "../LoginAndRegister.module.scss";
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import axios from 'axios';
import { Header } from "../../../Components/Layout/Header/Header";
import { PageBanner } from "../../../Components/Reusables/PageBanner/PageBanner";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FooterTwo } from "../../../Components/Layout/FooterTwo/FooterTwo";

interface User {
    userName: string;
    userEmail: string;
    userPassword: string;
    userPhone: string;
}

interface PasswordBtnsStates {
    mainPass: boolean;
    confirmPass: boolean;
}

export const RegisterPage: React.FC = () => {
    const [user, setUser] = useState<User>({
        userName: "",
        userEmail: "",
        userPassword: "",
        userPhone: "",
    });

    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [registerLoading,setRegisterLoading] = useState<boolean>(false);

    const [passwordBtnsStates, setPasswordBtnsStates] = useState<PasswordBtnsStates>({
        mainPass: false,
        confirmPass: false,
    });

    const navigate = useNavigate();

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
                const response = await axios.get("https://gaming-shop-server.vercel.app/users");
                const data: User[] = response.data;
                const serverEmail = data.find((userData) => userData.userEmail === user.userEmail);

                if (serverEmail) {
                    toast.error(`Such an account already exists`, {
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                } else {
                    if (user.userPassword.length >= 6 && confirmPassword === user.userPassword) {
                        await axios.post("https://gaming-shop-server.vercel.app/users", user, {
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                        toast.success(`You have successfully registered`, {
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            transition: Bounce,
                        });
                        navigate("/login");
                        setUser({
                            userName: "",
                            userEmail: "",
                            userPassword: "",
                            userPhone: "",
                        });
                        setConfirmPassword("");
                    } else {
                        toast.error(`The password must contain at least six characters and must match the password confirmation`, {
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            transition: Bounce,
                        });
                    }
                }
            } catch (error) {
                console.error("Error:", error);
                toast.error(`An error occurred while registering. Please try again.`, {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }
            finally {
                setRegisterLoading(false);
            }
        },
        [user, confirmPassword, navigate]
    );

    return (
        <>
            <Header />
            <main className={styles.pageWrapper}>
                <PageBanner greenText={"Register"} whiteText={""} smallText={"Create an account"} />
                <div className={styles.pageContent}>
                    <div className={styles.formContainer}>
                        <form onSubmit={addUser}>
                            <div className={styles.inputContainer}>
                                <p>Email <span>*</span></p>
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter Email"
                                    onChange={(e) => setUser({ ...user, userEmail: e.target.value })}
                                    value={user.userEmail}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <p>Username <span>*</span></p>
                                <input
                                    style={{ textTransform: "capitalize" }}
                                    type="text"
                                    placeholder="Enter Username"
                                    onChange={(e) => setUser({ ...user, userName: e.target.value })}
                                    value={user.userName}
                                    required
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <p>Password <span>*</span></p>
                                <div className={styles.passInputWrapper}>
                                    <div className={styles.viewBtn} onClick={() => handlePassView('mainPass')}>
                                        {passwordBtnsStates.mainPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </div>
                                    <input
                                        type={passwordBtnsStates.mainPass ? "text" : "password"}
                                        required
                                        placeholder="Enter Password"
                                        onChange={(e) => setUser({ ...user, userPassword: e.target.value })}
                                        value={user.userPassword}
                                    />
                                </div>
                            </div>
                            <div className={styles.inputContainer}>
                                <p>Confirm Password <span>*</span></p>
                                <div className={styles.passInputWrapper}>
                                    <div className={styles.viewBtn} onClick={() => handlePassView('confirmPass')}>
                                        {passwordBtnsStates.confirmPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </div>
                                    <input
                                        type={passwordBtnsStates.confirmPass ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        onChange={handleConfirmPass}
                                        value={confirmPassword} // Added value to reflect input state
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.inputContainer}>
                                <p>Number <span>*</span></p>
                                <input
                                    required
                                    type="tel"
                                    placeholder="+994XXXXXXX"
                                    onChange={(e) => setUser({ ...user, userPhone: e.target.value })}
                                    value={user?.userPhone}
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
                                {registerLoading ? "Loading..." : "Register"}
                            </button>
                            <div className={styles.redirect}>
                                <Link to="/login">Have an account? Click here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <FooterTwo />
        </>
    );
}
