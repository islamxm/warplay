export const cardsVid = () => {
    const els = document.querySelectorAll('.cards__item');
    if(els.length > 0) {
        els.forEach(i => {
            
        
            i.addEventListener('mouseover', (e) => {
                let vid = e.currentTarget.querySelector('.testvideo');

                if(vid) {
                    vid.style.cssText = 'opacity: 1;';
                    vid.play();
                }
            })
    
            i.addEventListener('mouseleave', (e) => {
                let vid = e.currentTarget.querySelector('.testvideo');
                
                if(vid) {
                    vid.style.cssText = 'opacity: 0';
                    vid.pause();
                    vid.currentTime = 0;
                }
            })
        })
    }
    
}