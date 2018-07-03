
$('.single-item').slick({
    arrows: false,
    autoplay: true,
});

// testimonial slider

var url="http://vocabridge.devwha.info/wp-json/wp/v2/testimonial";
$.getJSON(url,function(result){
    var i = 1;
    $.each(result, function(i, field){
        var description = field.description;
        var position = field.position;
        var image_url = "http://vocabridge.devwha.info/wp-json/wp/v2/media/"+field.image;
        i++;
        $.getJSON(image_url, function (data) {
            var image = data.source_url;
            $('#image-testimonial'+i).append("<img src='"+image+"'>");
        });
        $(".testimonial-slider").append("<div><p><em>"+description+"</em></p><div class='row'><div id='image-testimonial"+i+"' class='cl-40'></div><div class='cl-60'>"+position+"</div></div></div>");
    });
    testimonial();
});

function testimonial() {
    $('.testimonial-slider').slick({
        arrows: false,
        autoplay: true,
    });
}

function call() {
    var data = $('#formx').serialize();
    $.ajax({
        type: "POST",
        url: 'http://vocabridge.devwha.info/wp-content/themes/_tk-master/api/form.php',
        data: data,
        success: function (data) {
            myApp.alert(data);
        },
        error: function () {
            myApp.alert("Error");
        }
    });
}