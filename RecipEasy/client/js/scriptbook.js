function change(arr) {
  var el = document.getElementById('hour');
  el.options.length = 0;
  for(var i = 0; i< arr.length; i++ ) {
  el.options[el.options.length] = new Option( arr[i], arr[i]);
  }
}

function changeChef(arr) {
  var el = document.getElementById('chef');
  el.options.length = 0;
  for(var i = 0; i< arr.length; i++ ) {
  el.options[el.options.length] = new Option( arr[i], arr[i]);
  }
}