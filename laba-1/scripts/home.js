document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;
        const answer = item.nextElementSibling;
        const plus = item.querySelector('.plus');
        
        if (faqItem.classList.contains('open')) {
            faqItem.classList.remove('open');
            plus.textContent = '+';
        } else {
            faqItem.classList.add('open');
            plus.textContent = '−';
        }
    });
});