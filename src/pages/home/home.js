/**
 * Ionic: https://ionic-docs-5utg8ms4c-ionic1.vercel.app/docs/components
 * FontAwesome: https://fontawesome.com/v6/icons/thumbs-down?f=classic&s=solid
 */
class HomePage extends HTMLElement {

  // Event
  connectedCallback() {
    this.innerHTML = `loading...`;
    this.loading();
  }

  // Method
  async loading() {

    // Đợi 1 giây
    // await new Promise(async (resolve) => setTimeout(() => resolve(), 1000));

    // Load data
    let response = await fetch('/pages/home/home.html');
    this.innerHTML = await response.text();

    // const template = document.createElement('template');
    // template.innerHTML = templateString;
    // shadow.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('mt-home-page', HomePage);