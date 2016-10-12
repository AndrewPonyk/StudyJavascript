<%--
  Created by IntelliJ IDEA.
  User: aponyk
  Date: 11.10.2016
  Time: 12:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script src="lgarron_clipboardjs.js"></script>
</head>
<body>
Using modified clipboard.js  from lgarron user
https://www.npmjs.com/package/clipboard-js
https://github.com/lgarron/clipboard.js/blob/master/clipboard.js
<textarea id="textarea-text"></textarea>
<button id="copy-text"> Click to copy text '123 and current date' to clipboard</button>
<script>
    document.querySelector("#copy-text").addEventListener("mousedown", function(){
        clipboard.copy(document.querySelector("#textarea-text").value + new Date());
    })
</script>
</body>
</html>
