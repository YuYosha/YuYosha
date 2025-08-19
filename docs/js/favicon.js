onload = function() {
    cv = document.querySelector('#cvl'),
    ctx = cv.getContext('2d');
    if (!!ctx) {
        C3qπ = 1.5 * Math.PI, // starting position[angle] for circle drawing
        tc = pct = 0,
             
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'fuchsia';
        
            tc = setInterval(updateLoader, 60);
           
    
    }
};
function updateLoader() {
    lnk = document.querySelector('link[rel*="icon"]');

    with(ctx) {
        clearRect(0, 0, 16, 16);
        beginPath();
        arc(8, 8, 6, C3qπ, (pct * 2 * Math.PI / 100 + C3qπ));
        stroke();
    }
    lnk.href= cv.toDataURL('image/png'); // update favicon
    if (pct === 100) {
        clearInterval(tc);
    
    
        return;
    }
    pct++;
}