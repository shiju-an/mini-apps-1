console.log('what is happening in life');

const td = document.querySelectorAll('td');
const cells = document.querySelectorAll('#id, .cells');
const rows = document.querySelectorAll('tr');
const winCombos = [
  [cells[0], cells[1], cells[2]],
  [cells[3], cells[4], cells[5]],
  [cells[6], cells[7], cells[8]],
  [cells[0], cells[3], cells[6]],
  [cells[1], cells[4], cells[7]],
  [cells[2], cells[5], cells[8]],
  [cells[0], cells[4], cells[8]],
  [cells[2], cells[4], cells[6]]
];
let tdCount = 0;



for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    tdCount++;
    if (cells[i].innerText === 'X' || cells[i].innerText === 'O') {
      tdCount--;
      return;
    } else {
      changeValue();
    };
  });

  function changeXValue() {
    cells[i].innerHTML = 'X';
  }

  function changeOValue() {
    cells[i].innerHTML = 'O';
  }

  function changeValue() {
    if (tdCount % 2 === 1) {
      cells[i].onclick =
        changeXValue();
    }

    if (tdCount % 2 === 0) {
      cells[i].onclick =
        changeOValue();
    }
  }

  function checkWin() {
    for (let win = 0; win < winCombos.length; win++) {
      for (let innerCell = 0; innerCell < winCombos[win].length; innerCell++) {
        if (winCombos[win][innerCell].innerHTML === 'X') {
          alert('X wins');
          return
        }
      }
    }
  }

}

  console.log(tdCount, 'global'); //not updating why? ;/