import React, {useCallback, useContext, useEffect, useRef, useState} from "react";
import styles from "./HomePage.module.scss";
import {Header} from "../../Components/Layout/Header/Header.tsx";
import {FooterOne} from "../../Components/Layout/FooterOne/FooterOne.tsx";
import {TypeAnimation} from "react-type-animation";
import {Autoplay, EffectFade, Pagination} from 'swiper/modules';
import {DeviceCard} from "../../Components/Reusables/DeviceCard/DeviceCard.tsx";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {DefaultButton} from "../../Components/Reusables/DefaultButton/DefaultButton.tsx";
import {Odometer} from "../../Components/Reusables/Odometer/Odometer.tsx";
import Diversity2Icon from '@mui/icons-material/Diversity2';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import jobsData from "/public/data/JobsData/jobsData.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import teamData from "/public/data/TeamData/teamData.json";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import infoData from "/public/data/InfoData/infoData.json";

import {
    PAGINATION_STYLES_TYPE,
    TEAM_DATA,
    INFO_DATA,
    JOBS_DATA,
    CONTACT_DEFAULTS
} from "../../../Types/types.ts";
import {useTranslation} from "react-i18next";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import {Bounce, toast} from "react-toastify";
import {DataContext} from "../../../Context/DataContext/DataContext.tsx";
import {Loader} from "../../Components/Reusables/Loader/Loader.tsx";
import {GamesSection} from "../../Components/Sections/GamesSection/GamesSection.tsx";
import {TestimonialsSection} from "../../Components/Sections/TestimonialsSection/TestimonialsSection.tsx";


const paginationStyles: PAGINATION_STYLES_TYPE = {
    "--swiper-pagination-color": "#0EF0AD",
    "--swiper-pagination-bullet-inactive-color": "#c5c5ca",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "16px",
    "--swiper-pagination-bullet-horizontal-gap": "6px",
    "--swiper-pagination-bottom": "10px",
};
const contactDefault: CONTACT_DEFAULTS = {
    nameInput: "",
    emailInput: "",
    subjectInput: "",
    messageInput: ""
}

export const HomePage = () => {
    const {
        productsData,
        productsLoading
    } = useContext(DataContext);

    const [translatedTeam, setTranslatedTeam] = useState(teamData.en);
    const [translatedInfo, setTranslatedInfo] = useState(infoData.en);
    const [translatedJobs, setTranslatedJobs] = useState(jobsData.en)
    const [hoveredBox, setHoveredBox] = useState(1);
    const [contactInputs, setContactInputs] = useState<CONTACT_DEFAULTS>(contactDefault);

    const handleContactInputs = useCallback((field: keyof CONTACT_DEFAULTS, value: string) => {
        setContactInputs((prev: CONTACT_DEFAULTS) => ({
            ...prev,
            [field]: value,
        }));
    }, [setContactInputs]);


    const handleSendMessage = useCallback(() => {
        if (
            contactInputs.nameInput !== "" &&
            contactInputs.emailInput !== "" &&
            contactInputs.subjectInput !== "" &&
            contactInputs.messageInput !== ""
        ) {
            toast.success(`Message sent successfully!`, {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
            setContactInputs(contactDefault);
        } else {
            toast.error(`Fields must not be empty!`, {
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            });
        }
    }, [contactInputs, setContactInputs]);



    const odometerRef = useRef<HTMLDivElement | null>(null);
    const counterRef = useRef<HTMLDivElement | null>(null);

    const {i18n} = useTranslation();


    useEffect(() => {
        if (i18n.language === "en") {
            setTranslatedTeam(teamData.en);
            setTranslatedInfo(infoData.en);
            setTranslatedJobs(jobsData.en);
        } else if (i18n.language === "ru") {
            setTranslatedTeam(teamData.ru);
            setTranslatedInfo(infoData.ru);
            setTranslatedJobs(jobsData.ru);
        } else {
            setTranslatedTeam(teamData.tr);
            setTranslatedInfo(infoData.tr);
            setTranslatedJobs(jobsData.tr);
        }
    }, [i18n.language]);


    const handleHoverBox = useCallback((boxID: number) => {
        setHoveredBox(boxID);
    }, [setHoveredBox]);

    return (
        <>
            {
                productsLoading &&
                <Loader/>
            }
            <Header/>
            <main className={styles.homeWrapper}>
                <section className={styles.bannerSection}>
                    {/*DECORATIONS*/}
                    <div className={`${styles.decoration} ${styles.planet}`}>
                        <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/planet.png" alt="Planet"/>
                    </div>
                    <div className={`${styles.decoration} ${styles.joystick}`}>
                        <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/console-2.png"
                             alt="Console"/>
                    </div>
                    <div className={`${styles.decoration} ${styles.controllers}`}>
                        <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/console-1.png"
                             alt="Console"/>
                    </div>
                    <div className={`${styles.decoration} ${styles.tubesSolid}`}>
                        <div className={styles.wideTube}></div>
                        <div className={styles.thinTube}></div>
                    </div>
                    <div className={`${styles.decoration} ${styles.tubesSolid} ${styles.tubeTransparent}`}>
                        <div className={styles.wideTube}></div>
                        <div className={styles.thinTube}></div>
                    </div>
                    <div className={`${styles.decoration} ${styles.starsDefault} ${styles.starsOne}`}>
                        <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-3.png"
                             alt="Star"/>
                        <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-2.png"
                             alt="Star"/>
                        <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-6.png"
                             alt="Star"/>
                    </div>
                    <div className={`${styles.decoration} ${styles.starsDefault} ${styles.starsTwo}`}>
                        <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-4.png"
                             alt="Star"/>
                        <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-5.png"
                             alt="Star"/>
                        <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-3.png"
                             alt="Star"/>
                    </div>
                    <div className={`${styles.decoration} ${styles.starsDefault} ${styles.starsThree}`}>
                        <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-2.png"
                             alt="Star"/>
                        <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-4.png"
                             alt="Star"/>
                        <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-5.png"
                             alt="Star"/>
                        <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-3.png"
                             alt="Star"/>
                    </div>
                    <div className={`${styles.decoration} ${styles.starsDefault} ${styles.starsFour}`}>
                        <img src="https://pixner.net/gamestorm3/main/assets/images/abs-items/ellipse-6.png"
                             alt="Star"/>
                    </div>
                    <div className={styles.sectionContent}>
                        <div className={styles.titleContainer}>
                            <h4>Enjoy Gaming World</h4>
                            <h2>We Selling Devices</h2>
                            <TypeAnimation
                                sequence={['Entertainment', 600, 'Quality', 600, 'Reliability', 600]}
                                style={{fontSize: '2em'}}
                                repeat={Infinity}
                            />
                            <p>Creating innovative, fun-filled gaming devices that bring vibrant colors to your gaming
                                experience.</p>
                            <DefaultButton
                                title={'Explore Our Products'}
                                link={'/shop'}
                                grayBtn={false}
                                wide={false}
                            />
                        </div>
                        <div className={styles.swiperContainer}>
                            <div className={styles.swiperHead}>
                                <img src="/images/icons/bottomArrow.png" alt="arrow bottom"/>
                                <p>Featured Device</p>
                            </div>
                            <div className={styles.swiperWrapper}>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={25}
                                    freeMode={true}
                                    loop={true}
                                    direction={'horizontal'}
                                    pagination={{
                                        clickable: true,
                                        dynamicBullets: true,
                                    }}
                                    modules={[EffectFade, Autoplay, Pagination]}
                                    autoplay={{delay: 3000}}
                                    style={paginationStyles as React.CSSProperties}
                                >
                                    {productsData?.map((product) => {
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
                    </div>
                </section>
                <section className={styles.aboutSection} ref={odometerRef}>
                    <div className={styles.sectionContent}>
                        <div className={styles.imageContainer}>
                            <div className={styles.experienceBlock}>
                                <div className={styles.experienceContent}>
                                    <div className={styles.number}><Odometer
                                        currentRef={odometerRef}
                                        stopValue={31}
                                        latency={75}
                                    />+
                                    </div>
                                    <div className={styles.title}>
                                        Years Of Experience
                                    </div>
                                </div>
                            </div>
                            <img src="https://pixner.net/gamestorm3/main/assets/images/about-block-bg.png" alt="Users"/>
                        </div>
                        <div className={styles.titleContainer}>
                            <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                                <h4>Welcome To <span>GAMESTORM</span> Gaming Shop</h4>
                                <h2>Bringing People Together Through <span>The Power Of Play</span></h2>
                                <p>As Gamestorm, we continue to open doors to new worlds every day and we are
                                    working excitedly introduce new gaming devices!</p>
                            </div>
                            <div className={styles.infoContainers}>
                                <div className={styles.container}>
                                    <span>
                                        <Odometer
                                            currentRef={odometerRef}
                                            stopValue={500}
                                            latency={5}
                                        />
                                        M
                                        <p>+</p></span>
                                    <p>Sales, or 6% of the world’s population.</p>
                                </div>
                                <div className={styles.container}>
                                    <span>
                                        <Odometer
                                            currentRef={odometerRef}
                                            stopValue={2}
                                            latency={1250}
                                        />
                                        M
                                        <p>+</p>
                                    </span>
                                    <p>Our products have over 2 million unique daily customers.</p>
                                </div>
                                <div className={styles.container}>
                                    <span>
                                        <Odometer
                                            currentRef={odometerRef}
                                            stopValue={52}
                                            latency={50}
                                        />
                                        <p>+</p>
                                    </span>
                                    <p>Experts collaborating to blow your mind in one place.</p>
                                </div>
                                <div className={styles.container}>
                                    <span>
                                        <Odometer
                                            currentRef={odometerRef}
                                            stopValue={100}
                                            latency={25}
                                        />
                                        <p>%</p></span>
                                    <p>Our devices gives you full experience.</p>
                                </div>

                            </div>
                            <DefaultButton
                                title={"Explore Out Products"}
                                link={"/shop"}
                                grayBtn={false}
                                wide={false}
                            />
                        </div>
                    </div>
                </section>
                <GamesSection />
                <section className={styles.teamSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.teamTitle}>
                            <div className={`${styles.pageHeading}`}>
                                <h4>We Have A Passion For <span>Gaming!</span></h4>
                                <h2>Our Team Consists of Professionals. <span>And We're Proud Of It.</span></h2>
                                <p>Our dynamic team blends tech-savvy sales professionals, knowledgeable customer
                                    service representatives, innovative marketing strategists, and visionary product
                                    managers.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.teamSwiper}>
                        <Swiper
                            slidesPerView={4}
                            modules={[Autoplay]}
                            autoplay={{delay: 2000}}
                            breakpoints={{
                                1100: {
                                    slidesPerView: 4,
                                },
                                840: {
                                    slidesPerView: 3,
                                },
                                550: {
                                    slidesPerView: 2,
                                },
                                0: {
                                    slidesPerView: 1,
                                },
                            }}
                            spaceBetween={50}
                            freeMode={true}
                            loop={true}
                        >
                            {translatedTeam?.map((member: TEAM_DATA) => {
                                return (
                                    <SwiperSlide key={member?.id}>
                                        <div
                                            className={`${styles.teamSlide} ${member.id % 2 === 1 ? styles.margin : ''}`}>
                                            <div className={styles.image}>
                                                <img src={member?.image} alt={member?.name}/>
                                            </div>
                                            <div className={styles.title}>
                                                <h2>{member?.name}</h2>
                                                <p>{member?.job}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>

                    </div>
                </section>
                <section className={styles.counterSection} ref={counterRef}>
                    <div className={styles.sectionContent}>
                        <div className={styles.informationContainer}>
                            {translatedInfo?.map((data: INFO_DATA) => {
                                return (
                                    <div
                                        key={data?.id}
                                        className={`${styles.box} ${data?.id === hoveredBox ? styles.activeBox : ''}`}
                                        onMouseEnter={() => handleHoverBox(data?.id)}>
                                        <p>{data?.title}</p>
                                        <Odometer
                                            currentRef={counterRef}
                                            stopValue={data?.value}
                                            latency={data?.delay}
                                        />
                                        {data?.prefix}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section className={styles.productsSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.productsTitle}>
                            <div className={`${styles.pageHeading}`}>
                                <h4>Embrace the World of <span>Gaming!</span></h4>
                                <h2>Our Dedicated Shop is Here for You. <span>Experience the Best.</span></h2>
                                <p>Explore an extensive variety of gaming equipment and peripherals. We providing an
                                    unparalleled gaming experience.</p>
                            </div>

                        </div>
                        <div className={styles.productsSwiper}>
                            <Swiper
                                direction={'horizontal'}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                modules={[EffectFade, Autoplay, Pagination]}
                                style={paginationStyles as React.CSSProperties}
                                slidesPerView={3}
                                autoplay={{delay: 3000}}
                                breakpoints={{
                                    1100: {
                                        slidesPerView: 3,
                                    },
                                    840: {
                                        slidesPerView: 2,
                                    },
                                    550: {
                                        slidesPerView: 1,
                                    }
                                }}
                                spaceBetween={25}
                                freeMode={true}
                                loop={true}
                            >
                                {productsData?.map((product) => {
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
                <section className={styles.lifeSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.topTitle}>
                            <div className={`${styles.pageHeading}`}>
                                <h4>We're Part Of A <span>Big Family</span></h4>
                                <h2>Get to know our staff <span>Better.</span></h2>
                                <p>Experience the magic of gaming development with a look inside our studio. See the
                                    art, science, and innovation at work.</p>
                            </div>
                        </div>
                        <div className={styles.imagesContainer}>
                            <div className={styles.imagesRow}>
                                <div className={styles.bigImg}>
                                    <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-1.png"
                                         alt="Office"/>
                                </div>
                                <div className={styles.bigImg}>
                                    <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-2.png"
                                         alt="Office"/>
                                </div>
                            </div>
                            <div className={styles.imagesRow}>
                                <div className={styles.smallImg}>
                                    <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-3.png"
                                         alt="Office"/>
                                </div>
                                <div className={styles.smallImg}>
                                    <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-4.png"
                                         alt="Office"/>
                                </div>
                                <div className={styles.smallImg}>
                                    <img src="https://pixner.net/gamestorm3/main/assets/images/life-post-img-5.png"
                                         alt="Office"/>
                                </div>
                            </div>


                        </div>
                        <div className={styles.joinContainer}>
                            <h2>join us!</h2>
                            <p>Still haven't found your dream job? Join Team Gamestorm and become the next Gamestorm of
                                an ever-growing family!</p>
                            <DefaultButton
                                link={"/about"}
                                title={"Check Open Positions"}
                                grayBtn={false}
                                wide={false}
                            />
                        </div>

                    </div>
                </section>
                <section className={styles.jobsSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.topTitle}>
                            <div className={`${styles.pageHeading}`}>
                                <h4>We're Looking For <span>Talented Professionals</span></h4>
                                <h2><span>Let's Build The Future</span> Of Gaming Industry Together!</h2>
                                <p>Our belief is that being simple, honest, self-driven and motivated combined with the
                                    constant pursuit of the ultimate company atmosphere can help grow a creative and
                                    robust team.</p>
                            </div>
                        </div>
                        <div className={styles.jobsContainer}>
                            {translatedJobs?.map((job: JOBS_DATA) => {
                                return (
                                    <div key={job?.id} className={styles.jobBlock}>
                                        <div className={styles.topRow}>
                                            <div className={styles.iconBox}>
                                                <Diversity2Icon/>
                                            </div>
                                            <div className={styles.jobNameColumn}>
                                                <h2>{job?.jobName}</h2>
                                                <p>{job?.jobLocation}</p>
                                            </div>
                                            <div className={styles.badgeBox}>
                                                {job?.category}
                                            </div>
                                        </div>
                                        <div className={styles.bottomRow}>
                                            <div className={styles.timeBox}>
                                                <WorkOutlineIcon/> <p>Full Time</p>
                                            </div>
                                            <div className={styles.timeBox}>
                                                <AccessTimeIcon/> <p>Full Time</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                {/*TESTIMONIALS SECTION*/}
                <TestimonialsSection />
                <section className={styles.communitySection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.imageBlock}>
                            <img src="https://pixner.net/gamestorm3/main/assets/images/call-to-action-circle.png"
                                 alt="Community Gamers"/>
                            <span className={`${styles.decoration} ${styles.circleOne}`}></span>
                            <span className={`${styles.decoration} ${styles.circleTwo}`}></span>
                            <span className={`${styles.decoration} ${styles.circleThree}`}></span>
                            <span className={`${styles.decoration} ${styles.circleFour}`}></span>
                            <span className={`${styles.decoration} ${styles.circleFive}`}></span>
                            <span className={`${styles.decoration} ${styles.circleSix}`}></span>
                            <span className={`${styles.decoration} ${styles.circleSeven}`}></span>
                            <span className={`${styles.decoration} ${styles.circleEight}`}></span>
                            <span className={`${styles.decoration} ${styles.circleNine}`}></span>
                            <span className={`${styles.decoration} ${styles.circleTen}`}></span>
                        </div>
                        <div className={styles.titleBlock}>
                            <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                                <h4>Join Our <span>Community!</span></h4>
                                <h2>Connect With <span>Gamers Worldwide</span></h2>
                                <p>Join the revolution and immerse yourself in the ultimate gaming experience, where the
                                    boundaries between reality and fantasy blur, and the only limit is your imagination.
                                    Sign up now and be the first to play our latest game releases.</p>
                            </div>
                            <div className={styles.buttonsBlock}>
                                <DefaultButton
                                    title={"Explore Our Games"}
                                    link={"/games"}
                                    grayBtn={false}
                                    wide={false}
                                />
                                <DefaultButton
                                    title={"Join Our Community"}
                                    link={"/about"}
                                    grayBtn={true}
                                    wide={false}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.contactUsSection}>
                    <div className={styles.sectionContent}>
                        <div className={styles.titleBlock}>
                            <div className={`${styles.pageHeading} ${styles.notCenteredText}`}>
                                <h4>Have <span>Questions?</span></h4>
                                <h2>We'd Love To <span>Hear From You!</span></h2>
                                <p>Please fill out the form and let us know about your concerns.We will try our best to
                                    provide optimized solutions.</p>
                            </div>
                            <div className={styles.infoRow}>
                                <div className={styles.icon}>
                                    <LocalPhoneIcon/>
                                </div>
                                <p>+(0) 123 - 456 - 789</p>
                            </div>
                            <div className={styles.infoRow}>
                                <div className={styles.icon}>
                                    <EmailIcon/>
                                </div>
                                <p>example@example.com</p>
                            </div>
                        </div>
                        <div className={styles.formContainer}>
                            <div className={styles.formBox}>
                                <div className={styles.inputBox}>
                                    Name
                                    <input
                                        className={styles.input}
                                        name="nameInput"
                                        type="text"
                                        placeholder={"Enter Your Name"}
                                        value={contactInputs.nameInput}
                                        onChange={(e) => handleContactInputs('nameInput', e.target.value)}

                                    />
                                </div>
                                <div className={styles.inputBox}>
                                    Email
                                    <input
                                        className={styles.input}
                                        name="emailInput"
                                        type="email"
                                        placeholder={"Enter your email"}
                                        value={contactInputs.emailInput}
                                        onChange={(e) => handleContactInputs('emailInput', e.target.value)}

                                    />
                                </div>
                                <div className={styles.inputBox}>
                                    Subject
                                    <input
                                        className={styles.input}
                                        name="subjectInput"
                                        type="text"
                                        placeholder={"Enter Subject"}
                                        value={contactInputs.subjectInput}
                                        onChange={(e) => handleContactInputs('subjectInput', e.target.value)}

                                    />
                                </div>
                                <div className={styles.inputBox}>
                                    Leave us a message
                                    <textarea
                                        className={`${styles.input} ${styles.messageInput}`}
                                        name="messageInput"
                                        placeholder={"Please type your Message here..."}
                                        value={contactInputs.messageInput}
                                        onChange={(e) => handleContactInputs('messageInput', e.target.value)}

                                    />
                                </div>
                                <div onClick={handleSendMessage}>
                                    <DefaultButton
                                        link={""}
                                        grayBtn={false}
                                        title={"Send Message"}
                                        wide={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FooterOne/>
        </>
    );
};
