export const tabs = () => {
    const parent = document.querySelector('.list');

    if(parent) {
        const tabsParent = parent.querySelector('.list__tabs');
        const tabs = parent.querySelectorAll('.list__tabs_item');
        const items = parent.querySelectorAll('.cards');



        function hideTabs() {
            tabs.forEach(i => {
                i.classList.remove('active');
            })
            items.forEach(i => {
                i.classList.remove('active');
            })
        }

        function showTabs(index = 0) {
            tabs[index].classList.add('active');
            items[index].classList.add('active');
        }

        hideTabs();
        showTabs();


        tabsParent.addEventListener('click', (e) => {
            let target = e.target;

            if(target && target.classList.contains('list__tabs_item')) {
                tabs.forEach((item, index) => {
                    if(target == item) {
                        hideTabs();
                        showTabs(index);
                    }
                })

            }
        })
    }

    const tbBtns = document.querySelectorAll('.tab-button');
    if(tbBtns.length > 0) {
        tbBtns.forEach(i => {
            i.addEventListener('click', () => {
                i.classList.toggle('active');
            })
        })
    }
    


}