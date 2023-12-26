import { Link } from 'react-router-dom';
import cssStyle from './LiveChart.module.scss';
import LiveChartData, { ILiveChartData } from './LiveChartData';
const LiveChart = () => {
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
                    {LiveChartData.map((data: ILiveChartData, index: number) => (
                        <tr key={index}>
                            <td className={cssStyle.Game}><span className={cssStyle.GameName}>{data.game}</span><span className={cssStyle.GameTime}>{data.time}</span></td>
                            <td className={`text-danger`}>{data.oldValue}</td>
                            <td className={`text-warning`}>{data.newValue}</td>
                            <td><Link className={`btn btn-danger fw-bold`} to={`/${data.chartLink}`}>Chart</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default LiveChart;