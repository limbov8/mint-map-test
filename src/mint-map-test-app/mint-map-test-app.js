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
        value:[{ layerName: 'South_Sudan_population_density', 
                 md5: 'f9a36bd83beacc40fd2089c16996bbb3', 
                 dcid: 0
                }
              ]
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
