// Write a JavaScript function that creates a table, accept row, column numbers from the user, and input row-column number as content (e.g. Row-0 Column-0) of a cell.

function createTable() {
    var row = parseInt(document.getElementById("row").value);
    var col = parseInt(document.getElementById("col").value);
    var i, j;
    var x = document.getElementById("myTable");
    var y = x.insertRow(0);
    for (i = 0; i < row; i++) {
        var row = x.insertRow(i);
        for (j = 0; j < col; j++) {
            var cell = row.insertCell(j);
            cell.innerHTML = "Row-" + i + " Column-" + j;
        }
    }
}

createTable();