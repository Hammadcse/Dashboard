// bar chart
document.querySelectorAll('.vertical .progress-fill span').forEach(function (element) {
  var percent = element.innerHTML;
  var pTop = (100 - parseFloat(percent)) + '%';
  element.parentElement.style.height = percent;
  element.parentElement.style.top = pTop;
});