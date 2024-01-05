import { useEffect, useState } from 'react';
import cssStyle from './HistoryChart.module.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HistoryChart = () => {
    const [years, setYears] = useState<string[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/SattaApi/basic.php');
                setYears(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className={`${cssStyle.HistoryChart}`}>
            <h1 className={`${cssStyle.Heading} bg-info text-light`}>ONLINE SATTA LIVE RESULT</h1>
            <div className={`container-fluid bg-light py-2`}>
                <div className={`row border-bottom-1`}>
                    {years && years.map((year: string, index: number) => (
                        <div key={index} className={`${cssStyle.Column} col-6 border-bottom border-1`}>
                            <span className={`${cssStyle.GameName}`}>{`Satta king`}</span>
                            <Link className={`nav-link`} to={`/yearchart/${year}`}><span className={`${cssStyle.GameChart} text-danger`}>{`Satta king charts ${year}`}</span></Link>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};
export default HistoryChart;