import { Link } from "react-router-dom"
import "./styles/header.css"
export default function HeaderNavigation() {
    return (
        <div className="navbar">
            <div className="logo">&#123;Finsweet</div>
            <div className="navigation">
                <Link to="/">Home</Link>
                <a href="#">About us</a>
                <Link to="/features">Features</Link>
                <Link to="/pricing">Pricing</Link>
                <a href="#">FAQ</a>
                <a href="#">Blog</a>
                <div className="contact-us">Contact us</div>
            </div>
        </div>
    )
}