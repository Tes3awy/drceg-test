// Show/Hide Password Fields
$('.input-group-append').on('click', function() {
  var input = $(this).siblings();
  $(this)
    .find('.input-group-text')
    .find('i')
    .toggleClass('fa-eye fa-eye-slash');
  if (input.attr('type') === 'password') {
    input.attr('type', 'text');
  } else {
    input.attr('type', 'password');
  }
});
// Autocomplete Email Init
$('input[type="email"]').emailautocomplete({
  suggClass: 'email-input-class',
});

// Custom hamburger Icon
$('.navbar-toggler').on('click', function() {
  $(this).toggleClass('is-active');
  $('.navbar-collapse.show[id]').each(function() {
    var target = $(this).attr('id');
    $('.navbar-toggler.is-active[data-target="#' + target + '"]').click();
  });
});

$(".post-tag").one('click', function() {
  $(this).find('i').toggleClass('fa-meh fa-smile-beam text-warning text-success');
});