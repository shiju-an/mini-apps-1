console.log('what is happening in life');

var tdCount = 0;

// fucntion insertChoice (choice) {

// }

function countTdClick () {
  const td = document.querySelectorAll('td');
  console.log(td);
  for (let i = 0; i < td.length; i++) {
    td[i].addEventListener("click", function() {
      console.log('td clicked');
    }
  }

//   td.addEventListener("click", function() {
//     console.log('td clicked');
//     for (let i = 0; i < td.length; i++) {
//       console.log(td[i].innerHTML)
//     }
//   })
// }

countTdClick();
// const structure = document.getElementById("structure");
// structure.addEventListener("click", function() {
//   console.log('clicked');
//   structure.innerHTML = console.log(`Click count:  event.detail`);
// }, false);