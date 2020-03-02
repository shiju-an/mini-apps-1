console.log('what is happening in life');


// fucntion insertChoice (choice) {

// }

const td = document.querySelectorAll('td');
const table = document.querySelector('table');
let tdCount = 0;

// function countTdClick() {
//   console.log(td);
//   // for (let i = 0; i < td.length; i++) {
//   //   td[i].addEventListener("click", function () {
//   //     console.log('td clicked');
//   //     tdCount++;
//   //     console.log(tdCount,'inner');
//   //   });
//   // }


// }

// table.addEventListener("click", function() {
//   console.log('table clicked');
//   tdCount ++;
//   console.log(tdCount, 'inner');
// })

console.log(tdCount, 'global');

for (let i = 0; i < td.length; i++) {
  td[i].addEventListener("click", function () {
    console.log('td clicked');
    tdCount++;
    changeValue();
  }, false);
}

  function changeValue() {
    for (let i = 0; i < td.length; i++) {
      if (tdCount % 2 === 1) {
        td[i].onclick = function changeXValue() {
          td[i].innerHTML = 'X';
        }
      }

      if (tdCount % 2 === 0) {
        td[i].onclick = function changeOValue() {
          td[i].innerHTML = 'O';
        }
      }
    }
  }

//   td.addEventListener("click", function() {
//     console.log('td clicked');
//     for (let i = 0; i < td.length; i++) {
//       console.log(td[i].innerHTML)
//     }
//   })
// }

// countTdClick();
// const structure = document.getElementById("structure");
// structure.addEventListener("click", function() {
//   console.log('clicked');
//   structure.innerHTML = console.log(`Click count:  event.detail`);
// }, false);



// count main clicks
// if odd = X
// if even  O

``