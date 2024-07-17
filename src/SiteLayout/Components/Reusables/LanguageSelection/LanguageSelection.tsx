import styles from "./LanguageSelection.module.scss";
import React, {useCallback, useEffect, useState, MouseEvent} from "react";
import {useTranslation} from "react-i18next";
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';

interface Language {
    id: string;
    name: string;
}

const languages: Language[] = [
    {
        id: "en",
        name: "English"
    },
    {
        id: "ru",
        name: "Русский"
    },
    {
        id: "tr",
        name: "Türkçe"
    }
];

export const LanguageSelection: React.FC = () => {
    const [languageOpen, setLanguageOpen] = useState<boolean>(false);

    const {i18n} = useTranslation();

    const changeLanguageHandler = useCallback((language: string) => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    }, [i18n]);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);


    const languageOpenHandler = useCallback((event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setLanguageOpen(prevState => !prevState);
    }, []);

    const languageClickHandler = useCallback((id: string) => {
        changeLanguageHandler(id);
        setLanguageOpen(false);
    }, [changeLanguageHandler]);

    const handleWidgetClose = useCallback((setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
        setIsOpen(false);
    }, []);

    useEffect(() => {
        const action = () => {
            handleWidgetClose(setLanguageOpen);
        };
        document.addEventListener("click", action);
        return () => {
            document.removeEventListener("click", action);
        };
    }, [handleWidgetClose]);

    return (
        <div className={`${styles.languageSelection}`}
             onClick={languageOpenHandler}>
            <span>{i18n.language}</span>
            <KeyboardControlKeyIcon className={languageOpen ? styles.rotate : ""}/>
            <div className={`${styles.languageDropdown} ${languageOpen ? styles.languageVisible : ""}`}
                 onClick={e => e.stopPropagation()}>
                {languages.map((language) => (
                    <p className={i18n.language === language?.id ? styles.selected : ""} key={language?.id}
                       onClick={() => languageClickHandler(language?.id)}>{language?.name}</p>
                ))}
            </div>
        </div>
    );
};
