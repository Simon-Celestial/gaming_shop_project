import styles from "./Loader.module.scss";
import {ThreeCircles} from "react-loader-spinner";
export const Loader = () => {
    return (
           <ThreeCircles
               visible={true}
               height="100"
               width="100"
               color="#0EF0AD"
               ariaLabel="three-circles-loading"
               wrapperStyle={{}}
               wrapperClass={styles.loaderWrapper}
           />
    )
}