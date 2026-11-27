export default class NavigationBar extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' })
    // const label = this.getAttribute('label') || 'Submit'
    
    shadow.innerHTML = `

    `
  }
}