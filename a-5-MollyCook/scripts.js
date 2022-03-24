///1. Update the style attribute of the first `<p>` tag on the page to have a different color, size or family.


const firstPara = document.getElementsByTagName('p')[0]

firstPara.style.backgroundColor = "#d3d3d3"

firstPara.style.color = "blue"

firstPara.style.fontFamily = "monospace"

firstPara.style.fontSize = "24px"


/// 2. Add a new `<p>` element right below the first one.

const newPara =
    document.createElement('p');
newPara.textContent = "This is an additional paragraph";
// document.body.appendChild(newPara)

const sect = document.getElementsByTagName('section')[0];
const title = sect.getElementsByTagName('p')[1];
sect.insertBefore(newPara, title);

/// 3.  Extend the existing table with a few additional rows (tr and td) in the html. 
///Then write code to select the table rows and build a loop to assign alternative colors to the rows.

//Select tbody, create new table element
const table = document.querySelector('tbody');
const newTable = document.createElement('tr');

// Insert rows into new tr tag
newTable.innerHTML += `<td> Row 2 <b> Cell 3 </b> </td> <td> Row 2 <em>Cell 4</em></td>`;

//insert table
table.insertBefore(newTable, table[0]);

//Identify each row
const allRows = document.getElementsByTagName('td');

//change color of row text with random colors
for (let i = 0; i < allRows.length; i++) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    allRows[i].style.color = '#' + randomColor;
}



/// 4. Write code that inserts an image and inserts it inside the `<section>` tag. 
/// Use this url for the image: https://source.unsplash.com/random

//create new image tag
const newImage = document.createElement('img');
//change the source and size of the image
newImage.src = 'https://source.unsplash.com/random';
newImage.width = 300;
//insert the image within the section tag
sect.insertBefore(newImage, title);

/// 5. Write code that, on click of a button ('click' eventListener), can randomly fetch an image from a list (or a url) 
///and insert it inside a section tag.

//create a break between the image and button
const brk = document.createElement('br');
sect.insertBefore(brk, title);
//create a button and insert text
const button = document.createElement('button');
button.textContent = 'Click to change the image!';
//add event listener to change the image on click
button.addEventListener('click', function() {
    newImage.src = ['https://picsum.photos/200/300?random=1'];
    alert('hey')
});
// insert the button in the section tag
sect.insertBefore(button, title);
