import React from "react";
import cssStyle from "./AdsCard.module.scss";

const DarkAdsCard = () => {
    return (
        <div className={`${cssStyle.DarkAdsCard} card px-4 py-3 bg-dark mt-1`}>
            <p className={`${cssStyle.adscontent} card-title text-warning`}> दिशावर की लीक जोड़ी 101% कन्फर्म
                फ़ीस गेम पास के बाद</p>
            <p className={`${cssStyle.adsowner} card-title text-light`}>अमनदीप सिंह</p>
            <div className={`${cssStyle.adsbtn} d-flex justify-content-between align-items-center mx-3`}>
                <a href="tel:9045490623" className={`${cssStyle.call} btn btn-success px-3`}><i className="fas fa-solid fa-phone me-2"></i>Call Now</a>
                <a href="https://wa.me/qr/66O7T27BQK6OK1" className={`${cssStyle.whatsapp} btn btn-danger px-3`}><i className="fas fa-brands fa-whatsapp me-2"></i>WhatsApp</a>
            </div>
        </div>
    );
}
export default DarkAdsCard;