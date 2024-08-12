import styles from "./VideoContainer.module.scss";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import React, {useCallback, useRef, useState} from "react";
import {useTranslation} from "react-i18next";

interface VideoContainerProps {
    image: string;
    link: string;
}

export const VideoContainer: React.FC<VideoContainerProps> = ({image, link}) => {
    const [videoVisible, setVideoVisible] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const handleOpenVideo = useCallback(() => {
        setVideoVisible(true);
        if (iframeRef.current) {
            iframeRef.current.src = link;
        }
    }, [link]);

    const handleCloseVideo = useCallback(() => {
        setVideoVisible(false);
        if (iframeRef.current) {
            iframeRef.current.src = "";
        }
    }, []);

    const {t} = useTranslation();

    return (
        <div className={styles.videoContainer}>
            <div className={`${styles.videoScreen} ${videoVisible ? styles.videoOpened : ''}`}>
                <div className={styles.container}>
                    <div
                        className={styles.closeBtn}
                        onClick={handleCloseVideo}
                    >
                        <HighlightOffIcon/>
                    </div>
                    <iframe
                        ref={iframeRef}
                        className={styles.iframe}
                        src={link}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="YouTube Video Player"
                    ></iframe>
                </div>

            </div>
            <div className={styles.videoBox}>
                <div
                    className={styles.play}
                    onClick={handleOpenVideo}
                >
                    <p>{t('videoContainer.play')}</p>
                </div>
                <img src={image} alt="Video"/>
            </div>
        </div>
    );
};
