$(".fancybox").fancybox({
    afterClose : function() {
        location.reload();
        return;
    }
});
