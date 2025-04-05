import { Link } from "react-router-dom"
import "./styles/footer.css"
export default function FooterNavigation({wrapperName}) {
    return (
        <>
            <footer className={"wrapper " + wrapperName}>
                <div className="wrapper-size">
                    <div className="footer">
                        <div className="block-l">
                            <div className="logo"><h1>&#123;Finsweet</h1></div>
                            <div className="describe">We are always open to discuss your project and improve your online presence.</div>
                            <div className="contacts">
                                <div className="email">
                                    <div>Email me at</div>
                                    <div>contact@website.com</div>
                                </div>
                                <div className="telephone">
                                    <div>Call us</div>
                                    <div>0927 6277 28525</div>
                                </div>
                            </div>
                        </div>
                        <div className="block-r">
                            <div className="title">Lets Talk!</div>
                            <div className="describe">We are always open to discuss your project, improve your online presence and help with your
                                UX/UI design challenges.</div>
                            <div className="socials">
                                <a href="#">
                                    <img src="/assets/facebook.svg" alt="facebook" />

                                </a>
                                <a href="#">
                                    <img src="/assets/twitter.svg" alt="twitter" />
                                </a>
                                <a href="#">
                                    <img src="/assets/instagram.svg" alt="instagram" />
                                </a>
                                <a href="#">
                                    <img src="/assets/linkedin.svg" alt="linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className={"footer-navigation wrapper " + wrapperName}>
                <div className="wrapper-size">
                    <div className="copyright">
                        <div>Copyright 2022, Finsweet.com</div>
                        <div className="navigation">
                            <Link to="/">Home</Link>
                            <a href="#">About us</a>
                            <Link to="/features">Features</Link>
                            <Link to="/pricing">Pricing</Link>
                            <a href="#">FAQ</a>
                            <a href="#">Blog</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}