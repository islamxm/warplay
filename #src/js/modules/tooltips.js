import tippy, {roundArrow} from 'tippy.js';

export const tooltips = () => {

    const playBtns = document.querySelectorAll('.cards__item_action_play');
    const addBtns = document.querySelectorAll('.cards__item_action_btn');
    const lkInfo = document.querySelector('.time__value_info');

    if(playBtns.length > 0) {
        playBtns.forEach(i => {
            tippy(i, {
                content: 'Запустить',
                animation: 'scale',
                theme: 'material',
                placement: 'top',
                arrow: true,
                arrow: roundArrow,
                
            })
        })
    }

    if(addBtns.length > 0) {
        addBtns.forEach(i => {
            tippy(i, {
                content: 'Добавить в мои игры',
                animation: 'scale',
                placement: 'top',
                arrow: true,
                arrow: roundArrow,
            })
        })
    }

    if(lkInfo) {
        tippy(lkInfo, {
            content: lkInfo.dataset.info,
            animation: 'scale',
            placement: 'top',
            arrow: true,
            arrow: roundArrow
        })
    }
}