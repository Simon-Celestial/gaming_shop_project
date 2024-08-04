import styles from './GamesSection.module.scss';
import {GameCard} from "../../Reusables/GameCard/GameCard.tsx";
import React, {useCallback, useEffect, useMemo, useState} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import genresData from "/public/data/GenresData/genresData.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import gamesData from "/public/data/GamesData/gamesData.json";

import {
    GENRES_TYPE,
    GAME_TYPE,
} from "../../../../Types/types.ts";
import {useTranslation} from "react-i18next";



export const GamesSection = () => {

    const [selectedGenre, setSelectedGenre] = useState("action");
    const [translatedGames, setTranslatedGames] = useState(gamesData.en[0]);
    const [inputValue, setInputValue] = useState("");

    const {i18n} = useTranslation();


    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedGames(gamesData.en[0]);
        } else if (i18n.language === "ru") {
            setTranslatedGames(gamesData.ru[0]);
        } else {
            setTranslatedGames(gamesData.tr[0]);
        }
    }, [i18n.language]);


    const handleInputSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }, [setInputValue]);


    const handleSelectGenre = useCallback((genreID: string): void => {
        setSelectedGenre(genreID)
    }, [setSelectedGenre]);

    const filteredGames = useMemo(() => {
        let games: GAME_TYPE[] = [];

        if (selectedGenre === "action") {
            games = translatedGames.action;
        } else if (selectedGenre === "racing") {
            games = translatedGames.racing;
        } else if (selectedGenre === "rpg") {
            games = translatedGames.rpg;
        } else {
            games = translatedGames.strategy;
        }

        if (inputValue) {
            return games.filter((game: GAME_TYPE) =>
                game?.name?.toLowerCase().includes(inputValue?.toLowerCase())
            );
        }

        return games;
    }, [selectedGenre, translatedGames, inputValue]);

    return (
        <section className={`${styles.gamesSection} ${filteredGames?.length === 0 ? styles.noJoysticks : ''}`}>
            <div className={styles.sectionContent}>
                <div className={styles.topContainer}>
                    <div className={styles.pageHeading}>
                        <h4>Feel Unforgettable <span>Gaming Experience</span></h4>
                        <h2><span>Our Products</span> Will Give You The Best Feelings
                            During <span>GamePlay</span>
                        </h2>
                        <p>Our products are distinguished by reliability, low response time, and
                            user-friendliness
                            for better immersion in the game.</p>
                    </div>
                    <div className={styles.genresContainer}>
                        <div className={styles.genresRow}>
                            {genresData?.map((genre: GENRES_TYPE) => {
                                return (
                                    <div key={genre?.id}
                                         className={`${styles.genreBox} ${genre?.id === selectedGenre ? styles.active : ''}`}
                                         onClick={() => handleSelectGenre(genre?.id)}>
                                        <img src={genre?.img} alt={genre?.id}/>
                                    </div>
                                )
                            })}

                        </div>
                        <div className={styles.gameSearch}>
                            <input type="text"
                                   placeholder={"Type to search..."}
                                   onChange={handleInputSearch}
                                   value={inputValue}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.gamesContainer}>
                    {
                        filteredGames?.length > 0 ?
                            filteredGames?.map((game: GAME_TYPE) => {
                                return (
                                    <GameCard key={game?.id} data={game}/>
                                )
                            })
                            :
                            <div className={styles.nothingFound}>Nothing found...</div>
                    }

                </div>
            </div>
        </section>

    );
};
