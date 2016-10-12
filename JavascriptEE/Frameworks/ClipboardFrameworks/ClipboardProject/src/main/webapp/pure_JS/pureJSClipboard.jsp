<%--
  Created by IntelliJ IDEA.
  User: aponyk
  Date: 11.10.2016
  Time: 18:00
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<textarea id="text-to-copy"></textarea>
<button id="copy-button">Copy text</button>
<script>

    function copyToClipboard(text) {
        if (window.clipboardData && window.clipboardData.setData) {
            // IE specific code path to prevent textarea being shown while dialog is visible.
            return clipboardData.setData("Text", text);

        } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
            var textarea = document.createElement("textarea");
            textarea.textContent = text;
            textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
            document.body.appendChild(textarea);
            textarea.select();
            try {
                return document.execCommand("copy");  // Security exception may be thrown by some browsers.
            } catch (ex) {
                console.warn("Copy to clipboard failed.", ex);
                return false;
            } finally {
                document.body.removeChild(textarea);
            }
        }
    };

    function generateRandomString(n){
        var res = "";
        for(var i =0;i<n;i++){
            res += "a";
        }
        return res;
    }

    document.querySelector("#copy-button").addEventListener("mousedown", function(){
        var longText = generateRandomString(100000);
        copyToClipboard(longText);
        //copyToClipboard(document.querySelector("#text-to-copy").value)
    })
</script>
</body>
</html>
