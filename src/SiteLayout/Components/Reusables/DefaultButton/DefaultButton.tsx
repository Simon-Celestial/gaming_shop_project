import styles from "./DefaultButton.module.scss";
import {Link} from "react-router-dom";
import React from "react";

interface DefaultButtonProps {
    title: string;
    link?: string;
}

export const DefaultButton : React.FC<DefaultButtonProps> = ({title, link}) => {

    return (
        <>
            {link ?
                <Link to={link} className={styles.buttonWrapper}>
                    {title}
                </Link>
                :
                <div className={styles.buttonWrapper}>
                    {title}
                </div>
            }
        </>
    );
};
