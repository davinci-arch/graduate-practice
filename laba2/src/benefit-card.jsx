export default function BenefitCard({imgSrc, imgAlt, title, description}) {
    return (
        <div className="block">
            <div><img src={imgSrc} alt={imgAlt} /></div>
            <div className="title-block">{title}</div>
            <div className="describe">{description}</div>
        </div>
    )
}