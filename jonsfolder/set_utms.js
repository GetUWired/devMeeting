jQuery(document).ready(function () {
  console.log("url builder ready");
  url_string = window.location.href;
  url = new URL(url_string);

  campaign = url.searchParams.get("utm_campaign");
  document.getElementById("inf_custom_UTMCampaign").value = campaign;

  content = url.searchParams.get("utm_content");
  document.getElementById("inf_custom_UTMContent").value = content;

  source = url.searchParams.get("utm_source");
  document.getElementById("inf_custom_UTMSource").value = source;

  medium = url.searchParams.get("utm_medium");
  document.getElementById("inf_custom_UTMMedium").value = medium;

  term = url.searchParams.get("utm_term");
  document.getElementById("inf_custom_UTMTerm").value = term;
});
