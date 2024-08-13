import styles from "./DefaultButton.module.scss";
import {Link} from "react-router-dom";
import React from "react";
import {useTranslation} from "react-i18next";

interface DefaultButtonProps {
    title: string;
    link?: string;
    grayBtn: boolean;
    wide: boolean;
}

export const DefaultButton : React.FC<DefaultButtonProps> = ({title, link,grayBtn,wide}) => {

    const {i18n} = useTranslation();
    return (
        <>
            {link ?
                <Link
                    to={link}
                    className={`${styles.buttonWrapper} ${grayBtn ? styles.grayBtn : ''}`}
                    style={{
                        width: wide ? "100%" : "",
                        fontWeight: i18n.language === "ru"? "600" : ''
                    }}
                >
                    {title}
                </Link>
                :
                <div
                    className={`${styles.buttonWrapper} ${grayBtn ? styles.grayBtn : ''}`}
                    style={{
                        width: wide ? "100%" : "",
                        fontWeight: i18n.language === "ru"? "600" : ''
                    }}
                >
                    {title}
                </div>
            }
        </>
    );
};
