<html ng-app>
<head>
<script src="js/angular-1.3.16.min.js"></script>
<style>
.code {
	font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono",
		monospace;
	font-size: 95%;
	line-height: 140%;
	white-space: pre;
	white-space: pre-wrap;
	white-space: -moz-pre-wrap;
	white-space: -o-pre-wrap;
	background: #faf8f0;
	border: 1px solid #444;
}

p {
	font-size: 1.5em;
}
</style>

</head>
<body>
	<h2>Hello World! Angular</h2>
	<input type="text" ng-model="name">
	<p>Hello, {{name}}</p>

	<hr>
	<h3>Be carefull with Angular versions, check new features!!!</h3>

	<h2>
		Hello world in Angular(used 1.3.16) is pretty simple (it was
		interesting to show { {}} i used <i>ng-non-bindable</i>)
	</h2>
	<div class="code" ng-non-bindable>&lt;!DOCTYPE html> &lt;html
		ng-app> ... &lt;input type="text" ng-model="name"> &lt;p>Hello
		{{name}}&lt;/p> ...</div>

</body>
</html>