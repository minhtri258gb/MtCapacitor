
class RatingComponent extends HTMLElement {

  h_dedbug = true;

  p_rating = 10;
  p_vote = 0;

  c_btnLike = null;
  c_btnDislike = null;
  c_labelRating = null;


  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
        button {
          background: transparent;
          border: none;
          cursor: pointer;
        }
        button.thumb_up.active svg path {
          fill: green;
        }
        button.thumb_down.active svg path {
          fill: red;
        }
        span.rating {
          font-size: 18px;
        }
      </style>
      <button class="thumb_down">
        <i class="fa-solid fa-thumbs-down" style="font-size:22px"></i>
      </button>
      <span class="rating">${this.p_rating}</span>
      <button class="thumb_up">
        <i class="fa-solid fa-thumbs-up" style="font-size:22px"></i>
      </button>
    `;
    this.init();
  }
  disconnectedCallback() {

    // Log
    mtApp.log('[rating.component] disconnectedCallback', null, this.h_debug);
  }
  
  // static get observedAttributes() {
  //   return ['color', 'vote'];
  // }
  // attributeChangedCallback(name, oldValue, newValue) { // 4th W3C parameter = Namespace (not implemented in Browsers)
  //   this.log("attributeChangedCallback", name, oldValue || "null", newValue);
  // }

  // Method
  init() {

    // const button = this.shadowRoot.querySelector('#my-button');
    this.c_btnLike = this.querySelector('.thumb_up');
    this.c_btnDislike = this.querySelector('.thumb_down');
    this.c_labelRating = this.querySelector('.rating');

    this.registerEvent();
  }
  registerEvent() {

    // Event component chính
    // this.addEventListener("click", function (e) {
    //   console.log('listend to check event');
    //   console.log(e);
    // });

    // Button like
    if (this.c_btnLike)
      this.c_btnLike.addEventListener('click', () => this.onClick_BtnLike(this));
    
    // Button like
    if (this.c_btnDislike)
      this.c_btnDislike.addEventListener('click', () => this.onClick_BtnDislike(this));
  }

  // UI Event
  onClick_BtnLike(self) {

    if (self.p_vote == 1)
      return;

    // Update data
    self.p_vote = 1;

    // Update DOM
    this.c_btnLike.classList.add('active');
    this.c_btnDislike.classList.remove('active');
    this.c_labelRating.innerHTML = this.p_rating + self.p_vote;

    // Log
    mtApp.log('[rating.component] onClick_BtnLike', {
      vote: self.p_vote,
      rating: self.p_rating,
    }, this.h_debug);
  }
  onClick_BtnDislike(self) {

    if (self.p_vote == -1)
      return;

    // Update data
    self.p_vote = -1;

    // Update DOM
    this.c_btnDislike.classList.add('active');
    this.c_btnLike.classList.remove('active');
    this.c_labelRating.innerHTML = this.p_rating + self.p_vote;

    // Log
    mtApp.log('[rating.component] onClick_BtnDislike', {
      vote: self.p_vote,
      rating: self.p_rating,
    }, this.h_debug);
  }
}
customElements.define('mt-rating', RatingComponent);