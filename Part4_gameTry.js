// resart Game Button
var restart = document.querySelector("#b");

// Grab all the squares
var squares = document.querySelectorAll("td");

// Clear all the squares
function clearBoard(){
    for (var i = 0; i <squares.length; i++){
        squares[i].textContent = "";
    }
}

restart.addEventListener("click", clearBoard);

// 只對某一格
// var cellOne = document.querySelector("#one")

// cellOne.addEventListener("click", function(){
//     if(cellOne.textContent === ""){
//         cellOne.textContent = "X";
//     }else if(cellOne.textContent ==="X"){
//         cellOne.textContent = "O";
//     }else{
//         cellOne.textContent ="";
//     }
// })

// 變動的內容。
function changeMarker(){
    if (this.textContent === ""){
        this.textContent = "X";
    }else if (this.textContent === "X"){
        this.textContent = "O";
    }else{
        this.textContent = "";
    }
}
// 針對每一個格子增加clikc事件。
for (var i = 0; i<squares.length ;i++){
    squares[i].addEventListener("click", changeMarker)
}
