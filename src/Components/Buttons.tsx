import React from "react";
import cssStyle from "./Buttons.module.scss";
export const Warning = () => {
    return (
        <div className={`${cssStyle.Btn}`}>
            <button className={`btn btn-warning`}>सट्टा-लीक जोड़ी CLICK</button>
        </div>

    );
}

export const Primary = () => {
    return (
        <div className={`${cssStyle.Btn}`}>
            <button className={`btn btn-primary`}>सट्टा-लीक जोड़ी CLICK</button>
        </div>

    );
}

export const Info = () => {
    return (
        <div className={`${cssStyle.Btn}`}>
            <button className={`btn btn-info`}>🤩 WWW.SATTA-PLAYER.IN🤩 फ्री गेम पोस्ट वेबसाइट</button>
        </div>

    );
}

// export const Danger = () => {
//     return (
//         <div className={`${cssStyle.Btn}`}>
//             <button className={`btn btn-danger`}>ONLINE सट्टा खेलने के लिए यहाँ CLICK करे📱</button>
//         </div>

//     );
// }