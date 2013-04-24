// Example of using Dynamic HTML to build a spreadsheet table

var isIE = ((window.navigator.appVersion).indexOf("MSIE") != -1);
var isChrome = ((window.navigator.appVersion).indexOf("Chrome") != -1);
var isFF = ((window.navigator.appVersion).indexOf("Mozilla") != -1);

// ********************
// button event handler
function createSpreadsheet() {
    //  var rows = parseInt(document.getElementById("txtRows").value);
    // var columns = parseInt(document.getElementById("txtColumns").value);
    var rows = 10;
    var columns = 20;

    document.getElementById("SpreadsheetTable").innerHTML = buildTable(rows, columns);
}

// ***************************************************
// function builds the table based on rows and columns
function buildTable(rows, columns) {
    // start with the table declaration
    var divHTML = "<table border='1' cellpadding='0' cellspacing='0' class='TableClass'>";

    // next do the column header labels
    divHTML += "<tr><th></th>";

    for (var j = 0; j < columns; j++)
        divHTML += "<th>" + String.fromCharCode(j + 65) + "</th>";

    // now do the main table area
    for (var i = 1; i <= rows; i++) {
        divHTML += "<tr>";
        // ...first column of the current row (row label)
        divHTML += "<td id='" + i + "_0' class='BaseColumn'>" + i + "</td>";

        // ... the rest of the columns
        for (var j = 1; j <= columns; j++)
            divHTML += "<td id='" + i + "_" + j + "' class='AlphaColumn' onclick='clickCell(this)'></td>";

        // ...end of row
        divHTML += "</tr>";
    }

    // finally add the end of table tag
    divHTML += "</table>";

    return divHTML;
}

// *******************************************
// event handler fires when user clicks a cell
function clickCell(ref) {
    var rcArray = ref.id.split('_');
    alert("You selected row " + rcArray[0] + " and column " + rcArray[1]);
}

// *********************************************************
// Cross browser code to filter data entry on numeric fields
function editTextNum(ref) {
    if (window.event.keyCode == 13) {
        if (isIE)
            window.event.keyCode = null;
        else
            window.event.returnValue = null;

        // user pressed enter... do something
        // ref parameter is a pointer to the field
        // being edited
    }
    else {
        if (isIE) {
            if (!charOK(window.event.keyCode))
                window.event.keyCode = null;
        }
        else {
            if (!charOK(window.event.keyCode))
                window.event.returnValue = null;
        }
    }
}

// *************************************************************
// filter the currently entered character to see that it is part
// of the acceptable numeric (integer) character set
function charOK(c) {
    var ch = (String.fromCharCode(c));
    ch = ch.toUpperCase();

    if ("0123456789".indexOf(ch) != -1)
        return true;
    else
        return false;
}