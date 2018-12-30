import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'mint-map/mint-map.js'
/**
 * @customElement
 * @polymer
 */
class MintMapTestApp extends PolymerElement {
  static get template() {
    return html`      
      <mint-map variables="{{variables}}" style="height: 200px"></mint-map>
    `;
  }
  static get properties() {
    return {
      variables: {
        type: Array,
        notify:true,
        readOnly:false,
        value:[{ layerName: 'chirps.rainfall.precipitation', 
                    md5: '6f5ecde47d5a3303cfe9463ad57d4dc8', 
                    dcid: 0
                  }]
      }
    };
  }
  ready() {
    super.ready();
    this.root.querySelector("mint-map").style.height = window.innerHeight + "px";
    window.onresize = (function() {
              this.root.querySelector("mint-map").style.height = window.innerHeight + "px";
              if (window._mintMap && window._mintMap.onresize) {
                  window._mintMap.onresize();
              }
            }).bind(this);
  } 
}


window.customElements.define('mint-map-test-app', MintMapTestApp);
