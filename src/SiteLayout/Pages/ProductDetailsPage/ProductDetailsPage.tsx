import styles from './ProductDetailsPage.module.scss';
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import {useParams} from "react-router-dom";
import React, {useCallback, useContext, useEffect, useMemo, useState} from "react";
import {DataContext} from "../../../Context/DataContext/DataContext.tsx";
import {PRODUCTS_DATA} from "../../../Types/types.ts";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import {Rating} from "@mui/material";
import {BasketContext} from "../../../Context/BasketContext/BasketContext.tsx";
import {Bounce, toast} from "react-toastify";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {WishlistContext} from "../../../Context/WishlishContext/WishlistContext.tsx";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade} from "swiper/modules";
import {DeviceCard} from "../../Components/Reusables/DeviceCard/DeviceCard.tsx";

export const ProductDetailsPage: React.FC = () => {
    const {productsData} = useContext(DataContext);
    const {addToCart} = useContext(BasketContext);
    const {addToWishlist, isInWishlist} = useContext(WishlistContext);

    const [product, setProduct] = useState<PRODUCTS_DATA | null>(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [scaleImage, setScaleImage] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');
    const [isProductInWishlist, setIsProductInWishlist] = useState(false);

    const similarProducts = useMemo(() => {
        return productsData?.filter(item =>
            (item?.category === product?.category || item?.brand === product?.brand) &&
            item?.id !== product?.id
        );
    }, [product?.brand, product?.category, product?.id, productsData]);

    useEffect(() => {
        if (product) {
            setIsProductInWishlist(isInWishlist(product?.id, selectedColor));
        }
    }, [isInWishlist, product, selectedColor]);


    const handleScaleImage = useCallback(() => {
        setScaleImage(prev => !prev)
    }, []);

    const handleSelectColor = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedColor(e.target.value);
    }, []);

    const handleSelectImage = useCallback((imageIndex: number) => {
        setSelectedImage(imageIndex);
        setScaleImage(false);
    }, []);

    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            const foundProduct = productsData?.find((product) =>
                product.id.toString() === id);
            setProduct(foundProduct || null);
        }
    }, [id, productsData]);

    const handleAddToCard = useCallback((product: PRODUCTS_DATA, color: string) => {
        if (selectedColor === "") {
            toast.error(`Please select color!`, {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } else {
            addToCart(product, color);
        }
    }, [addToCart, selectedColor]);

    const handleAddToCartClick = useCallback(() => {
        if (product) {
            handleAddToCard(product, selectedColor);
        } else {
            toast.error(`Problem in adding product!`, {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }, [product, selectedColor, handleAddToCard]);

    const handleAddToWishlist = useCallback((product: PRODUCTS_DATA, color: string) => {
        if (selectedColor === "") {
            toast.error(`Please select color!`, {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } else {
            addToWishlist(product, color);
        }
    }, [addToWishlist, selectedColor]);

    const handleAddToWishlistClick = useCallback(() => {
        if (product) {
            handleAddToWishlist(product, selectedColor);
        } else {
            toast.error(`Problem in adding product!`, {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }, [product, handleAddToWishlist, selectedColor]);
    
    return (
        <>
            <Header/>
            <main className={styles.pageWrapper}>
                <div className={styles.pageContent}>
                    <section className={styles.mainProductSection}>
                        <div className={styles.productTitle}>
                            <h2>{product?.name}</h2>
                            <div className={styles.rating}>
                                <h3>Rating : </h3>
                                <Rating
                                    name="read-only"
                                    value={product?.rating || 0}
                                    readOnly
                                    sx={{
                                        '& .MuiRating-icon': {
                                            color: "#0EF0AD"
                                        }
                                    }}
                                />

                            </div>
                            <div className={styles.price}>
                                ${product?.salePrice?.toFixed(2)} {product?.regularPrice ?
                                <span>${product?.regularPrice?.toFixed(2)}</span> : null}
                            </div>
                            <p>{product?.description}</p>
                            <div className={styles.details}>
                                <p><strong>SKU: NTLFL5-{product?.id}</strong></p>
                                <p><strong>Category: </strong> {product?.category}</p>
                                <p><strong>Brand: </strong> {product?.brand}</p>
                            </div>
                            <div className={styles.colorSelection}>
                                <span>Color:</span>
                                <select
                                    value={selectedColor}
                                    onChange={handleSelectColor}
                                >
                                    <option
                                        value=""
                                        defaultChecked={true}
                                        disabled={false}
                                    >
                                        Choose an option
                                    </option>
                                    {product?.colors?.map((color: string, index: number) => {
                                        return (
                                            <option
                                                value={color}
                                                key={index}
                                            >
                                                {color}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className={styles.stock}>
                                <span>{product?.quantity} in stock</span>
                            </div>
                            <div
                                className={styles.addBtn}
                                onClick={handleAddToCartClick}
                            >
                                Add to cart
                            </div>
                            <div
                                className={styles.wishlistBtn}
                                onClick={handleAddToWishlistClick}
                            >
                                add to wishlist
                                {
                                    isProductInWishlist ?
                                        <FavoriteIcon/>
                                        :
                                        <FavoriteBorderIcon/>
                                }
                            </div>
                        </div>
                        <div className={styles.productImage}>
                            <div className={styles.imagesColumn}>
                                {product?.image?.map((image, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`${styles.image} ${index === selectedImage ? styles.selected : ''}`}
                                            onClick={() => {
                                                handleSelectImage(index)
                                            }}
                                        >
                                            <img src={image} alt={product?.name}/>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={styles.mainImage}>
                                <div
                                    className={styles.scale}
                                    onClick={handleScaleImage}
                                >
                                    <ZoomInIcon/>
                                </div>
                                <img
                                    src={product?.image[selectedImage]}
                                    alt={product?.name}
                                    style={{transform: scaleImage ? "scale(1.1)" : "scale(1)"}}
                                />
                            </div>
                        </div>
                    </section>
                    <section className={styles.additionalSection}>
                        <div className={styles.sectionContent}>
                            <h2>Additional information</h2>
                            <div className={styles.infoTable}>
                                <div className={styles.tableRow}>
                                    <div className={styles.cell}>
                                        Weight:
                                    </div>
                                    <div className={styles.cell}>
                                        {product?.weight ? product.weight : "Not available"}                                    </div>
                                </div>
                                <div className={styles.tableRow}>
                                    <div className={styles.cell}>
                                        Dimensions:
                                    </div>
                                    <div className={styles.cell}>
                                        {product?.dimension ? product.dimension : "Not available"}
                                    </div>
                                </div>
                                <div className={styles.tableRow}>
                                    <div className={styles.cell}>
                                        Warranty:
                                    </div>
                                    <div className={styles.cell}>
                                        {product?.warranty ? product.warranty : "Not available"}
                                    </div>
                                </div>
                                <div className={styles.tableRow}>
                                    <div className={styles.cell}>
                                        Material:
                                    </div>
                                    <div className={styles.cell}>
                                        {product?.material ? product.material : "Not available"}
                                    </div>
                                </div>
                                <div className={styles.tableRow}>
                                    <div className={styles.cell}>
                                        RGB:
                                    </div>
                                    <div className={styles.cell}>
                                        {
                                            product?.rgb === true ?
                                                "Yes"
                                                :
                                                product?.rgb === false ?
                                                    "No"
                                                    :
                                                    "Not available"
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={styles.mayLikeSection}>
                        <div className={styles.sectionContent}>
                            <h2>You may also like…</h2>
                            <div className={styles.productsSwiper}>
                                <Swiper
                                    direction={'horizontal'}
                                    pagination={{
                                        clickable: true,
                                        dynamicBullets: true,
                                    }}
                                    modules={[EffectFade, Autoplay]}
                                    slidesPerView={Math.min(4, similarProducts?.length)}
                                    autoplay={{delay: 3000}}
                                    breakpoints={{}}
                                    spaceBetween={25}
                                    freeMode={true}
                                    loop={true}
                                >
                                    {similarProducts?.map((product) => {
                                        return (
                                            <SwiperSlide key={product?.id}>
                                                <div className={styles.cardWrapper}>
                                                    <DeviceCard data={product}/>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>

                        </div>
                    </section>
                </div>
            </main>
            <FooterOne/>
        </>
    );
};
