import cssStyle from './Home.module.scss';
import DarkAdsCard from '../Components/AdsCard/Dark';
import { Info, Warning } from '../Components/Buttons';
import LightAdsCard from '../Components/AdsCard/Light';
import LiveResult from '../Components/Live/Result';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <>
            <div className={cssStyle.container}>
                <div className={cssStyle.scrollingText}>
                DISAWAR SATTA KING, SATTA KING UP, SATTA KING, SATTA KING DISAWAR, SATTA KING 786, SATTA KING GALI, SATTA KING FAST, SATTA KING RESULT, BLACK SATTA KING, SATTA KING CHART, DELHI SATTA KING
                </div>
            </div>
            <Warning/>
            <DarkAdsCard />
            <LightAdsCard/>
            <DarkAdsCard />
            <LiveResult/>
            <LightAdsCard/>
            <Info/>
            <LightAdsCard/>
            <Footer/>
        </>
    );
};

export default Home;
