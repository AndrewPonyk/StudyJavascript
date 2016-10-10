<html>
<head>
    <script type="text/javascript" src="ZeroClipboard.min.js"></script>
</head>
<body>
<h2>Hello World!</h2>
<button id="d_clip_button">Copy text from text area</button>
<textarea id="text-to-copy"></textarea>

<script>
    var cLip = new ZeroClipboard.Client();
    cLip.setText( "Copy me! " + new Date());


    cLip.addEventListener('onMouseDown', function(client) {
        // elements must be present on the page at this moment!!!
        cLip.setText(document.querySelector("#text-to-copy").value);
        console.log("123");
        console.log(document.querySelector("#text-to-copy").value);
    });

    cLip.glue("d_clip_button");
</script>


<b style="border: 1px solid black;display: block">
    <pre>
    The Flash movie receives the click event and copies the current text (last set with setText())
    to the clipboard (a requirement of Flash Player 10 is that a user click event inside the
    movie must initiate the thread that interacts with the clipboard).
    </pre>
</b>
</body>
</html>
