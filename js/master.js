let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color-option"));
}

document.querySelector(".toggle-settings .fa-gear").onclick = function() {
    this.classList.toggle("fa-spin");
    
    document.querySelector(".settings-box").classList.toggle("open");   
    };

    // switch colors
    const colorsLi = document.querySelectorAll(".colors-list li");
    
    colorsLi.forEach(li => {
        
        li.addEventListener("click", (e) => {
            document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
        });

    });

//select landing page element 
let landingPage = document.querySelector(".landing-page");

// get Array of images
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

setInterval(() => {

    //get random number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

// change background image url
    landingPage.style.backgroundImage = 'url("images/'+ imgsArray[randomNumber]+'")';
},10000);

