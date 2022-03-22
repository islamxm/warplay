import {Carousel, Fancybox, Thumbs} from '@fancyapps/ui';

export const cardGallery = () => {

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: {
          Carousel: {
            fill: true,
            center: true,
          },
        },
      });
}