function myFunction() {
  var x = document.getElementById("mypw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}