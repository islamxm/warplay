import { cardGallery } from './modules/cardGallery.js';
import { cardSlider } from './modules/cardSlider.js';
import { cardsVid } from './modules/cardsVid.js';
import { favBtn } from './modules/fav.js';
import { flDropdowns } from './modules/flDropdowns.js';
import * as flsFuncs from './modules/functions.js';
import { headerSearch } from './modules/headerSearch.js';
import { heroSlider } from './modules/heroSlider.js';
import { lkdt } from './modules/lkdt.js';
import { lkMenu } from './modules/lkMenu.js';
import { lkTarifSlider } from './modules/lkTarifSlider.js';
import { pltSlider } from './modules/pltSlider.js';
import { prel } from './modules/prel.js';
import { slider } from './modules/slider.js';
import { tabs } from './modules/tabs.js';
import { tooltips } from './modules/tooltips.js';





document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();
    
    heroSlider();
    headerSearch();
    pltSlider();
    tabs();

    cardsVid();
    
    flDropdowns('dr', 'dr__head', 'dr__list', 'dr__item');
    flDropdowns('lkdt__action_item_dr', 'lkdt__action_item_dr_head', 'lkdt__action_item_dr_list', 'item');
    favBtn();
    cardSlider();
    prel();
    lkTarifSlider();
    cardGallery();
    tooltips();
    lkdt();
    slider();
    lkMenu();


    const settings = document.querySelector('.lk__settings');

    if(settings) {
        const values = settings.querySelectorAll('.value__select');

        if(values.length > 0) {
            values.forEach(value => {
                let items = value.querySelectorAll('.value__item');

                items.forEach(i => {
                    if(i.classList.contains('active')) {
                        i.parentElement.dataset.value = i.innerHTML;
                    }

                    i.addEventListener('click', () => {
                        items.forEach(remove => {
                            remove.classList.remove('active');
                        })
                        i.classList.add('active');
                        i.parentElement.dataset.value = i.innerHTML;
                    })
                })
            })
        }
    }
})
