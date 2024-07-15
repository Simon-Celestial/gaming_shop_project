import React, {useEffect, useState} from "react";

interface OdometerProps {
    currentRef: React.RefObject<HTMLDivElement>;
    stopValue: number;
    latency: number;
}

export const Odometer: React.FC<OdometerProps> = ({currentRef, stopValue, latency}) => {
    const [value, setValue] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {threshold: 0.5}
        );

        const currentElement = currentRef.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [currentRef]);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;

        if (isVisible) {
            interval = setInterval(() => {
                setValue((prevValue) => {
                    if (prevValue >= stopValue) {
                        if (interval) clearInterval(interval);
                        return prevValue;
                    }
                    return prevValue + 1;
                });
            }, latency);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isVisible, latency, stopValue]);

    return (
        <div>
            {value}
        </div>
    );
};
