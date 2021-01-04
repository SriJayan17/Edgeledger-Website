function initMap(){
    const loc ={lat:12.106527,lng:78.136139};
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom:14,
        center:loc
    });
    const marker = new google.maps.Marker({ position:loc, map:map});
}

// navbar background

window.addEventListener('scroll',function(){
    if (scrollY>150){
        document.querySelector('#navbar').style.opacity=0.9;
    }
    else{
        document.querySelector('#navbar').style.opacity=1;
    }
})

// smooth scrolling

$('#navbar a, .btn').on('click',function(event){
    if (this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop:$(hash).offset().top -100
            },
            800
        );
    }
});