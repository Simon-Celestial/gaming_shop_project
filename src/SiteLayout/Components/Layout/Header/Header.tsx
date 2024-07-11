import styles from './Header.module.scss';
export const Header = () => {
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.headerContent}>
                <div className={styles.leftBlock}>
                    <div className={styles.logoBlock}>
                        <img src="/images/siteLogo.png" alt="Project Logo"/>
                        <p>game<span>storm</span></p>
                    </div>
                    <div className={styles.phoneBlock}>

                    </div>
                </div>
            </div>
        </header>
    );
};
