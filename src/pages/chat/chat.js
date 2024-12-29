
class chatPage extends HTMLElement {

  // Event
  connectedCallback() {
    this.innerHTML = `loading...`;
    this.loading();
  }

  // Method
  async loading() {

    // Load template
    let response = await fetch('/pages/chat/chat.html');
    this.innerHTML = await response.text();

    // Init
    this.init();
  }
  async init() {

  }
}
customElements.define('mt-page-chat', chatPage);