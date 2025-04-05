export default function PricingCard({ cardPrice, cardName, cardTitle, cardDescription, cardDesignName, buttonText, cardFeatures }) {
    return (
        <div className={cardDesignName == "first" ? "describe-plan-per-block block" : "describe-plan-multi-block block"}>
            {cardDesignName == "second" ?
                <div className="circle-block"></div>
                : null}

            <div className="price-block">
                <div className="price">{cardPrice}</div>
                <div className={cardDesignName == "first" ? "describe-plan-per name" : "describe-plan-multi name"}>{cardName}</div>
            </div>
            <div className="describe">
                <div className="title">{cardTitle}</div>
                <div className="describe-plan">{cardDescription}</div>
            </div>
            <div className="features">
                {cardFeatures.map((value, index) => {
                    if ((cardPrice === "$299" || cardPrice === "$399") && index === 5) {
                        console.log(true)
                        return
                    }
                    return (
                        <div className="item" key={index}>
                            <div><img src="/assets/Pointer.svg" alt="pointer" /></div>
                            <div>{value}</div>
                        </div>
                    )
                })}
            </div>
            <div className={cardDesignName == "first" ? "describe-plan-per-btn getstarted-btn" : "describe-plan-multi-btn getstarted-btn"}>{buttonText}</div>
        </div>
    )
}