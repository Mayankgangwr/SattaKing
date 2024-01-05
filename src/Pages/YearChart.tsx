import React, { useEffect, useState } from "react";
import cssStyle from './YearChart.module.scss';

import { useParams } from "react-router-dom";
import axios from "axios";
import { Warning } from "../Components/Buttons";
import DarkAdsCard from "../Components/AdsCard/Dark";
import LightAdsCard from "../Components/AdsCard/Light";
import LiveResult from "../Components/Live/Result";
import { IResultChartState } from "./Home";
import ResultChart from "../Components/Charts/ResultChart/ResultChart";
const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const Arr: any[] = ["DELHI-DARBAR", "U.P", "NEW FARIDABAD", "DELHI DAY", "GHAZIABAD DIN", "TAJ", "FARIDABAD", "GHAZIABAD", "GALI", "DISAWAR"];
const iterations = Arr.length / 5;
const YearChart = () => {
    const { year } = useParams();
    const [resultChartData, setResultChartData] = useState<any[] | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/SattaApi/yearsrs.php', {
                    params: {
                        year: year, // Example year, modify as needed
                    },
                });
                setResultChartData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [year]);

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
            <LiveResult />
            {resultChartData && resultChartData.map((resultChartData: IResultChartState[], index) => (
                <>
                    {Array.from({ length: iterations }).map((_, Arrindex) => (
                        <ResultChart key={index} Arr={Arr.slice(Arrindex * 5, Arrindex * 5 + 5)} resultChartData={resultChartData} month={months[index]} />
                    ))}
                </>

            ))}
        </>
    );
}
export default YearChart;