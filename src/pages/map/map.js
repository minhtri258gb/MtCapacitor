/** Map
 * https://leafletjs.com/examples.html
 */

import * as Leaflet from 'leaflet/dist/leaflet-src.esm.js';
import 'leaflet/dist/leaflet.css';

class mapPage extends HTMLElement {

  m_map = null; // Map object


  // Event
  connectedCallback() {
    this.innerHTML = `loading...`;
    this.loading();
  }

  // Method
  async loading() {

    // Load template
    let response = await fetch('/pages/map/map.html');
    this.innerHTML = await response.text();

    // Init
    this.init();
  }
  async init() {

    // Get current location
    let location = await mtDevice.getLocation();
    let latlng = [location.lat, location.lng];
    let radius = location.accuracy;

    // Init Map
    this.m_map = Leaflet.map('map').setView(latlng, 16);
    
    // Add Layer
    Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.m_map);

    // Resize để tránh lỗi leaflet
    setTimeout(() => this.m_map._onResize(), 100);

    // Add Mark Current Location
    Leaflet
      .marker(latlng)
      .addTo(this.m_map);
      // .bindPopup("You are within " + radius + " meters from this point")
      // .openPopup();
    Leaflet.circle(latlng, radius).addTo(this.m_map);

    // Log
    // console.log("m_map", this.m_map);
  }
}
customElements.define('mt-page-map', mapPage);