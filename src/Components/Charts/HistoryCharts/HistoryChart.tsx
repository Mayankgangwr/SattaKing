import { Link } from 'react-router-dom';
import cssStyle from './HistoryChart.module.scss';

const HistoryChart = () => {
    return (
        <div className={`${cssStyle.HistoryChart}`}>
            <h1 className={`${cssStyle.Heading} bg-info text-light`}>ONLINE SATTA LIVE RESULT</h1>
            <div className={`container-fluid bg-light py-2`}>
                <div className={`row border-bottom-1`}>
                    <div className={`${cssStyle.Column} col-6 border-bottom border-1`}>
                        <span className={`${cssStyle.GameName}`}>{`Satta king`}</span>
                        <span className={`${cssStyle.GameChart} text-danger`}>{`Satta king charts 2016`}</span>
                    </div>
                    <div className={`${cssStyle.Column} col-6 border-bottom border-start border-1`}>
                        <span className={`${cssStyle.GameName}`}>{`Satta king`}</span>
                        <span className={`${cssStyle.GameChart} text-danger`}>{`Satta king charts 2016`}</span>
                    </div>
                </div>
                <div className={`row border-bottom-1`}>
                    <div className={`${cssStyle.Column} col-6 border-bottom border-1`}>
                        <span className={`${cssStyle.GameName}`}>{`Satta king`}</span>
                        <span className={`${cssStyle.GameChart} text-danger`}>{`Satta king charts 2016`}</span>
                    </div>
                    <div className={`${cssStyle.Column} col-6 border-bottom border-start border-1`}>
                        <span className={`${cssStyle.GameName}`}>{`Satta king`}</span>
                        <span className={`${cssStyle.GameChart} text-danger`}>{`Satta king charts 2016`}</span>
                    </div>
                </div>
                <div className={`row border-bottom-1`}>
                    <div className={`${cssStyle.Column} col-6 border-bottom border-1`}>
                        <span className={`${cssStyle.GameName}`}>{`Satta king`}</span>
                        <span className={`${cssStyle.GameChart} text-danger`}>{`Satta king charts 2016`}</span>
                    </div>
                    <div className={`${cssStyle.Column} col-6 border-bottom border-start border-1`}>
                        <span className={`${cssStyle.GameName}`}>{`Satta king`}</span>
                        <span className={`${cssStyle.GameChart} text-danger`}>{`Satta king charts 2016`}</span>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`${cssStyle.Column} col-6 border-1`}>
                        <span className={`${cssStyle.GameName}`}>{`Satta king`}</span>
                        <span className={`${cssStyle.GameChart} text-danger`}>{`Satta king charts 2016`}</span>
                    </div>
                    <div className={`${cssStyle.Column} col-6 border-start border-1`}>
                        <span className={`${cssStyle.GameName}`}>{`Satta king`}</span>
                        <span className={`${cssStyle.GameChart} text-danger`}>{`Satta king charts 2016`}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default HistoryChart;