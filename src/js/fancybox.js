// $(".fancybox").fancybox({
//     afterClose : function() {
//         location.reload();
//         return;
//     }
// });

// $(".fancybox").fancybox({
//     closeClick: true
// }).trigger("click"); // you can chain fancybox and trigger methods

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});
