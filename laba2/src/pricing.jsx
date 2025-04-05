import "./styles/pricing-plans.css"
import HeaderNavigation from "./header-navigation"
import FaqItem from "./faq-item"
import FooterNavigation from "./Footer"
import PricingCard from "./pricing-card"

import { useState } from "react"
export function Pricing() {

    const [features, setFeatures] = useState([
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
        "Assist and Help"]
    )

    return (
        <div className="container">
            <header className="wrapper pricing-wrapper">
                <div className="wrapper-size">
                    <HeaderNavigation />
                </div>
            </header>
            <div className="wrapper pricing-wrapper">
                <div className="pricing-header wrapper-size">
                    <div className="title">Our Pricing Plans</div>
                    <div className="describe">When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you
                        bring your
                        designs to
                        life — without coding them.</div>
                </div>
            </div>
            <div className="wrapper pricing-wrapper">
                <div className="plans wrapper-size">
                    <PricingCard cardPrice={"$299"} cardName={"Per Design"} cardTitle={"Landing Page"} cardDescription={"When you’re ready to go beyond prototyping in Figma,"} cardDesignName={"first"} buttonText={"Get started"} cardFeatures={features} />
                    <PricingCard cardPrice={"$399"} cardName={"Multi Design"} cardTitle={"Website Page"} cardDescription={"When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help."} cardDesignName={"second"} buttonText={"Get started"} cardFeatures={features} />
                    <PricingCard cardPrice={"$499"} cardName={"Per Design"} cardTitle={"Complex Project"} cardDescription={"When you’re ready to go beyond prototyping in Figma,"} cardDesignName={"first"} buttonText={"Contact us"} cardFeatures={features} />
                </div>
            </div>
            <div className="wrapper pricing-wrapper">
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
            <FooterNavigation wrapperName={"pricing-wrapper"} />
        </div>
    )
}