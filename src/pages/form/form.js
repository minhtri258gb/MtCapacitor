class formPage extends HTMLElement {

  // Event
  connectedCallback() {
    this.innerHTML = `loading...`;
    this.loading();
  }

  // Method
  async loading() {

    // Load data
    let response = await fetch('/pages/form/form.html');
    this.innerHTML = await response.text();
  }
}
customElements.define('mt-page-form', formPage);