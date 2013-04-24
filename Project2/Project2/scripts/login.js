/* File Created: November 30, 2012 */

/* Function name: saveCSV()
*  Accepts: N/A
*  returns: N/A
*  purpose: 
*/
function initPage() {
    getRef("btnSave").disabled = true;
    

}
/* Function name: toggle()
*  Accepts:obj
*  returns: N/A
*  purpose: 
*/
function toggle(obj) {
    var item = document.getElementById(obj);
    if (item.style.visibility == 'visible') { item.style.visibility = 'hidden'; }
    else { item.style.visibility = 'visible'; }
}
/* Function name: getRef()
*  Accepts: N/A
*  returns: N/A
*  purpose: gets the referenced ID
*/
function getRef(id) {
    return document.getElementById(id);
}

/* Function name: confirmPass()
*  Accepts: N/A
*  returns: N/A
*  purpose: gets the referenced ID
*/
function confirmPass() {

    var pass = getRef("password").value;
    var vpass = getRef("conPword").value;

    if (pass != undefined && vpass != undefined && pass != '' && vpass != '' && pass == vpass) {
        getRef("btnSave").disabled = false;
    }
    else {
        getRef("btnSave").disabled = true;
    }

    
}
/* Function name: disableSocial()
*  Accepts: a reference to the social media section to be disabled
*  returns: N/A
*  purpose: disables the social media.
*/
function disableSocial(ref) {
    ref.disabled = true;
}
/* Function name: unusable()
*  Accepts: N/A
*  returns: N/A
*  purpose: ensures the proper function calls are used.
*/
function unusable() {
    disableSocial(getRef("fb"));
}
/* Function name: register()
*  Accepts: N/A
*  returns: N/A
*  purpose: 
*/
function register() {
    document.getElementById("fb").disabled = true;

}

//defining some variables

var hostPage = "login.aspx/";
var TBLROWS = 20;
var TBLCOLUMNS = 10;
var glbData = "";

/* Function name: saveCSV()
*  Accepts: N/A
*  returns: N/A
*  purpose: 
*/
function loadCSV() {
    callAJAX("LoadCSV", document.getElementById("username").value);
}

/* Function name: saveCSV()
*  Accepts: N/A
*  returns: N/A
*  purpose: 
*/

function saveCSV() {
    if (glbData != "")
        callAJAX("SaveCSV", document.getElementById("username").value + "~" + glbData);
}

/* Function name: callAjax()
*  Accepts: requestMethod, clientRequest
*  returns: N/A
*  purpose: 
*/
function callAJAX(requestMethod, clientRequest) {
    var pageMethod = hostPage + requestMethod;

    $.ajax({
        url: pageMethod,   // Current Page, Method  
        data: JSON.stringify({ request: clientRequest }), // parameter map as JSON  
        type: "POST", // data has to be POSTed  
        contentType: "application/json", // posting JSON content      
        dataType: "JSON",  // type of data is JSON (must be upper case!)  
        timeout: 60000,    // AJAX timeout  
        success: function (result) {
            ajaxCallback(result.d);
        },
        error: function (xhr, status) {
            alert(status + " - " + xhr.responseText);
        }
    });
}

/* Function name: ajaxCallback()
*  Accepts: serverResponse
*  returns: N/A
*  purpose: 
*/
function ajaxCallback(serverResponse) {
    resultArray = serverResponse.split('~');

    if (resultArray[0] == "SaveCSV")
        alert("CSV data saved");    // this is just a verification of the save
    else
        parseCSV(resultArray[1]);    // this is all the csv data from the file
}

/* Function name: parseCSV()
*  Accepts: N/A
*  returns: N/A
*  purpose: 
*/
function parseCSV(data) {
    // create a 2D array
    var twoDArray = [];

    for (var i = 0; i < TBLROWS; i++) {
        twoDArray[i] = [];
        for (var j = 0; j < TBLCOLUMNS; j++)
            twoDArray[i][j] = "";
    }

    // separate out the rows
    var rowArray = data.split('|');

    for (var i = 0; i < rowArray.length; i++) {
        // separate out columns and then
        // insert each value in the correct cell
        var columnArray = rowArray[i].split(',');
        for (var j = 0; j < columnArray.length; j++)
            twoDArray[i][j] = columnArray[j];
    }

    // save the data into a global variable
    // to be used with the Save request
    glbData = data;

    alert(data);
}