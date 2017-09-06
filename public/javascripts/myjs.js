$(function(){
    $('.delete-msg').hide();
    var url;
    $(".imgBgDel").on("click", function(){
        url = 'http://localhost:3000/api/imagesbg/' + $(this).attr('file-name');
        var allObj = $(this).parent();
        console.log(allObj);
        $.ajax({
            url: url,
            type: 'DELETE',
            success: function(result) {
                allObj.remove();
                $('.delete-msg').slideToggle();
                setTimeout(function() {$('.delete-msg').slideToggle();}, 3000);
            }
        });

    });


});
