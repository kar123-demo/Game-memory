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


let difficulty = "";

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function setDifficulty(level) {
    difficulty = level;
    document.getElementById("selectedDifficulty").innerText = "Selected Difficulty: " + level;
    document.getElementById("myDropdown").classList.remove("show");
}

function startGame() {
    if (difficulty) {
        alert("Starting game with " + difficulty + " difficulty!");
    } else {
        alert("Please select a difficulty level first.");
    }
}

function showInstructions() {
    alert("Instructions: \n1. Select a difficulty level.\n2. Click 'Play' to start the game.");
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
