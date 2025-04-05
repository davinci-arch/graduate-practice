export default function BlogCard({ imgSrc, imgAlt, date, title, description }) {
    return (
        <div className="block">
            <div>
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <div className="date">{date}</div>
            <div className="title">{title}</div>
            <div className="describe">{description}</div>
            <div className="link">Read more <span className="arrow">→</span></div>
        </div>
    )
}