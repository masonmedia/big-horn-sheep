//navbar auto collapse on click
//from: https://stackoverflow.com/questions/16680543/hide-twitter-bootstrap-nav-collapse-on-click
//samuel de backer / 55

// data-toggle="collapse" data-target=".navbar-collapse.show" added to the HTML --> this from the same link above was only thing that worked to collapse mobile menu on click in BS 4
       

//Change navbar color on scroll

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
	
	
// iframe video + bandcamp defer js


//$(document).ready(function () {
//	$('iframe#track-1').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/204286855&color=%232f201f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true');
//	$('iframe#track-2').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/204620167&color=%232f201f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true');
//	$('iframe#track-3').attr('src', 'https://bandcamp.com/EmbeddedPlayer/album=2776862196/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/track=2172763946/transparent=true/');
//	$('iframe#track-4').attr('src', 'https://bandcamp.com/EmbeddedPlayer/album=2776862196/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=none/track=1511403670/transparent=true/');
//});


//typed.js home page

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 6) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
