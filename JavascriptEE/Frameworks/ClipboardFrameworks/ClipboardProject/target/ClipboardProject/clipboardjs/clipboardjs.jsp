<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script src="clipboard1.5.12.js"></script>
</head>

<body>

    <textarea id="text-to-copy">

    </textarea>
    <button id="copy">Copy text from textarea</button>

    <script>
        var clipboard = new Clipboard('#copy', {
            text: function(trigger){
                return document.querySelector("#text-to-copy").value;
            }
        });

    </script>
</body>
</html>
