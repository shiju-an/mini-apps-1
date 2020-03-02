console.log('what is happening in life');

const td = document.querySelectorAll('td');
let tdCount = 0;

for (let i = 0; i < td.length; i++) {
  td[i].addEventListener("click", function () {
    // console.log('td clicked');
    // tdCount++;
    tdCount ++;
    changeValue();
  });

function changeXValue() {
  td[i].innerHTML = 'X';
  // tdCount ++;
}

function changeOValue() {
  td[i].innerHTML = 'O';
  // tdCount ++;
}

function changeValue() {
  // for (let i = 0; i < td.length; i++) {
    if (tdCount % 2 === 1) {
      td[i].onclick =
      // function changeXValue() {
      //   td[i].innerHTML = 'X';
      //   tdCount ++;
      // }
      changeXValue();
    }

    if (tdCount % 2 === 0) {
      td[i].onclick =
      // function changeOValue() {
      //   td[i].innerHTML = 'O';
      //   tdCount ++;
      // }
      changeOValue();
    // }
  }
}
}
console.log(tdCount, 'global');


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