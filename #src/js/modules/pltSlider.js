import Swiper, {Pagination, Navigation} from 'swiper';

export const pltSlider = () => {

    const slider = new Swiper('.plt__slider', {
        modules: [Pagination, Navigation],
        pagination: {
            el: '.plt__pag',
            type: 'bullets',
            bulletClass: 'plt__pag_item',
            bulletActiveClass: 'plt__pag_item_active',
            clickable: true
        },
        navigation: {
            nextEl: '.plt__next',
        },
        breakpoints: {
            1200: {
                spaceBetween: 10,
                slidesPerView: 6,
            }
        }
    })
}