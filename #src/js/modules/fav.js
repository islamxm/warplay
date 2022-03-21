export const favBtn = () => {
    const favEl = document.querySelector('.fav');

    if(favEl) {
        favEl.addEventListener('click', () => {
            console.log('click');
            favEl.classList.toggle('active');
        })
    }
    
}