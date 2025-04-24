import React from 'react';
import '../../pages/Contact/ContactPage.css';

/* Type Animation (React 18 compatible) */
import { TypeAnimation } from 'react-type-animation';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Contact = () => (
    <section className="contactos" id="contactos">

        <h2 className="heading">
            <FormattedMessage
                id='contact'
                defaultMessage='Contact'
            />
        </h2>

        <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
            <FormattedMessage
                id='contact-info'
                defaultMessage='Contact me by: '
            />
            <TypeAnimation
                className="site-contacto"
                sequence={[
                    'Gmail', 1500,
                    'Instagram', 1500,
                    'Telegram', 1500,
                    'GitHub', 1500,
                ]}
                wrapper="b"
                speed={50}
                repeat={Infinity}
            />
        </h3>

        <div className="icons">
            <a href="mailto:ikramjanovisroil68@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span><span></span><span></span><span></span>
                    <span className="fab fas fa-envelope"></span>
                </div>
                <div className="text">Gmail</div>
            </a>

            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span><span></span><span></span><span></span>
                    <span className="fab fa-instagram"></span>
                </div>
                <div className="text">Instagram</div>
            </a>

            <a href="https://t.me/zr_coders" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span><span></span><span></span><span></span>
                    <span className="fab fa-telegram"></span>
                </div>
                <div className="text">Telegram</div>
            </a>

            <a href="https://github.com/isroiljondeveloperad" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                <div className="layer">
                    <span></span><span></span><span></span><span></span>
                    <span className="fab fa-github-square"></span>
                </div>
                <div className="text">GitHub</div>
            </a>
        </div>
    </section>
);

export default React.memo(Contact);
