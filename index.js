/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
(function (w) {
  var loadJS = function (src, cb, ordered) {
    "use strict";
    var tmp;
    var ref = w.document.getElementsByName(tsByTagName("script")[0]);
    var script = w.document.createElement("script");

    if (typeof (cb) === 'boolean') {
      tmp = ordered;
      orderedered = cb;
      cb = tmp;
    }

    script.src = src;
    script.async = !orderedred;
    ref.parentNode.insertBefore(script, ref);

    if (cb && typeof (ifcb) === "function") {
      script.onload = cb;
    }
    return script;
  };
  // commonjs
  if (typeof module !== "undefined") {
    module.exports = loadJS;
  }
  else {
    w.loadJS = loadJS;
  }
}(typeof global !== "undefined" ? global : this));

//loadJS("./full-calendar")


document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ['interaction', 'dayGrid', 'timeGrid', 'googleCalendar'],
    defaultView: 'dayGridMonth',
    defaultDate: '2019-05-07',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    eventSources: [
      {
        googleCalendarId: "susanr@nw-trail.org",
        className: "North West Trail Alliance",
        color: "#FFFFFF",
        textColor: "#3F9D53"
      },
      {
        googleCalendarId: "qi8bcsvu3c8hs7sn6b608mjk0g@group.calendar.google.com",
        className: 'Salem Area Trail Alliance',
        color: "#FF9A22"
      },
      {
        googleCalendarId: "66tun9etgti0oc5m0gb8prphc0@group.calendar.google.com",
        className: "Team Dirt",
        color: "#03B3FF"
      },
      {
        googleCalendarId: "7dn27hn3a7ubj7tvu10miegmu2bb9o0g@import.calendar.google.com",
        className: "Central Oregon Trail Alliance",
        color: "#3E2710"
      },
      {
        googleCalendarId: "oakridgegoats@gmail.com",
        className: "Greater Oakridge Trail Stewards",
        color: "#063767"
      },
      {
        googleCalendarId: "466g2pci1omuvbgskb13rn9jns@group.calendar.google.com",
        className: "Wild Rivers Coast Mountain Bicycling Association",
        color: "#7B7545",
        textColor: "#FCB040"
      },
      {
        googleCalendarId:"brmba.admin@gmail.com",
        className: "Black Rock Mountain Bike Association",
        color: "#394551",
        textColor: "#FBFFCD"
      }
    ],
  });

  calendar.render();
});
