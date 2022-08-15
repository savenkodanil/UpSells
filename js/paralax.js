let w = window.screen.availWidth;
if(w > 1000){
    let img1 = document.querySelector('.paralax1')
    let img2 = document.querySelector('.paralax2')
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        img1.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)'
        img2.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)'
    });
};
