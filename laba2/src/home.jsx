import "./styles/home.css"
import HeaderNavigation from "./header-navigation"
import FooterNavigation from "./Footer"
import StrategyCard from "./strategy-card"
import FeatureCard from "./feature-card"
import BlogCard from "./blog-card"
import FaqItem from "./faq-item"
export default function Home(){
    return(
        <div className="container">
        <header className="wrapper home-wrapper">
            <div className="wrapper-size">
                <HeaderNavigation />
                <div className="home-hero-info">
                    <div className="info">
                        <div id="build">Building stellar websites for early startups</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </div>
                        <div className="view-work">
                            <div className="view-work-btn">View our work</div>
                            <div className="link">
                                View pricing<span className="arrow">→</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img id="home-hero-img" src="/assets/home-header-ill.svg" alt="home-header-ill"/>
                    </div>
                </div>
            </div>
        </header>
        <div className="wrapper home-wrapper">
            <div className="how-works wrapper-size">
                <div className="how-works-ls">
                    <div className="title">How we work</div>
                    <div className="sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt.
                    </div>
                    <div className="contact">Get in touch with us <span className="arrow">→</span></div>
                </div>
                <div className="how-works-rs">
                    <StrategyCard featureNumber={"01"} title={"Strategy"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}/>
                    <StrategyCard featureNumber={"02"} title={"Wireframing"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}/>
                    <StrategyCard featureNumber={"03"} title={"Design"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}/>
                    <StrategyCard featureNumber={"04"} title={"Development"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}/>
                </div>
            </div>
        </div>
        <div className="wrapper home-wrapper">
            <div className="our-projects wrapper-size">
                <div className="title">
                    <div>
                        <h1>View our projects</h1>
                    </div>
                    <div className="link">View More <span className="arrow">→</span></div>
                </div>
                <div className="cards">
                    <div className="card-b1">
                        <div className="card-b1-h">
                            <div>
                                <h2>Workhub office Webflow Webflow Design</h2>
                            </div>
                            <div>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </div>
                            <div id="link-project">View project<span className="arrow">→</span></div>
                        </div>
                        <div></div>
                    </div>
                    <div className="card-b2">
                        <div className="card-s1">
                            <div className="block">
                                <div>
                                    <h2>Unisaas Website
                                        Design</h2>
                                </div>
                                <div id="link-portfolio">View portfolio <span className="arrow">→</span></div>
                            </div>
                        </div>
                        <div className="card-s2"></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="wrapper home-wrapper">
            <div className="features wrapper-size">
                <div>Features</div>
                <div>
                    <h1>Design that solves problems, one product at a time</h1>
                </div>
                <div className="feature-blocks">
                    <FeatureCard iconSrc={"/assets/people.svg"} imgAlt={"people"} title={"Uses Client First"} description={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eugravida mi. Pellentesque et velit aliquam sed mi."} />
                    <FeatureCard iconSrc={"/assets/revision.svg"} imgAlt={"revision"} title={"Two Three Revision Round"} description={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."} />
                    <FeatureCard iconSrc={"/assets/template.svg"} imgAlt={"template"} title={"Template Customization"} description={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."} />
                    <FeatureCard iconSrc={"/assets/support.svg"} imgAlt={"support"} title={"24/7 Support"} description={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."} />
                    <FeatureCard iconSrc={"/assets/clock.svg"} imgAlt={"clock"} title={"Quick Delivery"} description={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."} />
                    <FeatureCard iconSrc={"/assets/approach.svg"} imgAlt={"approach"} title={"Hands-on approach"} description={"Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi."} />
                </div>
            </div>
        </div>
        <div className="wrapper home-wrapper">
            <div className="testimonials wrapper-size">
                <div className="title">
                    <div>
                        <h1>What our clients say about us</h1>
                    </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</div>
                </div>
                <div className="slider">
                    <div>
                        <p>"The best agency we’ve worked with so far. They understand our product and are able to add
                            new
                            features with a great focus."</p>
                    </div>
                    <div className="slider-info">
                        <div className="profile">
                            <div className="profile-img">
                                <img src="/assets/profile-img.png" alt="profile"/>
                            </div>
                            <div className="profile-data">
                                <div><span>Jenny Wilson</span></div>
                                <div><span>Vice President</span></div>
                            </div>
                        </div>
                        <div className="slider slider-arrows">
                            <div className="left-arrow"><img src="/assets/left-arrow.svg" alt=""/></div>
                            <div className="right-arrow"><img src="/assets/right-arrow.svg" alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrapper home-wrapper">
            <div className="faq wrapper-size">
                <div className="title">
                    <div>
                        <h1>Frequently asked questions</h1>
                    </div>
                    <div>
                        <a href="#">Contact us for more info</a>
                    </div>
                </div>
                <div className="faq-items">
                    <FaqItem faqNumber={"01"} faqQuestion={"How much time does it take?"} faqAnswer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                    <div className="separator"></div>
                    <FaqItem faqNumber={"02"} faqQuestion={"What is your class naming convention?"} faqAnswer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                    <div className="separator"></div>
                    <FaqItem faqNumber={"03"} faqQuestion={"How do you communicate?"} faqAnswer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                    <div className="separator"></div>
                    <FaqItem faqNumber={"04"} faqQuestion={"I have a bigger project. Can you handle it?"} faqAnswer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                    <div className="separator"></div>
                    <FaqItem faqNumber={"05"} faqQuestion={"What is your class naming convention?"} faqAnswer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                </div>
            </div>
        </div>
        <div className="wrapper home-wrapper">
            <div className="contact-form wrapper-size">
                <div className="contact-form-l">
                    <div className="overlay"></div>
                    <div className="contact-form-content">
                        <h1>Building stellar websites for early startups</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua ut enim.</p>
                    </div>
                </div>
                <div className="contact-form-r">
                    <div>
                        <h2>Send inquiry</h2>
                    </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore.</div>
                    <form action="">
                        <div className="fields">
                            <input type="text" placeholder="Your Name"/>
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Paste your Figma design URL"/>
                        </div>
                        <button>Send an inquiry</button>
                    </form>
                    <div className="link"><a href="#">Get in touch with us <span className="arrow">→</span></a></div>
                </div>
            </div>
        </div>
        <div className="wrapper home-wrapper">
            <div className="our-blog wrapper-size">
                <div>
                    <h1>Our blog</h1>
                </div>
                <div className="blogs">
                    <BlogCard imgSrc={"/assets/bisnes-img1.png"} imgAlt={"bisnes-img"} date={"19 Jan 2022"} title={"How one Webflow user grew his single person consultancy from $0-100K in 14 months"} description={"See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"}/>
                    <BlogCard imgSrc={"/assets/bisnes-img2.png"} imgAlt={"bisnes-img"} date={"19 Jan 2022"} title={"How one Webflow user grew his single person consultancy from $0-100K in 14 months"} description={"See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"}/>
                    <BlogCard imgSrc={"/assets/bisnes-img3.png"} imgAlt={"bisnes-img"} date={"19 Jan 2022"} title={"How one Webflow user grew his single person consultancy from $0-100K in 14 months"} description={"See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"}/>
                </div>
            </div>
        </div>
        <FooterNavigation wrapperName={"home-wrapper"} />
    </div>
    )
}