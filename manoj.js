$(document).ready(function() {
  // Get the text from the .glow element
  let myString = "Photographer";
  let charArray = myString.split('');
  let string = charArray;
  var outputContainer = $(".glow");

  // Function to display characters one by one
  function typeText(index) {
    if (index < charArray.length) {
      var charElement = $("<span>").text(charArray[index]);
      if (index === 0) {
        charElement.addClass("large");
      }
      outputContainer.append(charElement);
      setTimeout(function() {
        typeText(index + 1);
      }, 500);
    } else {
      // Start erasing text after displaying
      EraseText(charArray.length - 1);
    }
  }

  function EraseText(index) {
    if (index >= 0) {
      outputContainer.children().last().remove();
      setTimeout(function() {
        EraseText(index - 1);
      }, 500);
    } else {
      // After erasing, restart the animation
      setTimeout(runAnimation, 1000); // Wait for 1 second before restarting
    }
  }

  function runAnimation() {
    // Clear the container before starting
    outputContainer.empty();
    charArray = string;
    typeText(0);
  }

  runAnimation();
});


$(document).ready(() => {
  $('.image-container img').on('click', () => {
    // Toggle the "social-icons" and "social-icons-back" classes immediately
    $('.social').removeClass('hide')
    $('.social').toggleClass('social-icons social-icons-back');
  });
});

$(document).ready(() => {
  $('.circle-container-img').on('mouseover', function () {
    const collectionNumber = $(this).data('collection');
    $('.collection-info').addClass('hide');
    $(`.collection-info${collectionNumber}`).removeClass('hide');
  });

  $('.circle-container-img').on('mouseleave', () => {
    $('.collection-info').addClass('hide');
  });
});


$(document).ready(function() {
  // Function to set the height of flex items based on the tallest item
  function setHeightToTallestItem() {
    let maxHeight = 0;
    $('.aboutme-para').height('auto'); // Reset heights to auto

    // Find the maximum height among all '.flex-item' elements
    $('.aboutme-para').each(function() {
      let itemHeight = $(this).height();
      if (itemHeight > maxHeight) {
        maxHeight = itemHeight;
      }
   });

    // Set the maximum height to all '.flex-item' elements
    $('.aboutme-para').height(maxHeight);
  }

  // Call the function initially
  setHeightToTallestItem();

  // Attach the function to the window's resize event
  $(window).on('resize', setHeightToTallestItem);
});
 

 

let imagePath;

function setImagePath(path) {
  imagePath = path;
} 

function updateDetails(title, text, buttonTitle,newHref) {
  $('.details-info h1').text(title);
  $('.details-info p').text(text);
  $('.collection-button p').text(buttonTitle);
  $('.collection-button a').attr('href', newHref);
}

// Array of image file extensions
const imageExtensions = ["jpg"];

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to get a unique random image source
function getUniqueRandomImage() {
  const usedImages = new Set(); // Store used image numbers
  let randomImageNumber;

  do {
    randomImageNumber = getRandomNumber(1, 10);
  } while (usedImages.has(randomImageNumber));

  usedImages.add(randomImageNumber);
  return `${imagePath}${randomImageNumber}.${imageExtensions[getRandomNumber(0, imageExtensions.length - 1)]}`;
}

// Function to update the image source and apply a random rotation
function updateImageAndRotate(selector) {
  const $element = $(selector);

  // Get a unique random image source
  const randomImageSrc = getUniqueRandomImage();

  // Change the src attribute to the randomly constructed image source
  $element.find('.image').attr('src', randomImageSrc);
}

$(document).ready(function() {

  // Attach the click event handler to the .image2 element
  $('.image3').on('click', function() {
    $('#template').removeClass('hide');
    $('#Collection').addClass('hide');
    setImagePath('../manoj/architeure/');
    updateDetails('ARCHITEURE', 'lorem ipsum dolor sit amet..','Collection','./Architeure.html');

    // Use a while loop to continuously update the image and rotate
    function updateImages() {
      updateImageAndRotate('.tempuni2');
      setTimeout(function() {
        updateImageAndRotate('.tempuni1');
        setTimeout(function() {
          updateImageAndRotate('.tempuni');
          updateImages(); // Repeat the process
        }, 3000); // Wait for 4 seconds
      }, 2000); // Wait for 3 seconds
    }

    updateImages(); // Start the initial update
  });
  // Attach the click event handler to the .image2 element
  $('.image2').on('click', function() {
    $('#template').removeClass('hide');
    $('#Collection').addClass('hide');
    setImagePath('../manoj/hills and mountains/');
    updateDetails('MOUNTAINS', 'lorem ipsum dolor sit amet..','Collection','./Mountains.html');

    // Use a while loop to continuously update the image and rotate
    function updateImages() {
      updateImageAndRotate('.tempuni2');
      setTimeout(function() {
        updateImageAndRotate('.tempuni1');
        setTimeout(function() {
          updateImageAndRotate('.tempuni');
          updateImages(); // Repeat the process
        }, 3000); // Wait for 4 seconds
      }, 2000); // Wait for 3 seconds
    }

    updateImages(); // Start the initial update
  });
  // Attach the click event handler to the .image2 element
  $('.image1').on('click', function() {
    $('#template').removeClass('hide');
    $('#Collection').addClass('hide');
    setImagePath('../manoj/dessert/');
    updateDetails('DESERT', 'lorem ipsum dolor sit amet..','Collection','Desert.html');

    // Use a while loop to continuously update the image and rotate
    function updateImages() {
      updateImageAndRotate('.tempuni2');
      setTimeout(function() {
        updateImageAndRotate('.tempuni1');
        setTimeout(function() {
          updateImageAndRotate('.tempuni');
          updateImages(); // Repeat the process
        }, 3000); // Wait for 4 seconds
      }, 2000); // Wait for 3 seconds
    }

    updateImages(); // Start the initial update
  });
  // Attach the click event handler to the .image2 element
  $('.image4').on('click', function() {
    $('#template').removeClass('hide');
    $('#Collection').addClass('hide');
    setImagePath('../manoj/nature/');
    updateDetails('FLOURA AND FAUNA', 'lorem ipsum dolor sit amet..','Collection','Nature.html');

    // Use a while loop to continuously update the image and rotate
    function updateImages() {
      updateImageAndRotate('.tempuni2');
      setTimeout(function() {
        updateImageAndRotate('.tempuni1');
        setTimeout(function() {
          updateImageAndRotate('.tempuni');
          updateImages(); // Repeat the process
        }, 3000); // Wait for 4 seconds
      }, 2000); // Wait for 3 seconds
    }

    updateImages(); // Start the initial update
  });
});



$(document).ready(function() {

  // Attach the click event handler to the .image2 element
  $('body').on('click','#details-info-img', function() {
    $('#template').addClass('hide');
    $('#Collection').removeClass('hide');
  });
});




$(document).ready(function() {
  $("a[href^='#']").on("click", function(e) {
    e.preventDefault();

    var target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").animate({
        scrollTop: target.offset().top
      }, 1000); // Animation duration in milliseconds
    }
  });
});


