import Swiper from 'swiper';

export const cardSlider = () => {
    const slider = new Swiper('.card__slider', {
        slidesPerView: 2,
        breakpoints: {
            1000: {
                slidesPerView: 4,
            }
        }
    })
}