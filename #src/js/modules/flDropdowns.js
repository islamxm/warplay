import Choices from "choices.js";

export const flDropdowns = () => {



    const parent = document.querySelectorAll('.dr');
    

    if(parent.length > 0) {
        parent.forEach(item => {
            item.addEventListener('click', (e) => {

                
                let tar = e.target;

                let head = e.currentTarget.querySelector('.dr__head');
                let list = e.currentTarget.querySelector('.dr__list');

                function checkDr() {
                    if(item.classList.contains('active')) {
                        list.style.cssText = `height: ${list.scrollHeight}px`;
                    }

                    if(!item.classList.contains('active')) {
                        list.style.cssText = `height: 0px`;
                    }
                }

                if(tar && tar.classList.contains('dr__head')) {
                    
                    item.classList.toggle('active');
                    checkDr();
                }

                let listItems = list.querySelectorAll('.dr__item');

                if(listItems.length > 0) {
                    listItems.forEach(i => {
                        i.addEventListener('click', (e) => {
                            if(e.target) {
                                e.target.parentElement.previousElementSibling.innerHTML = e.target.innerHTML;
                                item.dataset.selected = e.target.innerHTML;

                                if(item.dataset.selected != '') {
                                    item.classList.add('selected');
                                }
                                item.classList.remove('active');
                                checkDr();
                            }
                        })
                    })
                }
            })
        })
    }

}