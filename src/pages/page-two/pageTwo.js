class PageTwo extends HTMLElement {

  // Event
  constructor() {
    super();
    // const shadow = this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.innerHTML = `loading...`;
    this.loading();
  }

  // Method
  async loading() {

    // Đợi 1 giây
    // await new Promise(async (resolve) => setTimeout(() => resolve(), 1000));

    // Load data
    let response = await fetch('/pages/page-two/pageTwo.html');
    this.innerHTML = await response.text();
  }
}
customElements.define('mt-page-two', PageTwo);