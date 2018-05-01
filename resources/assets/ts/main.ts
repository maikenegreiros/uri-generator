import {UriGenerator} from "./UriGenerator"

window.addEventListener("DOMContentLoaded", () => {
    let titleInput = <HTMLInputElement> document.querySelector("#title")
    let uriInput = <HTMLInputElement> document.querySelector("#uri")

    let uriGenerator = new UriGenerator(titleInput, uriInput)
})
