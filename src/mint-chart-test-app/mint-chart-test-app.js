import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'mint-chart/mint-chart.js'

/**
 * @customElement
 * @polymer
 */
class MintChartTestApp extends PolymerElement {
  static get template() {
    return html`
      <input style="appearance: none; outline:none;background-color: none; border: 1px solid #ff4a56; line-height: 0; font-size: 17px; width: 50%; margin: 20px auto; display: block; box-sizing: border-box; padding: 10px 15px; border-radius: 60px; color: #ff4a56; font-weight: 100; letter-spacing: 0.01em; position: relative;" name="viz_config_id" value="{{viz_config_id::change}}" placeholder="Input the viz_config_id, UUID only">
      <mint-chart style="width: 800px; min-height:400px;" viz_config_id="[[viz_config_id]]">
      <br><br><br><hr>
      Using a fake dataset_id to load dot chart
      <mint-chart style="width: 600px" viz_config_id="abc-dataset-id-of-corn-dot-chart"></mint-chart>
      <hr><br>
      <mint-chart style="width: 600px" config="[[configBarChart]]"></mint-chart>
      <hr><br>
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
      viz_config_id:{
        type: String,
        notify:true,
        readOnly:false,
        value: ""
      },
      configBarChart: {
        type: Object,
        notify:true,
        readOnly:false,
        value:{name: "climatology", type:"bar", data:""}
      },
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
