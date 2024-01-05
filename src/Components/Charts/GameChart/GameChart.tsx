import React, { useEffect, useState } from "react";
import { Warning } from "../../Buttons";
import DarkAdsCard from "../../AdsCard/Dark";
import LightAdsCard from "../../AdsCard/Light";
import cssStyle from './GameChart.module.scss';
import LiveResult from "../../Live/Result";
import Charts from "./Charts";
import axios from "axios";
import { useParams } from "react-router-dom";
const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const iterations = 2;
const GameChart = () => {
    const { gamename } = useParams();
    const [results, setResults] = useState<any>(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Make a GET request to your PHP API
            const response = await axios.get('http://localhost/SattaApi/gameschart.php', {
              params: {
                year: 2023, // Example year, modify as needed
                game: gamename, // Example game name, modify as needed
              },
            });
    
            setResults(response.data);
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
            <LiveResult />
            {/* {Array.from({ length: iterations }).map((_, index) => (
                <Charts key={index} months={months.slice(index * 6, index * 6 + 6)} results={results.slice(index * 6, index * 6 + 6)}  />
            ))} */}
            {results && <Charts key={0} months={months.slice(0, 6)} results={results.slice(0, 6)}  />}
            {results && <Charts key={1} months={months.slice(6)} results={results.slice(6)}  />}
        </>
    );
}
export default GameChart;