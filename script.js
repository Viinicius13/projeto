function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

//pegar tag img
const img = document.querySelector("#profile img")

   //subustituir a imagem
    if(html.classList.contains("light")){
   //se tiver lihtg mode, adcionar a imagem ligth
   img.setAttribute("src", "./assetz/avatar-light.png")
    }else{
   //se tiver sem light mode, adicionar a imagem normal 
   img.setAttribute("src", "./assetz/Avatar.png")
    }

}
