//DOM
//queryselector es solo para el primero--queryselectorAll es para todos los elementos
// let links = document.querySelectorAll("a");
//
// links.forEach(function(Links){
//   console.log(links);
// })

let tdef = document.querySelectorAll("td");

tdef.forEach(function(td){
  td.addEventListener('click', function(){
    console.log(this);
  })
})
