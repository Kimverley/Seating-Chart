let seats = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
];

//global variables
let mode = "assign";
let FirstRow = -1;
let FirstCol = -1;

let grid = document.getElementById("grid");

function SeatingChart() {
  let html = "<table>";

  for (let i = 0; i < seats.length; i++) {
    html += "<tr>";

    for (let j = 0; j < seats[i].length; j++) {
      if (seats[i][j] === "") {
        html += `<td class="empty" onclick="cellClicked(this, ${i}, ${j})">Empty</td>`;
      } else {
        html += `<td class="filled" onclick="cellClicked(this, ${i}, ${j})">${seats[i][j]}</td>`;
      }
    }

    html += "</tr>";
  }

  html += "</table>";

  grid.innerHTML = html;
  SeatingChart();
}

function cellClicked(cell, row, col) {
  let FirstRow = row;
  let FirstCol = col;
  let msg = document.getElementById("message");
  let input = document.getElementById("studentName");

  if (mode === "assign") {
    let name = input.value.trim();

    if (name === "") {
     msg.innerHTML= "Type a name first.";
    }else if(seats[row][col] !== ""){
        msg.innerHTML = "Seat already taken.";
    } else {
       seats[row][col] = name;
       input.value ='';
       msg.innerHTML = "Assigned " + name + " to row " + (row + 1) + ", seat" + (col + 1) + '.';

    } 
    //remove row/col
  } else{
    if(seats[row][col] === ""){
       msg.innerHTML = "Seat is already empty.";
    }
    else{
        let removed = seats[row][col];
       seats[row][col] ='';
       msg.innerHTML = "Removed " + removed + " from row " + (row + 1) + ", seat" + (col + 1) + '.';
    }
  }

  SeatingChart();
}
function assignMode() {
    mode = "assign";
    document.getElementById("modeText").innerHTML="Modes Assign (clicked filled seat)";
    document.getElementById("message").innerHTML="";
    SeatingChart();
}
//function
function removeMode(){
    mode = "remove";
    document.getElementById("modeText").innerHTML="Mode:Remove (clicked filled seat)";
    document.getElementById("modeText").innerHTML="";}

function resetChart(){
  mode = "assign";
FirstRow = -1;
FirstCol = -1;
seats = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
];
SeatingChart();

}
SeatingChart();
