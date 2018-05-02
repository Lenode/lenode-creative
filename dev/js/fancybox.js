$(".fancybox").fancybox({
    afterClose : function() {
        location.reload();
        return;
    }
});

$(function(){
    $('a').each(function(){
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active'); $(this).parents('li').addClass('active');
        }
    });
});
