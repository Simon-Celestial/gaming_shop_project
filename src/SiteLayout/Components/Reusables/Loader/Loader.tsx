import styles from "./Loader.module.scss";
import {ThreeCircles} from "react-loader-spinner";
import {useEffect, useState} from "react";
export const Loader = () => {
    const [dots, setDots] = useState<string>("...");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prevDots  => (prevDots.length < 3 ? prevDots + "." : "."));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.loaderWrapper}>
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#0EF0AD"
                ariaLabel="three-circles-loading"
            />
            <h2 className={styles.title}>Loading<p>{dots}</p></h2>

        </div>
    )
}