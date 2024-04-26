function getColorFromEmotion(emotionName) {
    const emotionMap = {
        "happy": "FF0000", 
        "sad": "0000FF",  
        "angry": "8B0000",
        "calm": "ADD8E6",  
        "excited": "FFA500" 
    };
    return emotionMap[emotionName.toLowerCase()] || "000000"; 
}

document.getElementById("getColorInfo").addEventListener("click", function() {
    let emotionName = document.getElementById("emotionNameInput").value;
    let color = getColorFromEmotion(emotionName);
    generateColorImage(color);
});

function generateColorImage(color) {
    let width = 400;
    let height = 100;
    let imageUrl = `https://singlecolorimage.com/get/${color}/${width}x${height}.png`;

    let imageElement = document.createElement("img");
    imageElement.src = imageUrl;

    let colorImageDiv = document.getElementById("colorImage");
    colorImageDiv.innerHTML = ""; 
    colorImageDiv.appendChild(imageElement);
}
//link of api: https://singlecolorimage.com/api.html