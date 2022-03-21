export const prel = () => {
    const el = document.querySelector('.prel');

    if(el) {
        window.addEventListener('load', () => {
            el.classList.add('hide');
        })
    }
}