<script>
  import { onMount } from "svelte";

  // let show = false;

  // onMount(() => {
  //   show = true;
  // });
  (function (w) {
      var q = [
        ["setContext", "TL-INT-green-kurort-ru", "ru"],
        [
          "embed",
          "search-form",
          {
            container: "tl-search-form",
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
    }
  )(window);
</script>

<!-- start TL Search form script -->
<!-- {#if show} -->
<div id="block-search">
  <div id="tl-search-form" class="tl-container">
    <noindex
      ><a href="http://www.travelline.ru/products/tl-hotel" rel="nofollow"
        >система онлайн-бронирования</a
      ></noindex
    >
  </div>
</div>
<!-- {/if} -->
<!-- end TL Search form script -->

<style>
  #block-search {
    /* background: #379236; */
    @apply bg-gray-800 bg-opacity-40 max-w-screen-xl mx-auto px-4 rounded-2xl backdrop-blur-md;
    box-sizing: border-box;
  }

  .tl-container {
    padding: 5px;
  }
</style>
