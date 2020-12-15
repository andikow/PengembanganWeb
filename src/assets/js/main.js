const loadMyScript = () => window.addEventListener('load', () => {
  window.onscroll = function() {myFunction()};

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
      navbar.setAttribute("style", "height:100px; margin-left:0px; margin-right:0px;");
    } else {
      navbar.classList.remove("sticky");
      navbar.setAttribute("style", "height:100px; margin-left:0px; margin-right:0px;");
    }
  }
});
export default loadMyScript;
