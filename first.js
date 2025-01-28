const v=document.getElementById("background-video");
v.onended=function(){
    v.onpause();
};


function showImage() {
    let imageContainer =
        document.createElement("div");
    imageContainer.className =
        "image-container";

    let image =
        document.createElement("img");
    image.src ="instructions.png";
    let closeButton =
        document.createElement(
            "button"
        );
    closeButton.textContent = "removclose";
    closeButton.className =
        "close-btn";
    closeButton.onclick =
        function () {
            document.body.removeChild(
                imageContainer
            );
        };

    imageContainer.appendChild(
        closeButton
    );
    imageContainer.appendChild(image);

    document.body.appendChild(
        imageContainer
    );
}