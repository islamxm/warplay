import Swiper, {EffectFade, Pagination} from 'swiper';


export const heroSlider = () => {
    
    const slider = new Swiper('.hero__slider', {
        slidesPerView: 1,
        modules: [EffectFade, Pagination],
        effect: 'fade',
        pagination: {
            el: '.hero__pag',
            type: 'bullets',
            bulletClass: 'hero__pag_item',
            bulletActiveClass: 'hero__pag_item_active',
            clickable: true
        }
    })
}