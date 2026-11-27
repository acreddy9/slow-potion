export default class App extends HTMLElement {
//   connectedCallback() {
//     this.template = document
//       .getElementById('html-app')

//     window.requestAnimationFrame(() => {
//       const content = this.template
//         .content
//         .firstElementChild
//         .cloneNode(true)

//       this.appendChild(content)
//     })
//   }
    constructor() {
        super();
        this.count = 0
        this.button = this.querySelector('button')
        this.button.addEventListener('click', this)
    }

    handleEvent() {
        console.log("button was clicked")
        this.count++
        this.button.textContent = `Clicked ${this.count} times`
        this.button.setAttribute("aria-live", "polite")
    }
}