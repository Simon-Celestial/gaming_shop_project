import React, {useCallback, useState} from "react";
import {Bounce, toast} from "react-toastify";
import styles from "./ContactForm.module.scss";
import {DefaultButton} from "../DefaultButton/DefaultButton.tsx";
import {useTranslation} from "react-i18next";

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

    const {t} = useTranslation();
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
            toast.error(`${t('contactForm.pleaseFillAllFields')}`, {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
        } else if (!emailPattern.test(inputState?.email)) {
            toast.error(`${t('contactForm.pleaseEnterValidEmail')}`, {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
        } else {
            toast.success(`${t('contactForm.messageSentSuccess')}`, {
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
    }, [inputState?.email, inputState?.message, inputState?.name, inputState?.subject, t]);

    return (
        <div className={styles.formContent}>
            <div className={styles.inputWrapper}>
                {t('contactForm.name')}
                <input
                    onChange={handleInputChange}
                    value={inputState?.name}
                    type="text"
                    name={"name"}
                    placeholder={t('contactForm.enterYourName')}
                />
            </div>
            <div className={styles.inputWrapper}>
                {t('contactForm.email')}
                <input
                    onChange={handleInputChange}
                    value={inputState?.email}
                    type="email"
                    name={"email"}
                    placeholder={t('contactForm.enterYourEmail')}
                />
            </div>
            <div className={styles.inputWrapper}>
                {t('contactForm.subject')}
                <input
                    onChange={handleInputChange}
                    value={inputState?.subject}
                    type="text"
                    name={"subject"}
                    placeholder={t('contactForm.enterSubject')}
                />
            </div>
            <div className={styles.inputWrapper}>
                {t('contactForm.leaveMessage')}
                <textarea
                    onChange={handleInputChange}
                    value={inputState?.message}
                    name={"message"}
                    placeholder={t('contactForm.typeYourMessage')}
                />
            </div>
            <div
                className={styles.btnWrapper}
                onClick={handleSendMessage}
            >
                <DefaultButton
                    title={t('contactForm.sendMessage')}
                    link={""}
                    grayBtn={false}
                    wide={false}
                />
            </div>
        </div>
    );
};
