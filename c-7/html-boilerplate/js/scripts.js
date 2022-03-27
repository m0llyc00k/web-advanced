// // // console.log("1");

// // // setTimeout( function() {
// // //     console.log("3");
// // // }, 4000);

// // // console.log("2")

// // let button = document.getElementById('GetUsers');
// // button.addEventListener("click", sendUserData);

// // // function sendUserData() {
// // //     var url = "https://reqres.in/api/users";
// // //     var xhr = new XMLHttpRequest();
// // //     xhr.onload = function() {
// // //         if (xhr.status === 201) {
// // //             document.getElementById("Output").innerHTML = xhr.responseText;
// // //             let author = JSON.parse(xhr.responseText);
// // //             let author_list = '';
// // //             for (author of author.data) {
// // //                 author_list = author_list + ' ' + author.name;

// // //             }
// // //         }
// // //         else {
// // //             document.getElementById("Output").innerHTML = "There was an error";
// // //         }

// // //     };
// // //     xhr.open("POST", url, true);
// // //     xhr.send("name=jason"); //data needs to be the 
// // //     //format expected, name=value pairs, json etc.
// // // }


// // function sendUserData() {
// //     var url = "https://reqres.in/api/users";
// //     var xhr = new XMLHttpRequest();
// //     xhr.onload = function() {
// //         if (xhr.status === 201) {
// //             document.getElementById("Output").innerHTML = xhr.responseText;
// //         }
// //         else {
// //             document.getElementById("Output").innerHTML = "There was an error";
// //         }

// //     };
// //     xhr.open("POST", url, true);
// //     xhr.send("name=jason"); //data needs to be the 
// //     // format expected, name=value pairs, json etc.
// // }


// const form = document.getElementById('createUser')
// form.addEventListener("submit", saveUserData);

// function saveUserData(e) {
// 	e.preventDefault();

// 	let url = "https://reqres.in/api/users";
//   let xhr = new XMLHttpRequest();

//   let user = {}; // create an empty object
//   user.name = form.first_name.value + ' ' + form.last_name.value;
// 	console.log(user, JSON.stringify(user));

//   xhr.open("POST", url, true);
// 	xhr.setRequestHeader("Content-Type", "application/json");
// 	xhr.send(JSON.stringify(user));

// 	xhr.onload = function() {
// 		if (xhr.status === 201) {
// 				let resp = JSON.parse(xhr.response);
// 				document.getElementById("Output").innerHTML = "Successfully created id: "+resp.id;
// 		} else {
// 				document.getElementById("Output").innerHTML = "There was an error";
// 		}
// 	}  

// }


let button = document.getElementById('GetUsers');
// // button.addEventListener("click", sendUserData);

// // function sendUserData() {
// // var url = "https://reqres.in/api/users";
// // var xhr = new XMLHttpRequest();
// // xhr.onload = function() {
// //       	if (xhr.status === 201) {
// //       	document.getElementById("Output").innerHTML = xhr.responseText;
// //       	} else {
// //         		document.getElementById("Output").innerHTML = "There was an error";
// //       	}
    		
// // }
// // xhr.open("POST", url, true);
// // xhr.send("name=jason"); //data needs to be the format expected, name=value pairs, json etc.
// // }


button.addEventListener("click", getUserData);

function getUserData() {

  var url = "https://reqres.in/api/users";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

xhr.onerror = function() {
		document.getElementById("Output").innerHTML = "There was an error";
}

xhr.onprogress = function(event) {
        console.log(event.loaded, event.total);
		document.getElementById("Output").innerHTML = "In progress";
}

  xhr.onload = function() {
      	if (xhr.status === 200) {
  		 let authors = JSON.parse(xhr.responseText); 
          const ul = document.createElement('ul');

          for ( let author of authors.data ) {
            let li = document.createElement('li');
            let img = document.createElement('img');
            let span = document.createElement('span');

            img.src = author.avatar;
            span.innerHTML = author.first_name + ' ' +  author.last_name;
            li.appendChild(img);
            li.appendChild(span);
            ul.appendChild(li);
          }
          document.body.appendChild(ul);

      	} else {
    			document.getElementById("Output").innerHTML = "There was an error";
      	}
  }

  xhr.send();
}

function printString(string, callback){
  const delay = Math.floor(Math.random() * 1000) + 1;
  setTimeout( function() {
      console.log(string, delay);
 callback();
    }, 
    delay
  )
}
// in parallel(ish)
// function printAll(){
//   printString("A");
//   printString("B");
//   printString("C");
// }
// in turn
// function printAll(){
//   printString("A", function() {
//     printString("B", function() {
//       printString("C", function(){} )
//     })
//   })
// }

// printAll()



try {
  console.log("This code")
  const xx = x + 2;
} catch (exception){
  console.log(exception);
  console.log("The error is" + exception.message);
}
console.log("moving on")