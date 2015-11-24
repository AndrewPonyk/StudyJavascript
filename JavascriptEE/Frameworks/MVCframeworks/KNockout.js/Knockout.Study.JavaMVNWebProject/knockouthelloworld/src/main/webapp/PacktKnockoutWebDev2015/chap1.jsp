<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Packt Knockout Web Dev - 2015 - chapter 1</title>
<script type="text/javascript" src="../js/knockout-3.3.0.js"></script>
<style type="text/css">
.myLeftCSS {
	background-color: yellow;
}
</style>
</head>
<body>
	<div id="panelBody" data-bind="visible : isVisible">
		<span data-bind="text : myVariable"></span>
		<input data-bind="value : myVariable">
		<div data-bind="html: myHTML, css: myLeftCSS"></div>
	   <span data-bind="style:{color:myBalance()>0 ? 'green' : 'red'}">My balance:
	       <span data-bind="text:myBalance"></span>
	   </span>
	   <input data-bind="value:myBalance" title="input positive and negative values and see result">
	</div>
	<script type="text/javascript">
		var viewModel = function() {
		    var self = this;

			self.myVariable = ko.observable("123");
			self.myHTML = ko.observable();
			self.myLeftCSS = ko.observable();
			self.myBalance = ko.observable();
			self.isVisible = ko.observable(true);
		}

	    var vm = new viewModel();
		ko.applyBindings(vm);

		vm.myHTML("<strong>Strong and <i>italic</i> text</strong>");
		vm.myLeftCSS("myLeftCSS");
		vm.myBalance(12.12);
  	</script>


</body>
</html>