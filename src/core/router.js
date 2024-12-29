
class Router extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-router>
        <ion-route url="/" component="mt-home-page"></ion-route>
        <ion-route url="/page-one" component="mt-page-one"></ion-route>
        <ion-route url="/page-two" component="mt-page-two"></ion-route>
        <ion-route url="/form" component="mt-page-form"></ion-route>
        <ion-route url="/map" component="mt-page-map"></ion-route>
        <ion-route url="/chat" component="mt-page-chat"></ion-route>
      </ion-router>
      <ion-router-outlet></ion-router-outlet>
    `;
  }
}

customElements.define('mt-router', Router);