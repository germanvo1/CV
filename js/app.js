var tl = new TimelineLite();
tl.to(document.getElementById("facebook-logo"), 2,
  {css:{rotation: 360}, ease:Power1.easeOut}
);

var menu = new TimelineLite({paused:true, reversed:true});
menu.to(document.getElementById("side-nav-menu"), .2, {width: "300px", ease:Power1.easeOut});
function menuIn() {
  if (menu.reversed()) {
    menu.play();
    document.getElementById("overlay-screen").classList.add("load");
  } else {
    menu.reverse();
    document.getElementById("overlay-screen").classList.remove("load");
  }
}