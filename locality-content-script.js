//console.log("localities content");
let url_split = window.location.href.split("\/");
let place = url_split[url_split.length - 2];
let zillow_link = "https://zillow.com/homes/".concat(place);

var element = $("<a href='"+zillow_link+"' target='_blank'></a>");
const linking_text = "View on Zillow";
let text_element = $("<h6></h6>").text(linking_text);

element = element.html(text_element);

$(".profile-blocks h1.postcard__title").append(element);

