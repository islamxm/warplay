import Swiper, {Scrollbar} from 'swiper';

export const lkTarifSlider = () => {
    const slider = new Swiper('.lk__tarif_slider', {
        modules: [Scrollbar],
        scrollbar: {
            el: '.lk__tarif_scrollbar',
            draggable: true
        },
        slidesPerView: 3,
        spaceBetween: 25,
    })
}