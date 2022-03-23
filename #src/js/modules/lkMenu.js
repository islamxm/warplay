export const lkMenu = () => {
    const menu = document.querySelector('.aside');
    const trigger = document.querySelector('.lk__aside');

    const lkdt = document.querySelector('.lkdt');

    if(trigger && menu) {
        trigger.addEventListener('click', () => {
            if(lkdt && lkdt.classList.contains('active')) {
                lkdt.classList.remove('active'); 
            }
            trigger.classList.toggle('active');
            menu.classList.toggle('active');
        })
    }
}