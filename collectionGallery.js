$(document).ready(function() {
  const $fullCollections = $('.portfolio-image');
  const $fullCollections1 = $('.architeure-image');
  const $fullCollections2 = $('.nature-imgGallery');
  const $fullCollections3 = $('.shopCollection-image');
  const $fullCollections4 = $('.desert-image');
  const $fullCollections5 = $('.mountain-image');
  let lastClickedIndex = -1;

  function handleImageClick(index) {
      lastClickedIndex = index;
  }

  function attachClickHandlers($elements) {
      $elements.each(function(index, collectionItem) {
          $(collectionItem).click(function () {
              handleImageClick(index);
          });
      });
  }

  attachClickHandlers($fullCollections);
  attachClickHandlers($fullCollections1);
  attachClickHandlers($fullCollections2);
  attachClickHandlers($fullCollections3);
  attachClickHandlers($fullCollections4);
  attachClickHandlers($fullCollections5);

  function exitFullPageMode(selector) {
    if (lastClickedIndex !== -1) {
        if (selector.length > lastClickedIndex) {
            selector.eq(lastClickedIndex).get(0).scrollIntoView({
                block: 'center'
            });
        }
    }
  }

  // Function to handle image click and display in a modal
  $(".nature-image").click(function() {
      const imageUrl = $(this).attr("src");
      const imageAlt = $(this).attr("alt");
      
      $('.nature-container').addClass('hide');
      $('#nav').addClass('hide');
      
      // Create a modal to display the clicked image
      const modalHtml = `
          <div class="image-modal view flex flex-center">
              <img src="${imageUrl}" alt="${imageAlt}" class="modal-image image-max">
          </div>
      `;

      // Append the modal to the body
      $("body").append(modalHtml);

      // Close the modal when clicked outside
      $(".image-modal").click(function() {
          $(this).remove();
          $('.nature-container').removeClass('hide');
          $('#nav').removeClass('hide');
          exitFullPageMode($fullCollections);
          exitFullPageMode($fullCollections1);
          exitFullPageMode($fullCollections2);
          exitFullPageMode($fullCollections3);
          exitFullPageMode($fullCollections4);
          exitFullPageMode($fullCollections5);
      });
  });

  // Function to set the height of flex items based on the tallest item
  function setHeightToTallestItem() {
    let maxWidth = 0;
    $('.nature-image-container').width('auto'); // Reset widths to auto

    // Find the maximum width among all '.nature-image-container' elements
    $('.nature-image-container').each(function() {
      let itemWidth = $(this).width();
      if (itemWidth > maxWidth) {
        maxWidth = itemWidth; // Fix the typo here
      }
    });

    // Set the maximum width to all '.nature-image-container' elements
    $('.nature-image-container').width(maxWidth);
  }

  // Call the function initially
  setHeightToTallestItem();

  // Attach the function to the window's resize event
  $(window).on('resize', setHeightToTallestItem);

  
});
