import cssStyle from './GameChart.module.scss';
interface IChartsProps {
    months: any[];
    results: string[];
}
const Charts: React.FC<IChartsProps> = ({ months, results }) => {
    const columns = (i: number) => {
        const columnElements = [];
        for (let j = 0; j < 6; j++) {
            columnElements.push(
                <td className={`text-dark`}  key={j}>
                    {results[j][i] !== "" ? results[j][i] : '00'}
                </td>
            );
        }
        return columnElements;
    }

    const rows = () => {
        const rowElements = [];
        for (let i = 0; i < 31; i++) {
            rowElements.push(
                <tr key={i}>
                    <td className={`text-dark`} key={`date-${i}`}>
                        {i + 1}
                    </td>
                    {columns(i)}
                </tr>
            );
        }
        return rowElements;
    }


    return (
        <>
            <table className={`${cssStyle.Table} table table-striped`}>
                <thead>
                    <tr>
                        <th className={`bg-primary`} scope="col">Date</th>
                        {months.map((name: any) =>
                            <th className={`bg-primary`} scope="col">{name}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {rows()}
                </tbody>
            </table>

        </>
    );
}
export default Charts;