import Choices from "choices.js";

export const flDropdowns = () => {



    const parent = document.querySelectorAll('.dr');

    // if(parent.length > 0) {
    //     parent.forEach(el => {
    //         el.addEventListener('click', (e) => {

    //             let tar = e.target;

    //             const head = e.currentTarget.querySelector('.dr__head');
    //             const list = e.currentTarget.querySelector('.dr__list');

    //             if(tar && tar == head) {
    //                 el.classList.toggle('active');


    //             }

    //         })
    //     })
    // }

    document.addEventListener('click', (e) => {
        let els = e.currentTarget.querySelectorAll('.dr');

        if(els.length > 0) {

            els.forEach(el => {
                
                let head = el.querySelector('.dr__head');
                let list = el.querySelector('.dr__list');

                if(!e.target.classList.contains('dr__head')) {
                    els.forEach(rm => {
                        rm.classList.remove('active');
                    })
                    
                }
                if(e.target.classList.contains('dr__head')) {
                    els.forEach(rm => {
                        rm.classList.remove('active');
                    })
                    
                    e.target.parentElement.classList.toggle('active');

                    if(e.target.parentElement.classList.contains('active')) {
                        let listItems = e.target.nextElementSibling.querySelectorAll('.dr__item');
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
    

    // if(parent.length > 0) {
    //     parent.forEach(item => {


    //         function checkDr(element, elList) {
    //             if(element.classList.contains('active')) {
    //                 elList.style.cssText = `height: ${elList.scrollHeight}px`;
    //             }

    //             if(!element.classList.contains('active')) {
    //                 elList.style.cssText = `height: 0px`;
    //             }
    //         }

            



    //         item.addEventListener('click', (e) => {

                
    //             let tar = e.target;

    //             let head = e.currentTarget.querySelector('.dr__head');
    //             let list = e.currentTarget.querySelector('.dr__list');

                

    //             if(tar && tar.classList.contains('dr__head')) {
                    
    //                 item.classList.toggle('active');
    //                 checkDr(item, list);
    //             }

    //             let listItems = list.querySelectorAll('.dr__item');

    //             if(listItems.length > 0) {
    //                 listItems.forEach(i => {
    //                     i.addEventListener('click', (e) => {
    //                         if(e.target) {
    //                             e.target.parentElement.previousElementSibling.innerHTML = e.target.innerHTML;
    //                             item.dataset.selected = e.target.innerHTML;

    //                             if(item.dataset.selected != '') {
    //                                 item.classList.add('selected');
    //                             }
    //                             item.classList.remove('active');
    //                             checkDr();
    //                         }
    //                     })
    //                 })
    //             }
    //         })


    //         document.body.addEventListener('click', (e) => {
    //             let drs = document.querySelectorAll('.dr');

    //             if(drs.length > 0) {
    //                 drs.forEach(dr => {
    //                     if(dr.classList.contains('active')) {
    //                         if(e.target != dr && e.target != dr.children) {
    //                             let lists = document.querySelectorAll('.dr__list');
                                
    //                             parent.forEach(all => {
    //                                 all.classList.remove('active');
    //                                 lists.forEach(l => {
    //                                     // l.style.cssText = `height: 0px`;
    //                                     checkDr(all, l);
    //                                 })
    //                             })
                                
    //                         }
    //                     }
                        
    //                 })
    //             }
                
    //         })
    //     })
    // }

}