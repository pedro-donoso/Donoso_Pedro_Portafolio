// smooth control

$(document).ready(function () {
  $("a").click(function (event) {
    event.preventDefault();

    var gato = this.hash;

    $("html").animate(
      {
        scrollTop: $(gato).offset().top - 86,
      },

      800
    );
  });
});

// tooltip

$('[data-toggle="tooltip"]').tooltip();

// popover

$(".example-popover").popover();
