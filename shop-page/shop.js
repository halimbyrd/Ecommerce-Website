

const filter = document.querySelector('.filter');
const productSections = document.querySelectorAll('.product-section');
 const smallImgs = document.querySelectorAll('.small-img');
 const  shopWrapper = document.querySelector('.shop-wrapper');


 console.log(shopWrapper)



filter.addEventListener('change', function() {
    let selectedOption = filter.value

    productSections.forEach(function(section) {
       if(section.classList.contains(selectedOption) || selectedOption === 'all') {
           section.style.display = 'flex';
           
       } else {
           section.style.display = 'none';
       }

    })
})


    



