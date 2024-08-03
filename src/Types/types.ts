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

export interface TEAM_DATA {
    id: number;
    name: string;
    image: string;
    job: string;
}

export interface INFO_DATA {
    id: number;
    value: number;
    prefix: string;
    title: string;
    delay: number;
}

export interface JOBS_DATA {
    id: number;
    jobName: string;
    jobLocation: string;
    category: string;
}

export interface COMMENTS_DATA {
    id: number;
    name: string;
    image: string;
    comment: string;
    rating: number;
    country: string;
    published: string;
}

export interface CONTACT_DEFAULTS {
    nameInput: string,
    emailInput: string,
    subjectInput: string,
    messageInput: string
}

export interface PRODUCTS_DATA {
    id: number;
    name: string;
    image: string[];
    category: string;
    brand: string;
    offer: string;
    salePrice: number;
    regularPrice: number | null;
    colors: string[];
    rating: number;
    quantity: number;
    description: string;
    dimension: string;
    weight: string;
    warranty: string;
    material: string;
    rgb: true
    count: number;
    selectedColor: string;
}

export interface CUSTOMERS_COMMENTS_DATA {
    id: number;
    product: string;
    image: string;
    userImage: null | string;
    comment: string;
    user: string;
    rating: number;
}