import React, {useState} from 'react';
import MensajeIngles from './../language/en.json';
import MensajeEspañol from './../language/uz.json';
import {IntlProvider} from 'react-intl';

const langContext = React.createContext();


const LangProvider = ({children}) => {
    let localePorDefecto;
	let mensajesPorDefecto;
	const lang = localStorage.getItem('lang');

	if(lang){
		localePorDefecto = lang

		if(lang === 'uz-UZ'){
			mensajesPorDefecto = MensajeEspañol;
		} else if(lang === 'en-US'){
			mensajesPorDefecto = MensajeIngles;
		} else {
			localePorDefecto = 'en-US'
			mensajesPorDefecto = MensajeIngles;
		}
	}

    const [mensaje, setMensaje] = useState(mensajesPorDefecto);
    const [locale, setLocale] = useState(localePorDefecto);

    const selectLanguage = (language) =>{
        switch (language) {
            case 'uz-UZ':
                setMensaje(MensajeEspañol);
                setLocale('uz-UZ');
                localStorage.setItem('lang', 'uz-UZ');
                break;
            case 'en-US':
                setMensaje(MensajeIngles);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
            default:
                setMensaje(MensajeIngles);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
        }
    }
    return (
        <langContext.Provider value={{selectLanguage: selectLanguage}}>
            <IntlProvider locale={locale} messages={mensaje}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
};

export {LangProvider, langContext};