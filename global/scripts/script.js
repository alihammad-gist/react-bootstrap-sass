(function (window, undefined) {
	$(document).ready(function () {
		React.renderComponent(Timer(), $("#timer_container")[0]);
		React.renderComponent(Navigation(), $("#nav_container")[0]); 
	});
})(window)