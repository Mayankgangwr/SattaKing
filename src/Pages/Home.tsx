import cssStyle from './Home.module.scss';
import DarkAdsCard from '../Components/AdsCard/Dark';
import { Info, Warning } from '../Components/Buttons';
import LightAdsCard from '../Components/AdsCard/Light';
import LiveResult from '../Components/Live/Result';
import Footer from '../Components/Footer';
import LiveChart from '../Components/Charts/LiveCharts/LiveChart';
import Disclaimer from '../Components/Disclaimer';
import HistoryChart from '../Components/Charts/HistoryCharts/HistoryChart';
import ResultChart from '../Components/Charts/ResultChart/ResultChart';

const Home = () => {
    const Arr: any[] = ["DELHI-DARBAR", "U.P", "NEW FARIDABAD", "DELHI DAY", "GHAZIABAD DIN", "TAJ", "FARIDABAD", "GHAZIABAD", "GALI", "DISAWAR"];
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
            <DarkAdsCard />
            <LightAdsCard />
            <LightAdsCard />
            <LightAdsCard />
            <ResultChart Arr={Arr.slice(0,5)} />
            <ResultChart Arr={Arr.slice(5,10)} />
            <HistoryChart />
            <LightAdsCard />
            <Disclaimer />
            <Footer />
        </>
    );
};

export default Home;
