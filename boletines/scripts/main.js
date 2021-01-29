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

links.forEach(function(link){
  link.addEventListener("click",function(ev){
    // manera de inhibir el comportamiento por defecto de un objeto
    ev.preventDefault();

    let content = document.querySelector(".content");
    content.classList.remove("animate__animated");
    content.classList.remove("animate__fadeInDown");

    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    setTimeout(function(){
      location.href = "./";

    },1000);

    return false;
  })
})

// ---icon remover
// let icons = document.querySelectorAll("i");
//
// icons.forEach(function(icon){
//   icon.classList.remove("fas");
//   icon.classList.remove("fa-star");
// })
