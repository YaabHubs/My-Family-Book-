var images = ["https://o.remove.bg/downloads/e66f7a00-58c1-4c37-984d-b14c03142caa/500_F_115478791_GG0yIcVA8Mhe6MAXEvgcfyL7JtuVfYvm-removebg-preview.png", "https://o.remove.bg/downloads/676a5a04-503f-412f-a587-4a96b2a8922d/Happy-Boy-clipart-removebg-preview.png", "https://www.pngkit.com/png/full/915-9152802_nerdy-boy-clipart-7th-grade-geek-boy-cartoon.png", "family.png"];
var names = ["Mom", "Brother", "Me", "Us"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}
