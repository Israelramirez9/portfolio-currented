// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//CLICK ON THE PROJECTS

const projects = [{
    img: "img1",
    iconsContainer: "p1",
    cont: 0
},
{
    img: "img2",
    iconsContainer: "p2",
    cont: 0
},
{
    img: "img3",
    iconsContainer: "p3",
    cont: 0
},
{
    img: "img4",
    iconsContainer: "p4",
    cont: 0
},
{
    img: "img5",
    iconsContainer: "p5",
    cont: 0
},
{
    img: "img6",
    iconsContainer: "p6",
    cont: 0
},
]

projects.forEach((obj) => {
    const ImgElement = document.getElementById(obj.img);
    const IconsContainer = document.getElementById(obj.iconsContainer);
    ImgElement.addEventListener("click", () => {
        obj.cont++;
        if (obj.cont % 2 !== 0) {
            ImgElement.style.opacity=0.2;
            IconsContainer.style.display="block";
            IconsContainer.style.opacity=1;
        }else{
            ImgElement.style.opacity=1;
            IconsContainer.style.display="none";            
        }
    })
}
)