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
import { useEffect, useState } from 'react';
import axios from 'axios';
export interface IGames {
    "DELHI-DARBAR": string;
    "U.P": string;
    "NEW FARIDABAD": string;
    "DELHI DAY": string;
    "GHAZIABAD DIN": string;
    "TAJ": string;
    "FARIDABAD": string;
    "GHAZIABAD": string;
    "GALI": string;
    "DISAWAR": string | null; // Assuming "DISAWAR" can be a string or null
}
export interface IResultChartState {
    date: string;
    games: IGames;
}
const Home = () => {
    const Arr: any[] = ["DELHI-DARBAR", "U.P", "NEW FARIDABAD", "DELHI DAY", "GHAZIABAD DIN", "TAJ", "FARIDABAD", "GHAZIABAD", "GALI", "DISAWAR"];
    const iterations = Arr.length / 5;
    const [resultChartData, setResultChartData] = useState<IResultChartState[] | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/SattaApi/chartrs.php');
                setResultChartData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
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
            {resultChartData && Array.from({ length: iterations }).map((_, index) => (
                <ResultChart key={index} Arr={Arr.slice(index * 5, index * 5 + 5)} resultChartData={resultChartData} />
            ))}
              <HistoryChart />
             <LightAdsCard />
            <Disclaimer />
            <Footer />
        </>
    );
};

export default Home;
