(function (window, undefined) {
	$(document).ready(function () {
		React.renderComponent(Timer(), $("#timer_container")[0]);
	});
})(window)