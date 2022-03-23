import Swiper, {Scrollbar} from 'swiper';

export const lkTarifSlider = () => {
    const slider = new Swiper('.lk__tarif_slider', {
        modules: [Scrollbar],
        scrollbar: {
            el: '.lk__tarif_scrollbar',
            draggable: true
        },
        slidesPerView: 1,
        
        spaceBetween: 25,
        breakpoints: {
            1900: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 3,
            },
            700: {
                slidesPerView: 2,
            }
        }
    })
}