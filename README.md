# Custom Tiberis Banner Script
## Insert this code anywhere on your page


    <!-- Custom Tiberis banner -->
    <div id="custom-banner"></div>
    <script type="text/javascript">
      function rewrite(w) {
        document.getElementById('custom-banner').innerHTML+= w;
      }

      window.onload = function() {
        document.write = rewrite;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://arouax.github.io/tbs-script/tiberis-banner.js';
        document.body.appendChild(script);
      }
    </script>
    <!-- End of custom Tiberis banner -->

## Products info comes from catalogue.json, which can be generated on the server with GET requests
## tiberis-banner.js - is the server-side js script file, any customizations to the banner are performed here
