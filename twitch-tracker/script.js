const add_streamer = document.querySelector(".add-streamer button");
console.log(add_streamer);
add_streamer.addEventListener("click", function() {
  console.log("Click!");
});

add_streamer.addEventListener("mouseover", function() {
  add_streamer.style.transform = "scaleZ(20%)";
  console.log(JSON.stringify(add_streamer.style.transform));
});

add_streamer.addEventListener("mouseleave", function() {
  add_streamer.style.transform = "scaleZ(20%)";
  console.log(JSON.stringify(add_streamer.style.transform));
});

function create_query_form() {
  
} 

