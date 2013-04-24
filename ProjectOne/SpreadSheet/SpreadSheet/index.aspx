<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="SpreadSheet.index" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
     <link rel="stylesheet" type="text/css" href="StyleSheet/mainStyle.css"/>
    <script language="JavaScript" type="text/javascript" src="Scripts/mainScript.js"></script>
</head>
<body onload="createSpreadsheet();">
    <form id="form1" runat="server">
    
        <br />
       <input type="text" id="formulaField" />
        <br />
        <div id="SpreadsheetTable">
        </div>
    </form>
</body>
</html>
