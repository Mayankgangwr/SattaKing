import { Link } from 'react-router-dom';
import LiveChartData, { ILiveChartData } from '../LiveCharts/LiveChartData';
import cssStyle from './ResultChart.module.scss';
import ResultData from './Data.json';
interface IResultChartProps {
    Arr: any[];
}
const ResultChart: React.FC<IResultChartProps> = ({ Arr }) => {
    return (
        <div className={cssStyle.ResultChart}>
            <h1 className={`${cssStyle.Heading} bg-info text-light`}>ONLINE SATTA  RESULT CHART</h1>
            <table className={`${cssStyle.Table} table table-striped`}>
                <thead>
                    <tr>
                        <th className={`bg-primary`} scope="col">Date</th>
                        {Arr.map((name: any) =>
                            <th className={`bg-primary`} scope="col">{name}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {ResultData.map((data: any, index: number) => (
                        <tr key={index}>
                            <td scope='col' className={cssStyle.Game}>{data.date}</td>
                            {Arr.map((name: any) =>
                                <td className={`text-dark`}>{data.games[name] !== undefined ? data.games[name] : 'N/A'}</td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default ResultChart;