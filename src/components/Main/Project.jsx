import React from 'react';
import '../../pages/Project/ProjectPage.css';
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from 'swiper/modules';

// Vite way to import all images in a folder
const images = import.meta.glob('../../img/proyecto-*.jpg', { eager: true });
const proyectImg = Object.entries(images).reduce((acc, [path, mod]) => {
    const fileName = path.split('/').pop();
    acc[fileName] = mod.default;
    return acc;
}, {});

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg["proyecto-14.jpg"]}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Justice</h3>
                            <p>lawyers website</p>
                            <p className="tecnologias">
                                HTML5<span> -</span> CSS<span> -</span> JavaScript<span> -</span> Bootstrap
                            </p>
                            <a href="https://justice-sigma.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/isroiljondeveloperad/Justice" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg["proyecto-7.jpg"]}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Power Engine</h3>
                            <p>Automobiles Website</p>
                            <p className="tecnologias">
                                HTML5<span> -</span> CSS<span> -</span> JavaScript
                            </p>
                            <a href="https://powerengine.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/isroiljondeveloperad/Powerengine" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg["proyecto-12.jpg"]}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>EveryRunnig</h3>
                            <p>Website shoes</p>
                            <p className="tecnologias">
                                HTML5<span> -</span> CSS<span> -</span> JavaScript<span> -</span> Bootstrap
                            </p>
                            <a href="https://running-six-ebon.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/isroiljondeveloperad/" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg["proyecto-8.jpg"]}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>ShopTec</h3>
                            <p>Ecommerce</p>
                            <p className="tecnologias">
                                HTML5<span> -</span> CSS<span> -</span> Sass<span> -</span> JavaScript
                            </p>
                            <a href="https://shop-nine-virid.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/isroiljondeveloperad/shop" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg["proyecto-10.jpg"]}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Elegant Hand</h3>
                            <p>Watch Shop</p>
                            <p className="tecnologias">
                                HTML5<span> -</span> CSS<span> -</span> JavaScript
                            </p>
                            <a href="https://elegant-hand-ruby.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/isroiljondeveloperad/elegantHand" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet />
                </Link>
            </div>
        </section>
    );
};

export default React.memo(Project);
