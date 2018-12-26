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
        value:[{ name: 'precipitation', 
                    stdname: 'atmosphere_water__one-month_time_integral_of_precipitation_leq-volume_flux', 
                    md5: '7ba0f437be4d71c812e6006ce5a65f2e', 
                    uri: 'https://mint.isi.edu/dcat/variables/atmosphere_water__one-month_time_integral_of_precipitation_leq-volume_flux?file_location=33db03abf5efa9367b390c552a24a3b3&time_range=2018-03-01T00%3A00%3A00%2F2018-04-01T00%3A00%3A00&spatial_coverage=0a4f705eb66d66ccab88e6801ce21513&short_name=precipitation'
                  },
                  { name: 'landuse', 
                    stdname: 'Land_Cover_Type', 
                    md5: '486e33f628fd222172b7d8438b9cb651', 
                    uri: 'https://mint.isi.edu/dcat/variables/Land_Cover_Type?file_location=1176557f3eeaf2b58c7cd22b877857c9&time_range=&spatial_coverage=d41d8cd98f00b204e9800998ecf8427e&short_name=landuse'
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
