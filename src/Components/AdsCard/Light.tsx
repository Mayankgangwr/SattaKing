import React from "react";
import cssStyle from "./AdsCard.module.scss";

const LightAdsCard = () => {
    return (
        <div className={`${cssStyle.LightAdsCard} card p-0 m-0 border-dark mt-1`}>
            <p className={`${cssStyle.headerfooter} card-text text-light m-0 p-0`}>SATTA KING ONLINE RESULT</p>
            <div className={cssStyle.contentarea}>
                <h1 className={cssStyle.adsbody}>SATTA KING</h1>
                <p className={`${cssStyle.adscontent} card-title text-primary`}>GALI DISAWAR GHAZIABAD जी हां भाइयों आज की दोनों गेम सिंगल ब्लास्ट कराई है!! गेम पास की फुल गाररंटी धोके वालों को नहीं मिलेगा मौका ईमानदार मारेंगे चौका।फ़ीस गेम पास के बाद देनी होगी</p>
               <p className={`${cssStyle.director} card-title text-danger`}>DELHI HEAD BRANCH</p>
                <p className={`${cssStyle.adsowner} card-title`}>अमनदीप सिंह</p>
                <div className={`${cssStyle.adsbtn} d-flex justify-content-between align-items-center mx-5`}>
                    <a href="tel:9045490623" className={`${cssStyle.call} btn btn-success px-3`}><i className="fas fa-solid fa-phone me-2"></i>Call Now</a>
                    <a href="https://wa.me/qr/66O7T27BQK6OK1" className={`${cssStyle.whatsapp} btn btn-danger px-3`}><i className="fas fa-brands fa-whatsapp me-2"></i>WhatsApp</a>
                </div>
            </div>
            <p className={`${cssStyle.headerfooter} card-text text-light`}>ONLINE ON WHATS APP</p>

        </div>
    );
}
export default LightAdsCard;