import cssStyle from './ResultChart.module.scss';
interface IGames {
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
interface IResultChart {
    date: string;
    games: IGames;
}
interface IResultChartProps {
    Arr: any[];
    resultChartData: IResultChart[];
    month?: string;
}

const ResultChart: React.FC<IResultChartProps> = ({ Arr, resultChartData, month }) => {
    return (
        <div className={cssStyle.ResultChart}>
            <h1 className={`${cssStyle.Heading} bg-info text-light`}>{month ? month : "ONLINE SATTA  RESULT CHART"}</h1>
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
                    {resultChartData && resultChartData.map((data: any, index: number) => (
                        <tr key={index}>
                            <td className={cssStyle.Game}>{data.date}</td>
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