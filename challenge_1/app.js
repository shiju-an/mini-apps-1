console.log('what is happening in life');

const td = document.querySelectorAll('td');
let tdCount = 0;

for (let i = 0; i < td.length; i++) {
  td[i].addEventListener("click", function () {
    tdCount++;
    if (td[i].innerText === 'X' || td[i].innerText === 'O') {
      return;
    } else {
      changeValue();
    }
  });

  function changeXValue() {
    td[i].innerHTML = 'X';
  }

  function changeOValue() {
    td[i].innerHTML = 'O';
  }

  function changeValue() {
    if (tdCount % 2 === 1) {
      td[i].onclick =
        changeXValue();
    }

    if (tdCount % 2 === 0) {
      td[i].onclick =
        changeOValue();
    }
  }


}

console.log(tdCount, 'global'); //not updating why? ;/