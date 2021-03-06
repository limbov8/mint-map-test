import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'mint-time/mint-time.js'
/**
 * @customElement
 * @polymer
 */
class MintTimeTestApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <mint-time style="height: 200px"></mint-time>
    `;
  }
  static get properties() {
    return {
      variables: {
        type: Array,
        notify:true,
        readOnly:false,
        value:[{ name: 'precipitation', 
                    stdname: 'precipitation-south-sudan', 
                    md5: '594f8555a2ae43a5e8c566bed938afe6', 
                    uri: 'https://mint.isi.edu/dcat/variables/precipitation-south-sudan?file_name=https%3A%2F%2Fedcintl.cr.usgs.gov%2Ffews_geoengine4%2Frest%2Fimage%2Fgeotiff%2Fdataset%2Ffewschirps%2Freg'
                  },
                  { name: 'landuse', 
                    stdname: 'landuse-south-sudan', 
                    md5: 'f0ecaaa8d47cbbc391a5c1a807b2eca3', 
                    uri: 'https://mint.isi.edu/dcat/variables/landuse-south-sudan?file_name=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Ddownload%26id%3D1eVToBB0ZLL1LGspPqju_Bo7a7yk99KJj&variable_i'
                  }]
      }
    };
  }
  ready() {
    super.ready();
    this.root.querySelector("mint-time").style.height = window.innerHeight + "px";
    window.onresize = (function() {
              this.root.querySelector("mint-time").style.height = window.innerHeight + "px";
              if (window._mintMap && window._mintMap.onresize) {
                  window._mintMap.onresize();
              }
            }).bind(this);
  } 
}

window.customElements.define('mint-time-test-app', MintTimeTestApp);
