import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'mint-trend/mint-trend.js'
/**
 * @customElement
 * @polymer
 */
class MintTrendTestApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <mint-trend style="width: 100vw;" datasets="[[datasets]]"></mint-trend>
    `;
  }
  static get properties() {
    return {
      datasets: {
        type: Object,
        notify:true,
        readOnly:false,
        value:{id: "fldas01_fldas02_trend_chart", type:"trend",url:""}
      }
    };
  }
  ready() {
    super.ready();
  }

}

window.customElements.define('mint-trend-test-app', MintTrendTestApp);
