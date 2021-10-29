<script>
jQuery( document ).ready(function() {
    params = window.location.search
    jQuery('a').each(function(index) {
        baseurl = jQuery(this).attr("href");
        if(baseurl == "https://vp301.infusionsoft.app/app/orderForms/Pro-Trader-Boot-Camp-Live"){
            newurl = baseurl+params;
            jQuery(this).attr("href",newurl);
        }
    });

});
</script>