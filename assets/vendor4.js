$(document).ready(function () {

  $('.iRow').click(function () {

    let show = $(this).attr("show");

    if (show == "1") {

      $(this).children().children("i").toggle();

      $(this).next("tr")
        .children('td, th')
        .animate({ padding: 0 })
        //.wrapInner('<div />')
        .children()
        .slideUp(function () { $(this).closest('tr').toggle(); });

      $(this).attr("show", 0);

    } else {

      $(this).children().children("i").toggle();

      $(this).next("tr")
        .children('td, th')
        .animate({ padding: 5 })
        // .wrapInner('<div />')
        .children()
        .slideDown(function () { $(this).closest('tr').toggle(); });

      $(this).attr("show", 1);

    }


  });


  $("#linkA").click(function () {
    //$("#linkAsec").toggle(500);
    $("#linkAsec").slideToggle("slow");
  });

  $("#linkB").click(function () {
    $("#linkBsec").slideToggle(500);
  });

});