$(document).ready(function() {
	$("nav.navbar-default .navbar-nav [href]").each(function() {
		if (this.href == window.location.href) {
			$(this).parent().addClass("active");
		}
	});
});