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


let links = document.querySelectorAll(".close");

links.forEach(function(){
links.forEventListener("click",function(ev){
    // maneras de inhibir el comportamiento por defecto de un objeto
    // ev.preventDefault();
    // return false;
  })
})

let icons = document.querySelectorAll("i");

icons.forEach(function(icon){
  icon.classList.remove("fas");
})
