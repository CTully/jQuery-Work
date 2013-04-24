<!--Date Due: Friday December 13th 2012
    Author: Chris Tully
    Purpose: A simple password/ social media website
-->

<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="Project2.login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Project 2  page</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <link href="styles/login.css" rel="stylesheet" type="text/css" />
    <script src="scripts/login.js" type="text/javascript"></script>
    <script src="scripts/jquery-1.7.1.js" type="text/javascript"></script>
</head>
<body onload="initPage();">
    <form id="form1" runat="server">
    <div id="header">
    <h1>Project Site</h1>
    <p>Already a registered user? Sign in with one of the following services:</p>
    <a id="fb" href="#"><img id="fb" src="images/FacebookShadow.ico" onmouseover="src='images/FacebookSelected.ico'" onmouseout="src='images/FacebookShadow.ico'" alt="facebook"/></a>
    <img id="google" src="images/GoogleShadow.ico" onmouseover="src='images/GoogleSelected.ico'" onmouseout="src='images/GoogleShadow.ico'" alt="google"/>
    <img id="win" src="images/WinLiveShadow.ico" onmouseover="src='images/WinLiveSelected.ico'" onmouseout="src='images/WinLiveShadow.ico'" alt="winlive"/>
    <img id="yahoo" src="images/YahooShadow.ico" onmouseover="src='images/YahooSelected.ico'" onmouseout="src='images/YahooShadow.ico'" alt="yahoo"/>

    <p>Sign in with your Project Site username and password</p>
    <p>Add another authentication service from the list above</p>
    <p>Change your password</p>

    <p>If you haven't already registered with Project Site</p>
    
    <input type="button" value="register now" id="register" onmousedown="toggle('reg');" onclick="register();"/>
        
    </div>
    
    <div id='reg' style="visibility: hidden;">
    <p>You must register to use this site</p>
    <div id="signup">
    <label for="username">Username: </label> <br />
    <input type="text" id="username" value="" style="width:250px"/>
    <br />
    <label for="password">Password: </label><br />
    <input type="password" id="password" style="width:250px" onkeyup="javascript:confirmPass();" />
    <br />
    <label for="conPword">ConfirmPassword: *</label><br />
    <input type="password" id="vpassword" style="width:250px" onkeyup="javascript:confirmPass();" />
    <br /><br />
     <input id="btnSave" type="button" value="Save CSV" onclick="saveCSV();" /><input type="reset" value="cancel" />
    <br />
    <p>Finish your registration by signing in with one of the services above or save your registration directly.</p>
    </div>
    </div>	

    </form>
</body>
</html>
