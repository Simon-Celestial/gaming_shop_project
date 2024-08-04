import styles from "./GameCard.module.scss";
import StarsIcon from "@mui/icons-material/Stars";
import {Link} from "react-router-dom";
import React, {useCallback} from "react";
import {GAME_TYPE} from "../../../../Types/types.ts";

interface GAME_CARD_PROPS {
    data: GAME_TYPE;
}

export const GameCard: React.FC<GAME_CARD_PROPS> = ({data}) => {

    const handleRatingColor = useCallback((rating: number): string => {
        if (rating > 4) {
            return "#0EF0AD"
        } else if (rating >= 3 && rating <= 4) {
            return "orange"
        } else {
            return "red"
        }
    }, []);


    return (
        <div className={styles.gameBox}>
            {
                data?.new ?
                    <div className={styles.flag}>
                        <p>new</p>
                    </div>
                    :
                    null
            }
            <div className={styles.imageBox}>
                <img src={`${data?.poster}`} alt={data?.name} loading="lazy"/>
            </div>
            <div className={styles.titleBox}>
                <h2>{data?.name}</h2>
                <h3>
                    {data?.tags?.map((tag,index) => <span key={index}>{tag}</span>)}
                </h3>
                <p>{data?.description}</p>
                <div className={styles.infoBox}>
                    <div className={styles.infoItem}>
                        <h2>{data?.release}</h2>
                        <p>Release Date</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h3>
                            <StarsIcon sx={{
                                color: handleRatingColor(data?.rating)
                            }}
                            />
                            {data?.rating}
                        </h3>
                        <p>
                            Game Rating
                        </p>
                    </div>
                    <div className={styles.infoItem}>
                        <h4>{data?.publisher}</h4>
                        <p>Publisher</p>
                    </div>
                </div>
                <Link to={data?.link} className={styles.linkBox} target={"_blank"}>
                    <img src="/images/icons/steam.webp" alt="steam"/>
                    <div className={styles.blockTitle}>
                        <p>Available at</p>
                        <h2>STEAM</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};
