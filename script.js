const videoElement = document.getElementById('video');
const buttonElement = document.getElementsByClassName('Btn');

// Function to prompt the user to select a media stream (e.g., screen sharing)
async function selectMediaStream() {
    try {
        // Use navigator.mediaDevices.getDisplayMedia() to prompt the user to select a media stream
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();

        // Set the selected media stream as the source for the video element
        videoElement.srcObject = mediaStream;

        // Once the metadata is loaded, play the video element
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // If an error occurs, log it to the console
        console.log('Error:', error);
    }
}

// Add an event listener to the button with id "Btn" to start Picture-in-Picture mode
Btn.addEventListener('click', async () => {
    // Disable the button when clicked to prevent multiple requests
    Btn.disable = true;

    // Request Picture-in-Picture mode for the video element
    await videoElement.requestPictureInPicture();

    // Reset the button to enable it again
    Btn.disable = false;
});

// On page load, call the selectMediaStream function to prompt the user to select a media stream
selectMediaStream();
