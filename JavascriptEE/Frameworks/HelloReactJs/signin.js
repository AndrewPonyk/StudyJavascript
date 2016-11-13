/*var SignIn = React.createClass({
    render: function(){
        return <div>
            <label htmlFor="username">username
                <input type = "text" id="username"/>
            </label>
        </div>;
    }
})*/

var SignIn = React.createClass({
    displayName: "SignIn",

    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "label",
                { htmlFor: "username" },
                "username",
                React.createElement("input", { type: "text", id: "username" })
            )
        );
    }
});