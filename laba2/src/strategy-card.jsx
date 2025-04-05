export default function StrategyCard({featureNumber, title, description }) {
    return (
        <div className="feature">
            <div className="styled-block">
                <div className="square-bl"></div>
                <div className="square-over"></div>
                <span className="pos">{featureNumber}</span>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}