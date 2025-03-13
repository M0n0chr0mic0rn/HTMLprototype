const _Main = document.getElementById("Main")
const _Home = document.getElementById("Home")

const _Guard = document.getElementById("Guard")


_Home.style.display = "flex"

function Menu(point) {
    for (let a = 0; a < _Main.children.length; a++) _Main.children[a].style.display = "none"
    document.getElementById(point).style.display = "flex"
}

document.getElementById("Headline").onmouseenter = () => {
    _Guard.style.display = "block"
}
document.getElementById("Headline").onmouseleave = () => {
    _Guard.style.display = "none"
}