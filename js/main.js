!(function (e) {
  "use strict";

  // Sticky header on scroll
  function t() {
    e(window).scrollTop() >= 80
      ? e(".separateweb-header").addClass("sticky")
      : e(".separateweb-header").removeClass("sticky");
  }

  e(function () {
    e(window).scroll(t), t();
  });

  // Counter animation on load
  e(window).on("load", function () {
    e(".counter").counterUp({ delay: 10, time: 4500 });
  });

  // Video popup
  e(window).on("load", function () {
    e(".video-popup").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
    });
  });

  // Rotate text on scroll
  const o = document.querySelector(".separateweb-text .texts");
  window.addEventListener("scroll", function () {
    o.style.transform = `rotate(${0.2 * window.scrollY}deg)`;
  });

  // Progress bar on scroll
  e(document).ready(function () {
    var t = document.querySelector(".progress-wrap path"),
      o = t.getTotalLength();
    t.style.transition = t.style.WebkitTransition = "none";
    t.style.strokeDasharray = o + " " + o;
    t.style.strokeDashoffset = o;
    t.getBoundingClientRect();
    t.style.transition = t.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var r = function () {
      var r = e(window).scrollTop(),
        s = e(document).height() - e(window).height(),
        n = o - (r * o) / s;
      t.style.strokeDashoffset = n;
    };
    r();
    e(window).scroll(r);

    // Show/hide progress wrap
    jQuery(window).on("scroll", function () {
      jQuery(this).scrollTop() > 50
        ? jQuery(".progress-wrap").addClass("active-progress")
        : jQuery(".progress-wrap").removeClass("active-progress");
    });

    // Scroll to top
    jQuery(".progress-wrap").on("click", function (e) {
      e.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, 550);
      return false;
    });
  });

  // Rellax parallax effect
  new Rellax(".separateweb", { horizontal: false });

  // Cursor effect
  document.querySelectorAll(".s-e-p-a-r-a-t-e-w-e-b-🤙").forEach((e) => {
    let t;
    document.addEventListener("mousemove", (o) => {
      const r = ((e) => {
        const o = {
            x: e.clientX,
            y: e.clientY,
            width: 40,
            height: 40,
            radius: "50%",
          },
          r = {};
        if (null != t) {
          const {
              top: e,
              left: o,
              width: s,
              height: n,
            } = t.getBoundingClientRect(),
            i = window.getComputedStyle(t).borderTopLeftRadius;
          r.x = o + s / 2;
          r.y = e + n / 2;
          r.width = s;
          r.height = n;
          r.radius = i;
        }
        return { ...o, ...r };
      })(o);
      ((e, t) => {
        e.style.setProperty("--x", `${t.x}px`);
        e.style.setProperty("--y", `${t.y}px`);
        e.style.setProperty("--width", `${t.width}px`);
        e.style.setProperty("--height", `${t.height}px`);
        e.style.setProperty("--radius", t.radius);
        e.style.setProperty("--scale", t.scale);
      })(e, r);
    });
    document.querySelectorAll(".⏺︎").forEach((e) => {
      e.addEventListener("mouseenter", () => (t = e));
      e.addEventListener("mouseleave", () => (t = void 0));
    });
  });

  // Horizontal scroll effects
  e(window).on("scroll", function () {
    var t = e(this).scrollTop();
    e(".h-sw1").css({ transform: "translateX(" + 0.5 * t + "px)" });
  });

  e(window).on("scroll", function () {
    var t = e(this).scrollTop();
    e(".h-sw2").css({ transform: "translateX(" + -0.5 * t + "px)" });
  });
})(jQuery);
