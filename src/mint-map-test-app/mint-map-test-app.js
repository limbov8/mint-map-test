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
        value:[{ 
                  layerName: 'South_Sudan_population_density', 
                  dataset_id: '90db5c2f-ab2d-4086-8e07-72edb43545cd'
              },{ 
                  layerName: 'South Sudan Roads', 
                  dataset_id: '7d506309-5943-4342-b4e4-b65b88fee654'
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
    // let self = this;
    // setTimeout(function () {
    //   self.variables = [{
    //              dataset_id: '7b537a84-3f89-4948-bc1c-c201c2b89b87'
    //           }];
    // }, 5000)
  } 

}


window.customElements.define('mint-map-test-app', MintMapTestApp);
