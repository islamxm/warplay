export const lkdt = () => {
    const trigger = document.querySelector('.action__btn-edit');
    const modal = document.querySelector('.lkdt');
    const close = document.querySelector('.lkdt__action_item_btn-cancel');
    const asideMenu = document.querySelector('.aside');

    if(trigger) {
        trigger.addEventListener('click', () => {
            if(asideMenu && asideMenu.classList.contains('active')) {
                asideMenu.classList.remove('active');
            }
            modal.classList.add('active');

        })
    }

    if(close) {
        close.addEventListener('click', () => {

            modal.classList.remove('active');
        })
    }
}