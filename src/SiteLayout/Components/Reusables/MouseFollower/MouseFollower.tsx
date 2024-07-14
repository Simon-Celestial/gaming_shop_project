import React, { useEffect, useState, useCallback } from 'react';
import styles from "./MouseFollower.module.scss";

let frame = 0;

export const MouseFollower: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: MouseEvent) => {
        frame++;
        if (frame % 2 === 0) {
            const mouseX = e.pageX - window.scrollX;
            const mouseY = e.pageY - window.scrollY;
            setMousePosition({ x: mouseX, y: mouseY });
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);

    return (
        <>
            <div
                className={`${styles.mouseFollower}`}
                style={{ left: mousePosition.x, top: mousePosition.y }}
            ></div>
            <div
                className={`${styles.mouseFollowerDot}`}
                style={{ left: mousePosition.x, top: mousePosition.y }}
            ></div>
        </>
    );
};
