$(function () {
  var wrapper = $("#file-upload"),
    inp = wrapper.find(".file-form"),
    btn = wrapper.find(".file-btn"),
    lbl = wrapper.find("span");

  btn.focus(function () {
    inp.focus();
  });

  inp
    .focus(function () {
      wrapper.addClass("focus");
    })
    .blur(function () {
      wrapper.removeClass("focus");
    });

  var file_api =
    window.File && window.FileReader && window.FileList && window.Blob
      ? true
      : false;

  inp
    .change(function () {
      var file_name;
      if (file_api && inp[0].files[0]) file_name = inp[0].files[0].name;
      else file_name = inp.val().replace("C:\\fakepath\\", "");

      if (!file_name.length) return;

      if (lbl.is(":visible")) {
        lbl.text(file_name);
      } else btn.text(file_name);
    })
    .change();
});

$(window).resize(function () {
  $("#file-upload .file-form").triggerHandler("change");
});

$(".application-form").submit(function () {
  $("#modal-application").modal("hide");
  $("#modal-application-sent").modal("show");
});

$("#navbarToggler").click(function () {
  if (this.getAttribute("aria-expanded") == "true") {
    $("#navbarToggler .navbar-toggler-icon").addClass("nav-open");
  } else {
    $("#navbarToggler .navbar-toggler-icon").removeClass("nav-open");
  }
});
