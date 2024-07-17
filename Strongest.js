// theme switch possibility
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('white-theme');
});
// array of phrases which can be selected
const phrases = [
    "The greatest",
    "The strongest",
    "The kindest",
    "The bravest",
    "The best"
];
// array of imgs which can be selected
const images = [
    "/resources/images.jpg",
    "/resources/94496cab53aa6ca94d9db8c36eba781f.jpg",
    "/resources/25ea499e8dc57ffd7461f40cc12e8c4b.jpg",
    "/resources/main-qimg-3d3b72e4cfe24473442511ad97ea6c76.jpg",
    "/resources/e0a0c2ad2310b247402e745b26805176.jpg"
];

//Go through the array of images and create an Image for each object
images.forEach(src => {
    const img = new Image();
    img.src = src;
});
// Function to get a random element from the array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}
// Function for displaying the result
function showResult() {
    const resultText = document.getElementById("resultText");
    const resultImage = document.getElementById("resultImage");

    if (resultText && resultImage) {
        resultText.textContent = getRandomItem(phrases);
        resultImage.src = getRandomItem(images);
    } else {
        console.error('Required elements not found');
    }
}
// Find the button with the id “randomButton”
const randomButton = document.getElementById("randomButton");
if (randomButton) {
    randomButton.addEventListener("click", showResult);
} else {
    console.error('Random button not found');
}
