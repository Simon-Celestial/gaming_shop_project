import React, {useState, useCallback, ChangeEvent, FormEvent} from 'react';
import styles from "../LoginAndRegister.module.scss";
import {Link, useNavigate} from 'react-router-dom';
import {Bounce, toast} from 'react-toastify';
import axios from 'axios';
import {Header} from "../../../Components/Layout/Header/Header";
import {PageBanner} from "../../../Components/Reusables/PageBanner/PageBanner";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {FooterTwo} from "../../../Components/Layout/FooterTwo/FooterTwo";

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
                    toast.error("All fields are required.", {
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
                    toast.error(`An account with this email already exists.`, {
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

                    toast.success(`You have successfully registered.`, {
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
                    toast.error(`The password must be at least 6 characters long and must match the confirmation password.`, {
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
                toast.error(`An error occurred while registering. Please try again later.`, {
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
        [userForm, confirmPassword, navigate]
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
                <PageBanner greenText={"Register"} whiteText={""} smallText={"Create an account"}/>
                <div className={styles.pageContent}>
                    <div className={styles.formContainer}>
                        <form onSubmit={addUser}>
                            <div className={styles.inputContainer}>
                                <p>Email <span>*</span></p>
                                <input
                                    type="email"
                                    name="userEmail"
                                    required
                                    placeholder="Enter Email"
                                    onChange={handleChange}
                                    value={userForm.userEmail}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <p>Username <span>*</span></p>
                                <input
                                    style={{textTransform: "capitalize"}}
                                    type="text"
                                    name="userName"
                                    placeholder="Enter Username"
                                    onChange={handleChange}
                                    value={userForm.userName}
                                    required
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <p>Password <span>*</span></p>
                                <div className={styles.passInputWrapper}>
                                    <div className={styles.viewBtn} onClick={() => handlePassView('mainPass')}>
                                        {passwordBtnsStates.mainPass ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                    </div>
                                    <input
                                        type={passwordBtnsStates.mainPass ? "text" : "password"}
                                        name="userPassword"
                                        required
                                        placeholder="Enter Password"
                                        onChange={handleChange}
                                        value={userForm.userPassword}
                                    />
                                </div>
                            </div>
                            <div className={styles.inputContainer}>
                                <p>Confirm Password <span>*</span></p>
                                <div className={styles.passInputWrapper}>
                                    <div className={styles.viewBtn} onClick={() => handlePassView('confirmPass')}>
                                        {passwordBtnsStates.confirmPass ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                    </div>
                                    <input
                                        type={passwordBtnsStates.confirmPass ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        onChange={handleConfirmPass}
                                        value={confirmPassword}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.inputContainer}>
                                <p>Number <span>*</span></p>
                                <input
                                    required
                                    type="tel"
                                    name="userPhone"
                                    placeholder="+994XXXXXXX"
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
                                {registerLoading ? "Loading..." : "Register"}
                            </button>
                            <div className={styles.redirect}>
                                <Link to="/login">Have an account? Click here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <FooterTwo/>
        </>
    );
}
