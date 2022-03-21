import { cardsVid } from './modules/cardsVid.js';
import * as flsFuncs from './modules/functions.js';
import { headerSearch } from './modules/headerSearch.js';
import { heroSlider } from './modules/heroSlider.js';
import { pltSlider } from './modules/pltSlider.js';
import { tabs } from './modules/tabs.js';





document.addEventListener('DOMContentLoaded', () => {
    flsFuncs.isWebp();
    
    heroSlider();
    headerSearch();
    pltSlider();
    tabs();

    cardsVid();
    
    const el = document.querySelector('.testvideo');

    
})
