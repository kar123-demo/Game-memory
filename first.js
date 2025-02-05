
const v = document.getElementById("background-video");
v.onended = function() {
    v.pause(); 
};


function showImage() {
    let imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    let image = document.createElement("img");
    image.src = "instructions.png";

    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.className = "close-btn";
    closeButton.onclick = function () {
        document.body.removeChild(imageContainer); 
    };

    imageContainer.appendChild(closeButton);
    imageContainer.appendChild(image);

    document.body.appendChild(imageContainer);
}


function red() {
    document.getElementById("h").textContent = "Selected difficulity:Easy";
}


function red2() {
    document.getElementById("h").textContent = "Selected difficulity:Hard";
}

function red1() {
    document.getElementById("h").textContent = "Selected difficulity:Medium";
}


function demo() {
    let buttonText = document.getElementById("h").textContent;
    if (buttonText === "Selected level:") { 
        window.alert("Please select difficulty");
    } else {
        window.open('harish.html', '_blank'); 
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
