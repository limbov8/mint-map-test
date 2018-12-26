import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'mint-chart/mint-chart.js'
/**
 * @customElement
 * @polymer
 */
class MintChartTestApp extends PolymerElement {
  static get template() {
    return html`
      <mint-chart style="width: 600px" config="[[configPie2Chart]]"></mint-chart>
      <hr><br>
      <mint-chart style="width: 600px" config="[[configPieChart]]"></mint-chart>
      <hr><br>
      <mint-chart style="width: 600px" config="[[configBubbleBaseline]]"></mint-chart>
      <hr><br>
      <mint-chart style="width: 600px" config="[[configBubblePrecip_5_percent_dec]]"></mint-chart>
      <hr><br>
      <mint-chart style="width: 600px" config="[[configBubblePrecip_5_percent_inc]]"></mint-chart>
      <hr><br>
      <mint-chart style="width: 600px" config="[[configCombine]]"></mint-chart>
    `;
  }
  static get properties() {
    return {
      configCombine: {
        type: Object,
        notify:true,
        readOnly:false,
        value:{name: "", type:"combine", data:""}
      },
      configPieChart: {
        type: Object,
        notify:true,
        readOnly:false,
        value:{name: "", type:"pie", data:""}
      },
      configPie2Chart: {
        type: Object,
        notify:true,
        readOnly:false,
        value:{name: "second", type:"pie", data:""}
      },
      configBubbleBaseline: {
        type: Object,
        notify:true,
        readOnly:false,
        value:{name: "MINTlanduse Baseline 20180709", type:"bubble", data:"http://jonsnow.usc.edu:8081/mintmap/csv/MINTlanduse-baseline-20180709.json"}
      },
      configBubblePrecip_5_percent_dec:{
        type: Object,
        notify:true,
        readOnly:false,
        value:{name: "MINTlanduse Precip_5_percent_dec 20180709", type:"bubble", data:"http://jonsnow.usc.edu:8081/mintmap/csv/MINTlanduse-precip_5_percent_dec-20180709.json"}
      },
      configBubblePrecip_5_percent_inc:{
        type: Object,
        notify:true,
        readOnly:false,
        value:{name: "MINTlanduse Precip_5_percent_inc 20180709", type:"bubble", data:"http://jonsnow.usc.edu:8081/mintmap/csv/MINTlanduse-precip_5_percent_inc-20180709.json"}
      },
    };
  }
  ready() {
    super.ready();
  }
}

window.customElements.define('mint-chart-test-app', MintChartTestApp);
