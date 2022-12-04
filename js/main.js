

// setting all
let mainColors = localStorage.getItem("main-color");
if (mainColors!==null) {
    document.documentElement.style.setProperty("--main-color", localStorage.getItem("main-color"));

    document.querySelectorAll(".setting-box .setting-content .spans span").forEach((element) => {
        element.classList.remove("active");
    
        if (element.dataset.color === mainColors) {
            element.classList.add("active");
        }
    })
    
}
// --------------------------------------------------------------------------------------------------------------------












// --------------------------------------------------------------------------------------------------------------------

// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("backgroundOption");

// Check If Random Background Local Storage Is Not EMpty
if (backgroundLocalItem !== null) {

  // Remove Active Class From All Spans
    document.querySelectorAll(".random-backgrounds span").forEach(element => {

    element.classList.remove("active");

});

if (backgroundLocalItem === 'true') {

    backgroundOption = true;

    document.querySelector(".random-backgrounds .yes").classList.add("active");

} else {

    backgroundOption = false;

    document.querySelector(".random-backgrounds .no").classList.add("active");

}

}

// --------------------------------------------------------------------------------------------------------------------









// color change
let colorsSpan = document.querySelectorAll(".setting-box .setting-content .spans span");
let Actives = document.querySelectorAll(".active");
colorsSpan.forEach((span) => {
    span.addEventListener("click", (e)=>{
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        localStorage.setItem("main-color", e.target.dataset.color);
        handleActive(e);
    })
})
// --------------------------------------------------------------------------------------------------------------------










// --------------------------------------------------------------------------------------------------------------------
// ------------------------------------------change background---------------------------------------------------------

let backgroundBtn = document.querySelectorAll(".setting-box .setting-content .random-backgrounds span");
backgroundBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleActive(e)
        if (e.target.dataset.background === 'yes') {
            backgroundOption = true;
            localStorage.setItem("backgroundOption", true);
            randmize();

        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("backgroundOption", false);

        }
    })
})
randmize();


// --------------------------------------------------------------------------------------------------------------------


// landing page
let landingPage = document.querySelector(".landing-page");

let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

function randmize() {
        if(backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            let random = Math.floor(Math.random() * imgArray.length);
            landingPage.style.backgroundImage = 'url("images/' + imgArray[random] + '")';
        }, 1000);
    }
}
// setInterval(() => {
//     let random = Math.floor(Math.random() * imgArray.length);
//     landingPage.style.backgroundImage = 'url("images/' + imgArray[random] + '")';
// }, 1000);


















// --------------------------------------------------------------------------------------------------------------------

// icon
let Icon = document.querySelector(".setting-box .icon-holder");
let settingBox = document.querySelector(".setting-box");

Icon.onclick = function () {
    settingBox.classList.toggle("open");
}

document.onkeyup = function (e) {
    if (e.key === "Escape") {
        settingBox.classList.remove("open")
    }
}

// --------------------------------------------------------------------------------------------------------------------



// --------------------------------------------------------------------------------------------------------------------

// skills

let section = document.querySelector(".skills");
let skillsSpan = document.querySelectorAll(".skills .skill-box span");

window.onscroll = function () {
    if (window.scrollY > section.offsetTop-100) {
        skillsSpan.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}
// --------------------------------------------------------------------------------------------------------------------
// -----------------------------------------popup gallery -------------------------------------------------------------


let Gallery = document.querySelectorAll(".gallery .images img");
Gallery.forEach((img) => {
    img.addEventListener("click", (e) => {
        // create overlay
        let Overlay = document.createElement("div");
        // add class to overlay
        Overlay.className = "popup-overlay";
        // add overlay to body
        document.body.appendChild(Overlay);
        // create popup box
        let popupBox = document.createElement("div");
        // add class to popup box
        popupBox.className = "popup-box";
        // add alt 
        if (img.alt !== null) {
            // create heading
            let imgHeading = document.createElement("h3");
            // create text to heading
            let headingText = document.createTextNode(img.alt);
            // append text in heading
            imgHeading.appendChild(headingText);
            // add img heading to popup box
            popupBox.appendChild(imgHeading);
        }
        // create img
        let popupImage = document.createElement("img");
        // set image src
        popupImage.src = img.src;
        // add image to popup box
        popupBox.appendChild(popupImage);
        // add popup box to body
        document.body.appendChild(popupBox);
        
        // create close button
        let closeBtn = document.createElement("span");
        // add text to close btn
        let closeText = document.createTextNode("X");
        // add text to close btn
        closeBtn.appendChild(closeText);
        // add class to btn   
        closeBtn.className=("close-btn");
        // add close to popup box
        popupBox.appendChild(closeBtn); 
    })
})   

document.addEventListener("click", (e) => {
    if (e.target.className == "close-btn") {
        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();
    }
})

// --------------------------------------------------------------------------------------------------------------------
// start nav-bullet  bullet
const allBullet = document.querySelectorAll(".nav-bullet .bullet");

// --------------------------------------------------------------------------------------------------------------------
// start nav-bullet  links
const allLinks = document.querySelectorAll(".landing-page .navigation a");

function toSomeWhere(element) {
    element.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:'smooth'
            })
        })
    })
}
toSomeWhere(allBullet);
toSomeWhere(allLinks)

function handleActive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach((el) => {
        el.classList.remove("active");
    })
    ev.target.classList.add("active")
}
// --------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------SettingBox Bullet-----------------------------------------------------
let navBullet = document.querySelector(".nav-bullet");
let bulletSpan = document.querySelectorAll(".setting-box .setting-content .option-box .bullets-option span");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
    bulletSpan.forEach(span => {
        span.classList.remove("active");
    })
    if (bulletLocalItem === 'block') {
        navBullet.style.display = "block";
        document.querySelector(".option-box .bullets-option .yes").classList.add("active");
    }
    else {
        navBullet.style.display = "none";
        document.querySelector(".option-box .bullets-option .no").classList.add("active");
    }
}

bulletSpan.forEach(span => {
    span.addEventListener("click", (e) => {
        if (span.dataset.display === 'show') {
            navBullet.style.display = "block";
            localStorage.setItem("bullets_option", "block");
        }
        else {
            navBullet.style.display = "none";
            localStorage.setItem("bullets_option", "none");
        }
        handleActive(e)
    })
});
// -------------------------------------------------------------------------
// ------------------------reset all setting---------------
document.querySelector(".setting-box .setting-content .reset").onclick = function () {
    // localStorage.clear();

    localStorage.removeItem("main-color");
    localStorage.removeItem("backgroundOption");
    localStorage.removeItem("bullets_option");
    window.location.reload();
}
// -------------------------------------------------------------------------
let toggleBtn = document.querySelector(".landing-page header .toggle-menu");
let linkList = document.querySelector(".landing-page .navigation ul");
let toggleShow = document.querySelector(".landing-page header .toggle-menu .show");
toggleBtn.onclick = function (e) {
    e.stopPropagation();
    toggleBtn.classList.toggle("show");

    linkList.classList.toggle("open");
}
document.addEventListener("click", (e) => {
    if (e.target !== toggleBtn && e.target!==toggleShow) {
        if (linkList.classList.contains("open")) {
            
            toggleBtn.classList.toggle("show");

            linkList.classList.toggle("open");
        }
    }
})
linkList.onclick = function (e) {
    e.stopPropagation();
}
// toggleBtn.onclick = function (e) {
//     e.stopPropagation();
//     linkList.classList.toggle("open");
//     toggleBtn.classList.toggle("show");
//     if (toggleBtn.classList.contains("show")) {
//         toggleShow.style.display = "none";
//     }
//     else {
//         toggleShow.style.display = "block";
//     }
// }