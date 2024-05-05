// the function to change the image source, button color, and background color
function changeImageAndColor(buttonColor, bgColor, imageLocation) {
  const imageElement = document.getElementById("image");

  // Set the source of the image element to new img location
  imageElement.src = imageLocation;

  const uploadButton = document.getElementById("upload-button");
  
  // Change the background color of the upload button
  uploadButton.style.backgroundColor = buttonColor;

  // Change the background color of the body
  document.body.style.backgroundColor = bgColor;
}

// Function to handle click on the upload button
function handleUploadButtonClick() {
  const uploadInput = document.getElementById("upload-input");

  // Simulate a click on the hidden file input element
  uploadInput.click();
}

// Function to handle file upload
function handleFileUpload(event) {

  // Get the selected file from the input element
  const file = event.target.files[0];

  // Check if the file is an image (.jpg or .png) and within the size 5MB
  if (
    file &&
    (file.type === "image/jpeg" || file.type === "image/png") &&
    file.size <= 5242880
  ) {
    const reader = new FileReader();

    reader.onload = function () {
      const loader = document.getElementById("loader-container")
      const imageContainer = document.getElementById("umbrella")
      const prevUploadedImage = document.getElementById("uploaded-image");

      if(prevUploadedImage) {
        prevUploadedImage.remove();
      }
      const image = document.getElementById("image");
      loader.style.display = "flex";
      image.style.display = "none";

      // Create a new img element
      const uploadedImage = document.createElement("img");
      // Set the source of the uploaded image to the file data
      uploadedImage.src = reader.result;

      // Add a CSS class to the uploaded image
      uploadedImage.setAttribute("id", "uploaded-image");
      
      setTimeout(function () {
        // Append the uploaded image to the document body after 2 seconds
        imageContainer.appendChild(uploadedImage);
        
        image.style.display = "";
        loader.style.display = "none"
      }, 2000);
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
  }
}

function showLoader() {
  const image = document.getElementById("umbrella");
  
  image.src = "assets/loader_icon.svg"
  image.className = 'loading'
}



const uploadInput = document.getElementById("upload-input");
// Add event listener to the file input element
uploadInput.addEventListener("change", handleFileUpload);