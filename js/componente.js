export function crearCarrusel(contenedor, fotos, opciones = {}) {
  if (!contenedor || fotos.length === 0) return

  const { autoplay = false, intervalo = 3000 } = opciones
  let actual = 0

  contenedor.classList.add("carrusel")
  contenedor.innerHTML = `
    <button class="carrusel-btn" data-dir="-1">⇐</button>
    <img class="carrusel-img" alt="">
    <button class="carrusel-btn" data-dir="1">⇒</button>
  `

  const img = contenedor.querySelector(".carrusel-img")

  function mostrar(indice) {
    actual = (indice + fotos.length) % fotos.length
    img.src = fotos[actual].src
    img.alt = fotos[actual].alt || `Foto ${actual + 1}`
  }

  contenedor.querySelectorAll(".carrusel-btn").forEach(btn => {
    btn.addEventListener("click", () => mostrar(actual + Number(btn.dataset.dir)))
  })

  mostrar(0)

  if (autoplay) setInterval(() => mostrar(actual + 1), intervalo)
}