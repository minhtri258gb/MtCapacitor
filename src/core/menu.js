
class MenuComponent extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
      <ion-menu content-id="main-content">
        <ion-header>
          <ion-toolbar>
            <ion-title>Menu Content</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-menu-toggle auto-hide="false">
              <ion-router-link href="/page-one">

                <ion-item button>
                  <i slot="start" class="fas fa-1" style="font-size:22px"></i>
                  <ion-label>Page One</ion-label>
                </ion-item>
              </ion-router-link>

              <ion-router-link href="/page-two">
                <ion-item button>
                  <i slot="start" class="fas fa-2" style="font-size:22px"></i>
                  <ion-label>Page Two</ion-label>
                </ion-item>
              </ion-router-link>

              <ion-item button>
                <i slot="start" class="fas fa-bug" style="font-size:22px"></i>
                <ion-label>Test</ion-label>
              </ion-item>

              <ion-item button>
                <i slot="start" class="fa-regular fa-comment-dots" style="font-size:22px"></i>
                <ion-label>Chat</ion-label>
              </ion-item>

              <ion-router-link href="/form">
                <ion-item button>
                  <i slot="start" class="fa-brands fa-wpforms" style="font-size:22px"></i>
                  <ion-label>Form</ion-label>
                </ion-item>
              </ion-router-link>

              <ion-router-link href="/map">
                <ion-item button>
                  <i slot="start" class="fa-regular fa-map" style="font-size:22px"></i>
                  <ion-label>Map</ion-label>
                </ion-item>
              </ion-router-link>

            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
      <div class="ion-page" id="main-content"></div>
    `;
  }
}
customElements.define('mt-menu', MenuComponent);