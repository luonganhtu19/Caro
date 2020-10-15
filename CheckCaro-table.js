// Create table Caro
let turn = 1;
let arr = '';
let turn1 = new Array();
let turn2 = new Array();
var row = 0;
var col = 0;
var strRow = [];
var strCol = [];

function createTable() {
    let str = '';

    row = +document.getElementById("row").value;
    col = +document.getElementById("col").value;
    for (let i = 0; i < row; i++) {
        str = str + "<tr>";
        for (let j = 0; j < col; j++) {
            str += "<td  onclick='clickCell(this)'>" + "</td>";
        }
        str += "</tr>";
    }
    document.getElementById('board').innerHTML = str;
    // alert(turn1);

}

createTable();

function clickCell(cell) {
    let td = cell.value;
    //alert(i);
    //cell.id
    if (cell.innerHTML != '') {
        return;
    }
    if (turn == 1) {
        cell.innerHTML = "x";
        turn = 2;
        arr;
    } else {
        cell.innerHTML = "o";
        turn = 1;
        // arr[i][j]=this.innerHTML;
    }
    data();
    setTimeout(checkWin, 10);
}

///check cac phan tu trong bang
function data() {

    let myTab = document.getElementById("board")
    let a = myTab.rows.length;
    row = +document.getElementById("row").value;
    col = +document.getElementById("col").value;
    //alert(a);
    for (i = 0; i < row; i++) {

        // GET THE CELLS COLLECTION OF THE CURRENT ROW.
        var objCells = myTab.rows.item(i).cells;

        // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
        for (var j = 0; j < col; j++) {
            strCol[j] = objCells.item(j).innerHTML;
        }
        strRow[i] = strCol;
        strCol = [];
        //
        //alert(strRow);
    }

}

/// check win

function checkWin() {

    let count = 0;
    row = +document.getElementById("row").value;
    col = +document.getElementById("col").value;
    console.log(row)
    console.log(col)
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            // xet ngang thang
            if (strRow[i][j] === undefined) {
                break;
            } else if (strRow[i][j] == "x") {
                for (let k = j; k < col; k++) {
                    if (strRow[i][k] == "x") {
                        count++ //
                        //alert("count b2" +count)
                    } else {
                        break;
                    }
                    if (count == 5) {
                        count = 0;
                        alert("Turn 1 win 98B1");
                        return;
                    }
                }
                if (count == 5) {
                    count = 0;
                    alert("Turn 1 win 98B1");
                    return;
                } else {
                    count = 0
                }

                for (let k = i; k < row; k++) {
                    if (strRow[k][j] == "x") {
                        console.log(count)
                        count++;
                        //alert("k "+k+ "j: "+j)
                        //alert(count+" count b2")
                    } else {
                        break;
                    }
                    if (count == 5) {
                        alert("Turn 1 win 110b2")
                        count = 0;
                        return;
                    }
                }
                if (count == 5) {
                    alert("Turn 1 win 110b2")
                    count = 0;
                    return;
                } else {
                    count = 0;
                }

                for (let k = 0; k + j < col && k + i < row; k++) {
                    if (strRow[i + k][j + k] == "x") {
                        count++;
                    } else {
                        break;
                    }
                    if (count == 5) {
                        alert("Turn 1 win 123b3")
                        count = 0;
                        return;
                    }
                }
                if (count == 5) {
                    alert("Turn 1 win 110b2")
                    count = 0;
                    return;
                } else {
                    count = 0;
                }

                for (let k = 0; k + i < row && j - k >= 0; k++) {
                    if (strRow[i + k][j - k] == "x") {
                        count++;
                    } else {
                        break;
                    }
                    if (count == 5) {
                        alert("Turn 1 win 123b3")
                        count = 0;
                        return;
                    }
                }
                if (count == 5) {
                    alert("Turn 1 win 110b2")
                    count = 0;
                    return;
                } else {
                    count = 0;
                }
            } else {
                //alert("count"+count)
                for (let k = j; k < col; k++) {
                    if (strRow[i][k] == "o") {
                        count++ //
                        //alert("count b2" +count)
                    } else {
                        break;
                    }
                    if (count == 5) {
                        count = 0;
                        alert("Turn 2 win 98B1");
                        return;
                    }
                }
                if (count == 5) {
                    count = 0;
                    alert("Turn 2 win 98B1");
                    return;
                } else {
                    count = 0
                }

                for (let k = i; k < row; k++) {
                    if (strRow[k][j] == "o") {
                        console.log(count)
                        count++;
                        //alert("k "+k+ "j: "+j)
                        //alert(count+" count b2")
                    } else {
                        break;
                    }
                    if (count == 5) {
                        alert("Turn 2 win 110b2")
                        count = 0;
                        return;
                    }
                }
                if (count == 5) {
                    alert("Turn 2 win 110b2")
                    count = 0;
                    return;
                } else {
                    count = 0;
                }

                for (let k = 0; k + j < col && k + i < row; k++) {
                    if (strRow[i + k][j + k] == "o") {
                        count++;
                    } else {
                        break;
                    }
                    if (count == 5) {
                        alert("Turn 2 win 123b3")
                        count = 0;
                        return;
                    }
                }
                if (count == 5) {
                    alert("Turn 2 win 110b2")
                    count = 0;
                    return;
                } else {
                    count = 0;
                }
                for (let k = 0; k + i < row && j - k >= 0; k++) {
                    if (strRow[i + k][j - k] == "o") {
                        count++;
                    } else {
                        break;
                    }
                    if (count == 5) {
                        alert("Turn 2 win 123b3")
                        count = 0;
                        return;
                    }
                }
                if (count == 5) {
                    alert("Turn 2 win 110b2")
                    count = 0;
                    return;
                } else {
                    count = 0;
                }
            }

        }
    }
}



