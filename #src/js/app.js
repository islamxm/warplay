import { cardSlider } from './modules/cardSlider.js';
import { cardsVid } from './modules/cardsVid.js';
import { favBtn } from './modules/fav.js';
import { flDropdowns } from './modules/flDropdowns.js';
import * as flsFuncs from './modules/functions.js';
import { headerSearch } from './modules/headerSearch.js';
import { heroSlider } from './modules/heroSlider.js';
import { pltSlider } from './modules/pltSlider.js';
import { prel } from './modules/prel.js';
import { tabs } from './modules/tabs.js';





document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();
    
    heroSlider();
    headerSearch();
    pltSlider();
    tabs();

    cardsVid();
    
    flDropdowns();
    favBtn();
    cardSlider();
    prel();

    // document.addEventListener('click', () => {
    //     let alldrs = document.querySelectorAll('.dr');
    //     console.log('clicked')
    //     alldrs.forEach(i => {
    //         if(i.classList.contains('active')) {
    //             i.classList.remove('active');
    //         }
    //     })
    // })

    

    
})
