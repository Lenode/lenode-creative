// $(".fancybox").fancybox({
//     afterClose : function() {
//         location.reload();
//         return;
//     }
// });

// $(".fancybox").fancybox({
//     closeClick: true
// }).trigger("click"); // you can chain fancybox and trigger methods

// $(function(){
//     $('a').each(function(){
//         if ($(this).prop('href') == window.location.href) {
//             $(this).addClass('active'); $(this).parents('li').addClass('active');
//         }
//     });
// });

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});
