console.log("exercice 8");

$(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide"
    });
  });

$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
    grid: true
});

$("#demo").ionRangeSlider({
    skin: "big",
    min: 0,
    max: 10,
    from: 5,
    onStart: function (data) {
        // fired then range slider is ready
    },
    onChange: function (data) {
        // fired on every range slider update
    },
    onFinish: function (data) {
        // fired on pointer release
    },
    onUpdate: function (data) {
        // fired on changing slider with Update method
    }
});