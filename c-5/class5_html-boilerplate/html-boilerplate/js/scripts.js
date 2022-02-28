//1. Update the style attribute of the first `<p>` tag on the page to have a different color, size or family.

const an = document.getElementsByTagName('a')[1];

an.addEventListener("click", function(e) {
    console.log("click")
});
an.addEventListener("mousedown", function(e) {
    console.log("down")
});
an.addEventListener("mouseup", function(e) {
    console.log("up")
});
an.addEventListener("mouseover", function(e) {
    console.log("over")
});
an.addEventListener("mouseout", function(e) {
    console.log("out")
});


const clickFunction = function(e) {
    console.log(e.type); // e contains all properties of the event that occurs
}
an.addEventListener("click",
    clickFunction);

// blocks click from happening
an.addEventListener("click", function(e) {
    console.log("click");
    e.preventDefault();
});

const para = an.parentNode;

para.addEventListener("click", function(e) {
    console.log("click");
    e.preventDefault();
    //To stop propagation:
    e.stopPropagation()
});


//change the styles 


const firstPara = document.getElementsByTagName('p')[0]

para.style.backgroundColor = "#d3d3d3"

para.style.color = "blue"

para.style.fontFamily = "monospace"

para.style.fontSize = "24px"


// 2. Add a new `<p>` element right below the first one.

 

// 3.  Extend the existing table with a few additional rows (tr and td) in the html. 
//Then write code to select the table rows and build a loop to assign alternative colors to the rows.

 

// 3. Write code that inserts an image and inserts it inside the `<section>` tag. 
// Use this url for the image: https://source.unsplash.com/random

 

// 4. Write code that, on click of a button ('click' eventListener), can randomly fetch an image from a list (or a url) 
//and insert it inside a section tag.