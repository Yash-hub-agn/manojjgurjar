// Your existing code for draggable and resizable elements
function initializeDraggableAndResizable() {
    let previousWidth = 0;
    let previousHeight = 0;
    let rotationEnabled = false;

    $('.temp').each(function () {
        const $element = $(this);

        $element.draggable({
            containment: 'false', // Contain within their parent element
            scroll: false,
            start: function (event, ui) {
                if (!rotationEnabled) {
                    // Store the original position before dragging
                    ui.originalPosition = ui.position;
                }
            }
        }).resizable({
            containment: false,
            handles: 'n, e, s, w, ne, se, sw, nw',
            start: function (event, ui) {
                if (!rotationEnabled) {
                    // Store the original width and height before resizing
                    ui.originalSize = ui.size;
                }
            },
            resize: function (event, ui) {
                if (!rotationEnabled) {
                    // Check if user is increasing or decreasing size
                    const increasingSize =
                        ui.size.width > ui.originalSize.width &&
                        ui.size.height > ui.originalSize.height;

                    if (increasingSize) {
                        // If increasing size, remove min-width and min-height
                        $element.find('img').css({
                            'min-width': '',
                            'min-height': ''
                        });
                    } else {
                        // If decreasing size, set min-width and min-height
                        $element.find('img').css({
                            'min-width': previousWidth + 'px',
                            'min-height': previousHeight + 'px'
                        });
                    }

                    // Update the previous width and height
                    previousWidth = ui.size.width;
                    previousHeight = ui.size.height;
                }
            },
            stop: function (event, ui) {
                // Update original size after resizing is complete
                ui.originalSize = ui.size;
            }
        });
    });
}

initializeDraggableAndResizable();




$('.swiper-1-image').on("click",(event)=>{
    // Define the new image URL   
    let clickedElement = event.target;
    let newImageUrl = $(clickedElement).attr('src');
    console.log(newImageUrl);
    // Use jQuery to change the background-image property
    $('.image-container').css('background-image', 'url(' + newImageUrl + ')');

});
$('#frameInput').on("change", function(event) {
    var selectedFile = event.target.files[0];

    if (selectedFile) {
        var reader = new FileReader();

        reader.onload = function(e) {
            let newImageUrl = e.target.result;
            $('.image-container').css('background-image', 'url(' + newImageUrl + ')');
        };

        reader.readAsDataURL(selectedFile);
    }

});
$('.swiper-1-image').on("click",(event)=>{
    // Define the new image URL   
    let clickedElement = event.target;
    let newImageUrl = $(clickedElement).attr('src');
    console.log(newImageUrl);
    // Use jQuery to change the background-image property
    $('.example').css('background-image', 'url(' + newImageUrl + ')');

});
$('#frameInput').on("change", function(event) {
    var selectedFile = event.target.files[0];

    if (selectedFile) {
        var reader = new FileReader();

        reader.onload = function(e) {
            let newImageUrl = e.target.result;
            $('.example').css('background-image', 'url(' + newImageUrl + ')');
        };

        reader.readAsDataURL(selectedFile);
    }

});



// Function to create a new div element with the image and make it draggable and resizable
function createImageDiv(src) {
    const div = $(
        `<div class="temp special position-absolute z-medium" draggable="true">
            <img src="${src}" alt="" class="cover-parent image-fill draggble-image">
        </div>`
    );

    // Double-click event to delete the div using jQuery
    div.on("dblclick", () => {
        div.remove();
    });
    $('.image-container').append(div);

    return div;
}

$(document).ready(function () {
    // Use event delegation to handle double-clicks on div.temp elements
    $(".image-container").on("dblclick", ".special", function () {
        // Remove the clicked div.temp element
        $(this).addClass("hide");
    });
});
// Event listener for clicking on an image
$('.swiper-2-image').on("click", (event) => {
    let clickedElement = event.target;
    let newImageUrl = $(clickedElement).attr('src');
    createImageDiv(newImageUrl);
    // Call the function to initialize draggable and resizable functionality
    initializeDraggableAndResizable();
});
$('.swiper-15-image').on("click", (event) => {
    $('.example').addClass('hide');
    $('.example3').removeClass('hide');
    $('.example3').css('background-image',' url(./image/shop3.webp)')
    $('.example3-image').removeClass('hide')
});
$('.swiper-16-image').on("click", (event) => {
    $('.example').addClass('hide');
    $('.example4').removeClass('hide')
    $('.example4').css('background-image',' url(./image/shop4.webp)')
    $('.example4-image').removeClass('hide')
});
$('.swiper-17-image').on("click", (event) => {
    $('.example').addClass('hide');
    $('.example5').removeClass('hide')
    $('.example5').css('background-image',' url(./image/shop5.webp)')
    $('.example5-image').removeClass('hide')
});
$('.swiper-18-image').on("click", (event) => {
    $('.example').addClass('hide');
    $('.example6').removeClass('hide')
    $('.example6').css('background-image',' url(./image/shop6.webp)')
    $('.example6-image').removeClass('hide')
});
$('.swiper-19-image').on("click", (event) => {
    $('.example').addClass('hide');
    $('.example7').removeClass('hide')
    $('.example7').css('background-image',' url(./image/shop7.webp)')
    $('.example7-image').removeClass('hide')
});
$('.swiper-20-image').on("click", (event) => {
    $('.example').addClass('hide');
    $('.example2').removeClass('hide')
    $('.example2').css('background-image',' url(./image/shop2.webp)')
    $('.example2-image').removeClass('hide')
});
$('.swiper-21-image').on("click", (event) => {
    $('.example').addClass('hide');
    $('.example1').removeClass('hide')
    $('.example1').css('background-image',' url(./image/shop1.webp)')
    $('.example1-image').removeClass('hide')
});

$('#imageInput').on("change", function(event) {
    var selectedFile = event.target.files[0];

    if (selectedFile) {
        var reader = new FileReader();

        reader.onload = function(e) {
            let newImageUrl = e.target.result;
            createImageDiv(newImageUrl);
            initializeDraggableAndResizable();
        };

        reader.readAsDataURL(selectedFile);
    }

});


let n=0;
// function toggleUniqueAndSelected() {
//     console.log('hello');// Selected elements
let selected = [];

// Click handler
$(document).on('click', '.special', function(e) {

    // Get clicked element
    //   var $el = $(e.target);
    // Get the clicked element with class .special
    var $el = $(this); // Use $(this) instead of $(e.target)
  
  // If already selected
  if($el.hasClass('unique')) {
    // Deselect
    $el.removeClass('unique selected-items');
    selected.splice(selected.indexOf($el), 1);

  } else {
    // Select
    $el.addClass('unique selected-items');
    selected.push($el);
    n=1;
  }

});
  
//   }
  
//   $('.special').on('click', toggleUniqueAndSelected);

$('.swiper-3-image').on('click',()=>{
    if(n==0){
        $('.special img').css('clip-path', 'circle(50% at 50% 50%)');

    }
    if(n==1){
        $('.unique img').css('clip-path', 'circle(50% at 50% 50%)');
        n=0;
        $('.unique').removeClass('unique selected-items');
    }
});
$('.swiper-4-image').on('click',()=>{
    if(n==0){
        $('.special img').css('clip-path', ' polygon(50% 0%, 0% 100%, 100% 100%)');
    }
    if(n==1){
        $('.unique img').css('clip-path', ' polygon(50% 0%, 0% 100%, 100% 100%)');
        n=0;
        $('.unique').removeClass('unique selected-items');
    }
});
$('.swiper-5-image').on('click',()=>{
    if(n==0){
        $('.special img').css('clip-path', ' ellipse(25% 40% at 50% 50%)');
    }
    if(n==1){
        $('.unique img').css('clip-path', ' ellipse(25% 40% at 50% 50%)');
        n=0;
        $('.unique').removeClass('unique selected-items');
    }
});
$('.swiper-6-image').on('click',()=>{
    if(n==0){
        $('.special img').css('clip-path', 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)');
    }
    if(n==1){
        $('.unique img').css('clip-path', 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)');
        n=0;
        $('.unique').removeClass('unique selected-items');
    }
});
$('.swiper-7-image').on('click',()=>{
    if(n==0){
        $('.special img').css('clip-path', 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)');
    }
    if(n==1){
        $('.unique img').css('clip-path', 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)');
        n=0;
        $('.unique').removeClass('unique selected-items');
    }
})
$('.swiper-8-image').on('click',()=>{
    if(n==0){
        $('.special img').css('clip-path', 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)');
    }
    if(n==1){
        $('.unique img').css('clip-path', 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)');
        n=0;
        $('.unique').removeClass('unique selected-items');
    }
})
$('.swiper-9-image').on('click',()=>{
    if(n==0){
        $('.special img').css('clip-path', ' polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)');
    }
    if(n==1){
        $('.unique img').css('clip-path', ' polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)');
        n=0;
        $('.unique').removeClass('unique selected-items');
    }
})
$('.swiper-10-image').on('click',()=>{
    if(n==0){
        $('.special img').css('clip-path', 'none');
    }
    if(n==1){
        $('.unique img').css('clip-path', 'none');
        n=0;
        $('.unique').removeClass('unique selected-items');
    }
})
$('.swiper-11-image').on('click',()=>{
    if(n==0){
        $('.special img').css('clip-path', 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)');
    }
    if(n==1){
        $('.unique img').css('clip-path', 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)');
        n=0;
        $('.unique').removeClass('unique selected-items');
    }
})
$("body").on('click','.border-image',()=>{
    $('.border-circle').toggleClass('left-0');
    $('.special').toggleClass('border-none');
    $('.ui-icon').toggleClass('opacity-none');
})



// rotation
// script.js
const rotatableElement = document.querySelector('.rotate-image');
const specialElement = document.getElementsByClassName('special');
const uniqueElement = document.getElementsByClassName('unique');
let isDragging = false;
let startAngle = 0;
let currentAngle = 0;

// Function to calculate the angle between two points
function getAngle(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
}

function rotateElements(angle) {
    rotatableElement.style.transform = `rotate(${angle}deg)`;
    if (n === 1) {
        for (let i = 0; i < uniqueElement.length; i++) {
            uniqueElement[i].style.transform = `rotate(${angle}deg)`;
        }
    }
}

rotatableElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    const centerX = rotatableElement.getBoundingClientRect().left + rotatableElement.offsetWidth / 2;
    const centerY = rotatableElement.getBoundingClientRect().top + rotatableElement.offsetHeight / 2;
    startAngle = getAngle(centerX, centerY, e.clientX, e.clientY) - currentAngle;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const centerX = rotatableElement.getBoundingClientRect().left + rotatableElement.offsetWidth / 2;
        const centerY = rotatableElement.getBoundingClientRect().top + rotatableElement.offsetHeight / 2;
        const newAngle = getAngle(centerX, centerY, e.clientX, e.clientY) - startAngle;

        // Ensure rotation stays within the 0-360 degree range
        currentAngle = newAngle < 0 ? 360 + newAngle : newAngle % 360;

        rotateElements(currentAngle);
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// For touch devices (similar adjustments)
rotatableElement.addEventListener('touchstart', (e) => {
    isDragging = true;
    const touch = e.touches[0];
    const centerX = rotatableElement.getBoundingClientRect().left + rotatableElement.offsetWidth / 2;
    const centerY = rotatableElement.getBoundingClientRect().top + rotatableElement.offsetHeight / 2;
    startAngle = getAngle(centerX, centerY, touch.clientX, touch.clientY) - currentAngle;
});

document.addEventListener('touchmove', (e) => {
    if (isDragging) {
        const touch = e.touches[0];
        const centerX = rotatableElement.getBoundingClientRect().left + rotatableElement.offsetWidth / 2;
        const centerY = rotatableElement.getBoundingClientRect().top + rotatableElement.offsetHeight / 2;
        const newAngle = getAngle(centerX, centerY, touch.clientX, touch.clientY) - startAngle;

        // Ensure rotation stays within the 0-360 degree range
        currentAngle = newAngle < 0 ? 360 + newAngle : newAngle % 360;

        rotateElements(currentAngle);
    }
});

document.addEventListener('touchend', () => {
    isDragging = false;
});



// JavaScript to lazy load images
const images = document.querySelectorAll(".temp img");

const lazyLoad = (image) => {
    const imageUrl = image.getAttribute("data-src");
    if (imageUrl) {
        image.src = imageUrl;
    }
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            lazyLoad(entry.target);
            observer.unobserve(entry.target);
        }
    });
});

images.forEach((image) => {
    observer.observe(image);
});




// Check if the device is in landscape mode
const isLandscape = window.matchMedia("(orientation: landscape)").matches;

// Lock the page to landscape mode
if (!isLandscape) {
    // Force landscape orientation
    if (window.screen && window.screen.lockOrientation) {
        window.screen.lockOrientation("landscape");
    }
}