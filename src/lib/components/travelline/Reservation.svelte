<script type="text/javascript">
  (function (w) {
    var q = [
      ["setContext", "TL-INT-green-kurort-ru", "ru"],
      [
        "embed",
        "booking-form",
        {
          container: "tl-booking-form",
        },
      ],
    ];
    var t = (w.travelline = w.travelline || {}),
      ti = (t.integration = t.integration || {});
    ti.__cq = ti.__cq ? ti.__cq.concat(q) : q;
    if (!ti.__loader) {
      ti.__loader = true;
      var d = w.document,
        p = d.location.protocol,
        s = d.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src =
        (p == "https:" ? p : "http:") +
        "//ibe.tlintegration.com/integration/loader.js";
      (
        d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0]
      ).appendChild(s);
    }
  })(window);
</script>

<!-- start TL Booking form script -->
<!-- <p id='tl-anchor'>С помощью приведенной ниже формы вы можете забронировать наши номера в режиме онлайн и получить гарантированную бронь.</p> -->

<div id="tl-booking-form">&nbsp;</div>

<!-- end TL Booking form script -->
<style>
  #tl-booking-form {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
</style>
