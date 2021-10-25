//console.log("search content script");
let results = $("li.search-results__list__item section div.card  a.search-result__link");
results.each(function(index) {
  let link = $(this).attr("href");
  let url_split = link.split("\/");
  let place = url_split[url_split.length - 2];
  let zillow_link = "https://zillow.com/homes/".concat(place);

  var element = $("<a href='"+zillow_link+"' target='_blank'></a>");
  const linking_text = "View on Zillow";
  let text_element = $("<h6></h6>").text(linking_text);
  element = element.html(text_element);
  $(this).find("h2.search-result__title").append(element);
});


