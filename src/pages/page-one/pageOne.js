class MyComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Fetch template and attach it
    fetch('/pages/page-one/pageOne.html')
      .then(response => response.text())
      .then(templateString => {
        const template = document.createElement('template');
        template.innerHTML = templateString;
        shadow.appendChild(template.content.cloneNode(true));
      });
  }
}
customElements.define('mt-page-one', MyComponent);