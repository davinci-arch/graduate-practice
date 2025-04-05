import { useState } from 'react';

export default function FaqItem({ faqNumber, faqQuestion, faqAnswer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={isOpen ? 'faq-item open' : 'faq-item'}>
            <div className="faq-question" onClick={toggleAnswer}>
                <div className="faq-question-text">
                    <div className="pos">{faqNumber}</div>
                    {faqQuestion}
                </div>
                <span className="plus">{isOpen ? '-' : '+'}</span>
            </div>
            <div className="faq-answer">{faqAnswer}</div>
        </div>
    )
}