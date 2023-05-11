// window.addEventListener('scroll', function() {
//     var adsImage = document.getElementById('ads-image');
//     var wholeSection = document.querySelector('.whole');

//     var rect = wholeSection.getBoundingClientRect();
//     if (rect.top < window.innerHeight && rect.bottom >= 0) {
//         adsImage.classList.add('hide-ads'); // Add the 'hide-ads' class when the 'whole' section is in view
//     } else {
//         adsImage.classList.remove('hide-ads'); // Remove the 'hide-ads' class when the 'whole' section is out of view
//     }
// });


const adsImage = document.querySelector(".ads");
const wholeSection = document.querySelector(".whole");

var options = {rootMargin:'-200px'}

const sideBarObserver = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            // adsImage.classList.add("show-ads");
            anime({
                targets : adsImage,
                duration : '500',
                opacity : [0,1],
                scale : [0.8,1],
                easing : 'easeOutInExpo',
                
            })

        }else{
            adsImage.classList.remove("show-ads");
        }
    })
}, options);


sideBarObserver.observe(wholeSection)


// Array.forEach((a, ai) => {

// })
