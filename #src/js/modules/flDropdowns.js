import Choices from "choices.js";

export const flDropdowns = (parentEl, itemHead, itemList, listItem) => {

    document.addEventListener('click', (e) => {
        let els = e.currentTarget.querySelectorAll(`.${parentEl}`);

        if(els.length > 0) {

            els.forEach(el => {
                
                let head = el.querySelector(`.${itemHead}`);
                let list = el.querySelector(`.${itemList}`);

                if(!e.target.classList.contains(itemHead)) {
                    els.forEach(rm => {
                        rm.classList.remove('active');
                    })
                    
                }
                if(e.target.classList.contains(itemHead)) {
                    els.forEach(rm => {
                        rm.classList.remove('active');

                    })

                    e.target.parentElement.classList.toggle('active');

                    if(e.target.parentElement.classList.contains('active')) {
                        let listItems = e.target.nextElementSibling.querySelectorAll(`.${listItem}`);
                        listItems.forEach(i => {
                            i.addEventListener('click', (e) => {
                                let itemTarget = e.target;

                                if(itemTarget) {
                                    listItems.forEach(rem => rem.classList.remove('active'));
                                    itemTarget.classList.add('active');
                                    e.target.parentElement.previousElementSibling.innerHTML = e.target.innerHTML;
                                    e.target.parentElement.parentElement.dataset.selected = e.target.innerHTML;

                                    if(e.target.parentElement.parentElement.dataset.selected != '') {
                                        e.target.parentElement.parentElement.classList.add('selected');
                                    }
                                }
                            })
                        })
                    }
                }
            })
        }
    })

}