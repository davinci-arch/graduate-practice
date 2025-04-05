import "./styles/all-features.css"
import HeaderNavigation from "./header-navigation"
import FooterNavigation from "./Footer"
import FaqItem from "./faq-item"
import BenefitCard from "./benefit-card"
export default function AllFeatures() {
    return (
        <div class="container">
            <header class="wrapper features-wrapper">
                <div class="wrapper-size">
                    <HeaderNavigation />
                    <div class="home-hero-info">
                        <div class="info">
                            <div class="title">
                                All the features you need
                            </div>
                            <div class="describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt.
                            </div>
                            <div class="pricing-btn link">
                                View Pricing
                            </div>
                        </div>
                        <div><img id="home-hero-img" src="/assets/feature.svg" alt="feature-img" /></div>
                    </div>
                </div>
            </header>
            <div class="wrapper features-wrapper">
                <div class="logo-section wrapper-size">
                    <div class="info">
                        <div id="amount-of-users">100.000+</div>
                        <div class="title">Figma users</div>
                    </div>
                    <div class="logos">
                        <div class="logo">
                            <img src="/assets/Logo 1.svg" alt="logo" />
                        </div>
                        <div class="logo">
                            <img src="/assets/Logo 2.svg" alt="logo" />
                        </div>
                        <div class="logo">
                            <img src="/assets/Logo 3.svg" alt="logo" />
                        </div>
                        <div class="logo">
                            <img src="/assets/Logo 4.svg" alt="logo" />
                        </div>
                        <div class="logo">
                            <img src="/assets/Logo 5.svg" alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper features-wrapper">
                <div class="benefits wrapper-size">
                    <div class="title">The benefits of working with our team</div>
                    <div class="blocks">
                        <BenefitCard imgSrc={"/assets/Icon.svg"} imgAlt={"icon"} title={"Customize with ease"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."}/>
                        <BenefitCard imgSrc={"/assets/Icon-2.svg"} imgAlt={"icon"} title={"Perfectly Responsive"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."}/>
                        <BenefitCard imgSrc={"/assets/Icon-3.svg"} imgAlt={"icon"} title={"Friendly Support"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."}/>
                    </div>
                </div>
            </div>
            <div class="wrapper features-wrapper">
                <div class="best-in-class wrapper-size">
                    <div class="info">
                        <div class="title">Use Client-first</div>
                        <div class="title-describe">Top agencies and freelancers around the world use
                            Client-first </div>
                        <div class="describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
                    </div>
                    <div><img class="benefit-img" src="/assets/benefit1.png" alt="benefit img" /></div>
                </div>
            </div>
            <div class="wrapper features-wrapper">
                <div class="free-revisions wrapper-size">
                    <div><img class="benefit-img" src="/assets/benefit2.png" alt="benefit img" /></div>
                    <div class="info">
                        <div class="title">Free Revision Rounds</div>
                        <div class="title-describe">Get free Revisions and one week of free maintenance</div>
                        <div class="describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam.</div>
                    </div>
                </div>
            </div>
            <div class="wrapper features-wrapper">
                <div class="support wrapper-size">
                    <div class="info">
                        <div class="title">24/7 Support</div>
                        <div class="title-describe">Working with us, you will be getting 24/7 priority support</div>
                        <div class="describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam.</div>
                    </div>
                    <div><img class="benefit-img" src="/assets/benefit3.png" alt="benefit img" /></div>
                </div>
            </div>
            <div class="wrapper features-wrapper">
                <div class="quick-deliver wrapper-size">
                    <div><img class="benefit-img" src="/assets/benefit4.png" alt="benefit img" /></div>
                    <div class="info">
                        <div class="title">Quick Delivery</div>
                        <div class="title-describe">Guranteed 1 week delivery for standard five pager website</div>
                        <div class="describe">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam.</div>
                    </div>
                </div>
            </div>
            <div class="wrapper features-wrapper">
                <div class="faq wrapper-size">
                    <div class="title">
                        <div>
                            <h1>Frequently asked questions</h1>
                        </div>
                        <div>
                            <a href="#">Contact us for more info</a>
                        </div>
                    </div>
                    <div class="faq-items">
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
            <FooterNavigation wrapperName={"features-wrapper"} />
        </div>
    )
}