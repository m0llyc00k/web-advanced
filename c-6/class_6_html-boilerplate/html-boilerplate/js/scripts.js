// //go to network to debug

const f = document.getElementById('searchForm');



// //type this in the console to find the form
// document.forms.search

// // document.getElementByName();

const inp = document.getElementById('SearchBox');

// const sel = f.elements.searchType;

// // f.submit(); // hard submit the form

// // f.reset(); //allows you to reset your data, should not really use this


// ////the below is to check data and validate, i.e. to make sure all fields are filled out

// inp.addEventListener('focus', function() {
//     console.log("focused on", this.name)
// }); // helps you to focus on area and get word count or something (click on something, focus is triggered)

// inp.addEventListener('blur', function() {
//     console.log("leaving", this.name)
// });

// inp.addEventListener('change', function() {
//     console.log("leaving after changing", this.name)
// }); //triggered when you make a change (you enter info into a field and click off, form has been changed)


f.addEventListener('submit', function(ev) {
    ev.preventDefault();
    console.log("submitting form", this.name);
    if (inp.value == '') {
    // alert('search box cannot be empty')
    const para = document.createElement('p');
    const searchBar = document.getElementById('SearchBox');
    para.classList.add('error');
    para.textContent = 'cannot submit with empty field';
    inp.after(para)

}
}); //triggered when form is submitted


// // let input_pass = this.elements.SearchPass;



// // Password field values:
// let input_pass = form.elements.SearchPass.value;
// // Checkbox values:
// ///this will show which boxes are checked in the dom
// ////checked boxes turn to .checked in the dom when clicked

// let input_area = form.elements.searchArea;
// const form_area_vals = [];
// for (i=0; i < input_area.length; i++) {
//   if (input_area[i].checked) {
//     form_area_vals.push(input_area[i].value);
// }};
///////alternative
// const form_area_vals = Array.from(input_area) // takes from a list and turns into an array
// .filter(function(input_area) { 
//   return input_area.checked
// }) //this makes a new filter that makes an array of matching values
// .map( function(item) { 
// return item.value
// }) //this will map each element of the array and then you can do something with this, in this case all i want is the valies so it returns that back to you


//create