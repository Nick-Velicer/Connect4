
//general board reset to be called at the beginning of the game and whenever a player wins
let x = ["1", "2", "3", "4", "5", "6", "7"];
let y = ["1", "2", "3", "4", "5", "6"];
let coord = "";

function initialize() {
	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 7; j++) {
			coord = x[j] + y[i];
			//only doing the weird stuff with the array of strings bc of a weird error when trying to use toString on the iterators
			document.getElementById(coord).style.color = "white"
			document.getElementById("turn").innerHTML = "Red's Turn";
		}
	}
}
	



//event handlers for each player choosing a column
document.getElementById("col1").onclick = function() {c1(column1)};
document.getElementById("col2").onclick = function() {c1(column2)};
document.getElementById("col3").onclick = function() {c1(column3)};
document.getElementById("col4").onclick = function() {c1(column4)};
document.getElementById("col5").onclick = function() {c1(column5)};
document.getElementById("col6").onclick = function() {c1(column6)};
document.getElementById("col7").onclick = function() {c1(column7)};

//coordinate system for the board
let column1 = ["11", "12", "13", "14", "15", "16"];
let column2 = ["21", "22", "23", "24", "25", "26"];
let column3 = ["31", "32", "33", "34", "35", "36"];
let column4 = ["41", "42", "43", "44", "45", "46"];
let column5 = ["51", "52", "53", "54", "55", "56"];
let column6 = ["61", "62", "63", "64", "65", "66"];
let column7 = ["71", "72", "73", "74", "75", "76"];

let turn = 0;
//0 for red, 1 for yellow, turn = !turn at each button press


//places each piece and shifts the eligible spot in each column up by one, passes the point on to check if it has caused a win
function c1(column) {
	for (var i = 0; i < 6; i++) {
		if (document.getElementById(column[i]).style.color = "white") {
			if (!turn) {	
				document.getElementById(column[i]).style.color = "red";
				document.getElementById("turn").innerHTML = "Yellow's Turn";
				winCheck(column[i]);
				column.shift();
				turn = !turn;
			}
			else {
				document.getElementById(column[i]).style.color = "yellow";
				document.getElementById("turn").innerHTML = "Red's Turn";
				winCheck(column[i]);
				column.shift();
				turn = !turn;
			}
			break;	
		}
	}
	if (column1.length == 0 && column2.length == 0 && column3.length == 0 && column4.length == 0 && column5.length == 0 && column6.length == 0 && column7.length == 0) {
		alert("No more available moves!");
		initialize();
	}
}

//Checks for a win in each direction at the point given
function winCheck(coord) {
	
	if (!turn) {
		console.log("\nRed Move");
	}
	else {
		console.log("\nYellow Move");
	}
	
	//checking horizontally '-'
	sequentialChecker(coord, [-30, -20, -10, 0, 10, 20, 30]);
	
	//checking vertically '|'
	sequentialChecker(coord, [-3, -2, -1, 0, 1, 2, 3]);
	
	
	//checking diagonally '\'
	sequentialChecker(coord, [-27, -18, -9, 0, 9, 18, 27]);
	
	
	//checking diagonally '/'
	sequentialChecker(coord, [-33, -22, -11, 0, 11, 22, 33]);
}


//checks for a sequence of four in a row at a point given an offset (number to be added/subtracted to return a new point horizontal, vertical, or diagonal)
function sequentialChecker(point, offset) {
	holder = parseInt(point);
	let testArr = [0, 0, 0, 1, 0, 0, 0];
	if (!turn) {
		for (var i = 0; i < 7; i++) {
			let diag_comp = holder + offset[i];
			if (document.getElementById(diag_comp) != null) {
				if (document.getElementById(diag_comp).style.color == "red") {
					testArr[i] = 1;
					console.log(testArr);
				}
			}
		}
		for (var i = 0; i < 4; i++) {
			if (testArr[i] == 1 && testArr[i+1] == 1 && testArr[i+2] == 1 && testArr[i+3] == 1) {
				alert("Red Wins!");
				initialize();
				break;
			}
		}		
	}
	else {
		for (var i = 0; i < 7; i++) {
			let diag_comp = holder + offset[i];
			if (document.getElementById(diag_comp) != null) {
				if (document.getElementById(diag_comp).style.color == "yellow") {
					testArr[i] = 1;
					console.log(testArr);
				}
			}
		}
		for (var i = 0; i < 4; i++) {
			if (testArr[i] == 1 && testArr[i+1] == 1 && testArr[i+2] == 1 && testArr[i+3] == 1) {
				alert("Yellow Wins!");
				initialize();
				break;
			}
		}		
	}
}
	
initialize();
		
		
		
		