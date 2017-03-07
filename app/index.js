
import styles from './styles/main.styl'

const Elm = require("./elm/Main.elm")

let mountNode = document.getElementById @ "app"

let app = Elm.Main.embed @ mountNode
