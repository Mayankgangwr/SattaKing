import { Link } from 'react-router-dom';
import cssStyle from './LiveChart.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment';
interface ILiveChartData {
    name: string,
    time: string,
    newresult: string,
    oldresult: string
}
const LiveChart = () => {

    const [liveChartData, setLiveChartData] = useState<ILiveChartData[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/SattaApi/dailyrs.php');
                setLiveChartData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className={cssStyle.LiveChart}>
            <h1 className={`${cssStyle.Heading} bg-info text-light`}>ONLINE SATTA LIVE RESULT</h1>
            <table className={`${cssStyle.Table} table table-striped`}>
                <colgroup>
                    <col style={{ width: '50%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '20%' }} />
                </colgroup>
                <thead>
                    <tr>
                        <th className={`bg-primary`} scope="col">Game</th>
                        <th className={`bg-primary`} scope="col">Old</th>
                        <th className={`bg-primary`} scope="col">New</th>
                        <th className={`bg-primary`} scope="col">Chart</th>
                    </tr>
                </thead>
                <tbody>
                    {liveChartData && liveChartData.sort((a, b) => {
                        const timeA = new Date(`2000-01-01 ${a.time}`);
                        const timeB = new Date(`2000-01-01 ${b.time}`);
                        return timeA.getTime() - timeB.getTime();
                    }).map((data: ILiveChartData, index: number) => (
                        <tr key={index}>
                            <td className={cssStyle.Game}><span className={cssStyle.GameName}>{data.name}</span><span className={cssStyle.GameTime}>{moment(data.time, "HH:mm:ss").format("hh:mm A")}</span></td>
                            <td className={`text-danger`}>{data.oldresult}</td>
                            <td className={`text-warning`}>{data.newresult}</td>
                            <td><Link className={`btn btn-danger fw-bold`} to={`/gamechart/${index+1}`}>Chart</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default LiveChart;