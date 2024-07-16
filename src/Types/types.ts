export interface GENRES_TYPE {
    id: string;
    img: string;
}

export interface PAGINATION_STYLES_TYPE {
    "--swiper-pagination-color": string;
    "--swiper-pagination-bullet-inactive-color": string;
    "--swiper-pagination-bullet-inactive-opacity": string;
    "--swiper-pagination-bullet-size": string;
    "--swiper-pagination-bullet-horizontal-gap": string;
    "--swiper-pagination-bottom": string;
}
export interface GAME_TYPE {
    id: number;
    name: string;
    poster: string;
    link: string;
    new: boolean;
    rating: number;
    description: string;
    release: string;
    publisher: string;
    tags: string[];
}

export interface GAMES_DATA {
    action: GAME_TYPE[];
    racing: GAME_TYPE[];
    strategy: GAME_TYPE[];
    rpg: GAME_TYPE[];
}
