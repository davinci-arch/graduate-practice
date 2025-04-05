export default function FeatureCard({iconSrc, imgAlt, title, description }) {
    return (
        <div className="block">
            <div>
                <img className="feature-ico" src={iconSrc} alt={imgAlt} />
            </div>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                {description}
            </div>
        </div>
    )
}