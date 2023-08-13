function togglomode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const image = document.querySelector("#profile img")
  //substituir a imagem
  
  if (html.classList.contains("light")) {
    // se tiver light mode , adicionar a imagem light
    image.setAtribute("src","./assets/avatar-light.png" )
  } else {
    // se tiver sem light mode , manter a i,agem normal
    img.setAtribute("src","./assets/avatar.png")
  }

  
}
