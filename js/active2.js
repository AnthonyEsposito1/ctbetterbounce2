$(document).ready(function() {
	$("nav#second_nav [href]").each(function() {
		if (this.href == window.location.href) {
			$(this).addClass("lined");
		}
	});
});