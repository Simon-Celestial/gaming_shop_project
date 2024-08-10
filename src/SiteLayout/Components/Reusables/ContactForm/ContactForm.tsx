import React, {useCallback, useState} from "react";
import {Bounce, toast} from "react-toastify";
import styles from "./ContactForm.module.scss";
import {DefaultButton} from "../DefaultButton/DefaultButton.tsx";

interface INPUT_TYPE {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const defaults: INPUT_TYPE = {
    name: "",
    email: "",
    subject: "",
    message: ""
}


export const ContactForm = () => {
    const [inputState, setInputState] = useState(defaults);

    const handleInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const {name, value} = event.target;
            setInputState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        },
        []
    );

    const handleSendMessage = useCallback(() => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (
            inputState?.name === '' ||
            inputState?.email === '' ||
            inputState?.subject === '' ||
            inputState?.message === ''
        ) {
            toast.error('Please fill all fields!', {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
        } else if (!emailPattern.test(inputState?.email)) {
            toast.error('Please enter a valid email address!', {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
        } else {
            toast.success('Your message has been sent successfully!', {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
            setInputState(defaults);
        }
    }, [inputState?.email, inputState?.message, inputState?.name, inputState?.subject]);

    return (
        <div className={styles.formContent}>
            <div className={styles.inputWrapper}>
                Name
                <input
                    onChange={handleInputChange}
                    value={inputState?.name}
                    type="text"
                    name={"name"}
                    placeholder={"Enter your name"}
                />
            </div>
            <div className={styles.inputWrapper}>
                Email
                <input
                    onChange={handleInputChange}
                    value={inputState?.email}
                    type="email"
                    name={"email"}
                    placeholder={"Enter your email"}
                />
            </div>
            <div className={styles.inputWrapper}>
                Subject
                <input
                    onChange={handleInputChange}
                    value={inputState?.subject}
                    type="text"
                    name={"subject"}
                    placeholder={"Enter subject"}
                />
            </div>
            <div className={styles.inputWrapper}>
                Leave us message
                <textarea
                    onChange={handleInputChange}
                    value={inputState?.message}
                    name={"message"}
                    placeholder={"Please type your message here..."}
                />
            </div>
            <div
                className={styles.btnWrapper}
                onClick={handleSendMessage}
            >
                <DefaultButton
                    title={"Send Message"}
                    link={""}
                    grayBtn={false}
                    wide={false}
                />
            </div>

        </div>
    );
};
