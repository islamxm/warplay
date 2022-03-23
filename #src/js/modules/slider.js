import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

export const slider = () => {
    let el = document.getElementById('valueSlider');
    if(el) {
        noUiSlider.create(el, {
            range: {
                'min': 3,
                'max': 50
            },
            step: 1,
            connect: [true, false],
            tooltips: true,
            start: 3,
            format: wNumb({
                decimals: 0,
            })
           
        })
    }
    
}