export const headerSearch = () => {
    const el = document.querySelector('.header__search');

    if(el) {
        el.addEventListener('click', (e) => {
            if(e.target && e.target.dataset.tog == 'click') {
                el.classList.toggle('active');
            }
        })
    }

    
}