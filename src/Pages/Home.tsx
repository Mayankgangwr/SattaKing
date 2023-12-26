import cssStyle from './Home.module.scss';
import DarkAdsCard from '../Components/AdsCard/Dark';
import { Info, Warning } from '../Components/Buttons';
import LightAdsCard from '../Components/AdsCard/Light';
import LiveResult from '../Components/Live/Result';
import Footer from '../Components/Footer';
import LiveChart from '../Components/Charts/LiveCharts/LiveChart';
import Disclaimer from '../Components/Disclaimer';
import HistoryChart from '../Components/Charts/HistoryCharts/HistoryChart';

const Home = () => {
    return (
        <>
            <div className={cssStyle.container}>
                <div className={cssStyle.scrollingText}>
                    DISAWAR SATTA KING, SATTA KING UP, SATTA KING, SATTA KING DISAWAR, SATTA KING 786, SATTA KING GALI, SATTA KING FAST, SATTA KING RESULT, BLACK SATTA KING, SATTA KING CHART, DELHI SATTA KING
                </div>
            </div>
            <Warning />
            <DarkAdsCard />
            <LightAdsCard />
            <DarkAdsCard />
            <LiveResult />
            <LightAdsCard />
            <Info />
            <LightAdsCard />
            <LiveChart />
            <HistoryChart/>
            <DarkAdsCard />
            <LightAdsCard />
            <LightAdsCard />
            <LightAdsCard />
            <LightAdsCard />
            <Disclaimer/>
            <Footer />
        </>
    );
};

export default Home;
