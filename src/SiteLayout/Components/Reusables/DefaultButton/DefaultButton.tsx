import styles from "./DefaultButton.module.scss";
import {Link} from "react-router-dom";
import React from "react";

interface DefaultButtonProps {
    title: string;
    link?: string;
    grayBtn: boolean;
    wide: boolean;
}

export const DefaultButton : React.FC<DefaultButtonProps> = ({title, link,grayBtn,wide}) => {

    return (
        <>
            {link ?
                <Link
                    to={link}
                    className={`${styles.buttonWrapper} ${grayBtn ? styles.grayBtn : ''}`}
                    style={{
                        width: wide ? "100%" : ""
                    }}
                >
                    {title}
                </Link>
                :
                <div
                    className={`${styles.buttonWrapper} ${grayBtn ? styles.grayBtn : ''}`}
                    style={{
                        width: wide ? "100%" : ""
                    }}
                >
                    {title}
                </div>
            }
        </>
    );
};
