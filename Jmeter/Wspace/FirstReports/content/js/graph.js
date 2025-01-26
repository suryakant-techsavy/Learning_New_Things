/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 410.0, "minX": 0.0, "maxY": 1645.0, "series": [{"data": [[0.0, 410.0], [0.1, 410.0], [0.2, 410.0], [0.3, 410.0], [0.4, 410.0], [0.5, 410.0], [0.6, 410.0], [0.7, 410.0], [0.8, 410.0], [0.9, 410.0], [1.0, 410.0], [1.1, 410.0], [1.2, 410.0], [1.3, 410.0], [1.4, 410.0], [1.5, 410.0], [1.6, 410.0], [1.7, 410.0], [1.8, 410.0], [1.9, 410.0], [2.0, 410.0], [2.1, 410.0], [2.2, 410.0], [2.3, 410.0], [2.4, 410.0], [2.5, 458.0], [2.6, 458.0], [2.7, 458.0], [2.8, 458.0], [2.9, 458.0], [3.0, 458.0], [3.1, 458.0], [3.2, 458.0], [3.3, 458.0], [3.4, 458.0], [3.5, 458.0], [3.6, 458.0], [3.7, 458.0], [3.8, 458.0], [3.9, 458.0], [4.0, 458.0], [4.1, 458.0], [4.2, 458.0], [4.3, 458.0], [4.4, 458.0], [4.5, 458.0], [4.6, 458.0], [4.7, 458.0], [4.8, 458.0], [4.9, 458.0], [5.0, 466.0], [5.1, 466.0], [5.2, 466.0], [5.3, 466.0], [5.4, 466.0], [5.5, 466.0], [5.6, 466.0], [5.7, 466.0], [5.8, 466.0], [5.9, 466.0], [6.0, 466.0], [6.1, 466.0], [6.2, 466.0], [6.3, 466.0], [6.4, 466.0], [6.5, 466.0], [6.6, 466.0], [6.7, 466.0], [6.8, 466.0], [6.9, 466.0], [7.0, 466.0], [7.1, 466.0], [7.2, 466.0], [7.3, 466.0], [7.4, 466.0], [7.5, 470.0], [7.6, 470.0], [7.7, 470.0], [7.8, 470.0], [7.9, 470.0], [8.0, 470.0], [8.1, 470.0], [8.2, 470.0], [8.3, 470.0], [8.4, 470.0], [8.5, 470.0], [8.6, 470.0], [8.7, 470.0], [8.8, 470.0], [8.9, 470.0], [9.0, 470.0], [9.1, 470.0], [9.2, 470.0], [9.3, 470.0], [9.4, 470.0], [9.5, 470.0], [9.6, 470.0], [9.7, 470.0], [9.8, 470.0], [9.9, 470.0], [10.0, 491.0], [10.1, 491.0], [10.2, 491.0], [10.3, 491.0], [10.4, 491.0], [10.5, 491.0], [10.6, 491.0], [10.7, 491.0], [10.8, 491.0], [10.9, 491.0], [11.0, 491.0], [11.1, 491.0], [11.2, 491.0], [11.3, 491.0], [11.4, 491.0], [11.5, 491.0], [11.6, 491.0], [11.7, 491.0], [11.8, 491.0], [11.9, 491.0], [12.0, 491.0], [12.1, 491.0], [12.2, 491.0], [12.3, 491.0], [12.4, 491.0], [12.5, 499.0], [12.6, 499.0], [12.7, 499.0], [12.8, 499.0], [12.9, 499.0], [13.0, 499.0], [13.1, 499.0], [13.2, 499.0], [13.3, 499.0], [13.4, 499.0], [13.5, 499.0], [13.6, 499.0], [13.7, 499.0], [13.8, 499.0], [13.9, 499.0], [14.0, 499.0], [14.1, 499.0], [14.2, 499.0], [14.3, 499.0], [14.4, 499.0], [14.5, 499.0], [14.6, 499.0], [14.7, 499.0], [14.8, 499.0], [14.9, 499.0], [15.0, 500.0], [15.1, 500.0], [15.2, 500.0], [15.3, 500.0], [15.4, 500.0], [15.5, 500.0], [15.6, 500.0], [15.7, 500.0], [15.8, 500.0], [15.9, 500.0], [16.0, 500.0], [16.1, 500.0], [16.2, 500.0], [16.3, 500.0], [16.4, 500.0], [16.5, 500.0], [16.6, 500.0], [16.7, 500.0], [16.8, 500.0], [16.9, 500.0], [17.0, 500.0], [17.1, 500.0], [17.2, 500.0], [17.3, 500.0], [17.4, 500.0], [17.5, 508.0], [17.6, 508.0], [17.7, 508.0], [17.8, 508.0], [17.9, 508.0], [18.0, 508.0], [18.1, 508.0], [18.2, 508.0], [18.3, 508.0], [18.4, 508.0], [18.5, 508.0], [18.6, 508.0], [18.7, 508.0], [18.8, 508.0], [18.9, 508.0], [19.0, 508.0], [19.1, 508.0], [19.2, 508.0], [19.3, 508.0], [19.4, 508.0], [19.5, 508.0], [19.6, 508.0], [19.7, 508.0], [19.8, 508.0], [19.9, 508.0], [20.0, 524.0], [20.1, 524.0], [20.2, 524.0], [20.3, 524.0], [20.4, 524.0], [20.5, 524.0], [20.6, 524.0], [20.7, 524.0], [20.8, 524.0], [20.9, 524.0], [21.0, 524.0], [21.1, 524.0], [21.2, 524.0], [21.3, 524.0], [21.4, 524.0], [21.5, 524.0], [21.6, 524.0], [21.7, 524.0], [21.8, 524.0], [21.9, 524.0], [22.0, 524.0], [22.1, 524.0], [22.2, 524.0], [22.3, 524.0], [22.4, 524.0], [22.5, 532.0], [22.6, 532.0], [22.7, 532.0], [22.8, 532.0], [22.9, 532.0], [23.0, 532.0], [23.1, 532.0], [23.2, 532.0], [23.3, 532.0], [23.4, 532.0], [23.5, 532.0], [23.6, 532.0], [23.7, 532.0], [23.8, 532.0], [23.9, 532.0], [24.0, 532.0], [24.1, 532.0], [24.2, 532.0], [24.3, 532.0], [24.4, 532.0], [24.5, 532.0], [24.6, 532.0], [24.7, 532.0], [24.8, 532.0], [24.9, 532.0], [25.0, 543.0], [25.1, 543.0], [25.2, 543.0], [25.3, 543.0], [25.4, 543.0], [25.5, 543.0], [25.6, 543.0], [25.7, 543.0], [25.8, 543.0], [25.9, 543.0], [26.0, 543.0], [26.1, 543.0], [26.2, 543.0], [26.3, 543.0], [26.4, 543.0], [26.5, 543.0], [26.6, 543.0], [26.7, 543.0], [26.8, 543.0], [26.9, 543.0], [27.0, 543.0], [27.1, 543.0], [27.2, 543.0], [27.3, 543.0], [27.4, 543.0], [27.5, 553.0], [27.6, 553.0], [27.7, 553.0], [27.8, 553.0], [27.9, 553.0], [28.0, 553.0], [28.1, 553.0], [28.2, 553.0], [28.3, 553.0], [28.4, 553.0], [28.5, 553.0], [28.6, 553.0], [28.7, 553.0], [28.8, 553.0], [28.9, 553.0], [29.0, 553.0], [29.1, 553.0], [29.2, 553.0], [29.3, 553.0], [29.4, 553.0], [29.5, 553.0], [29.6, 553.0], [29.7, 553.0], [29.8, 553.0], [29.9, 553.0], [30.0, 557.0], [30.1, 557.0], [30.2, 557.0], [30.3, 557.0], [30.4, 557.0], [30.5, 557.0], [30.6, 557.0], [30.7, 557.0], [30.8, 557.0], [30.9, 557.0], [31.0, 557.0], [31.1, 557.0], [31.2, 557.0], [31.3, 557.0], [31.4, 557.0], [31.5, 557.0], [31.6, 557.0], [31.7, 557.0], [31.8, 557.0], [31.9, 557.0], [32.0, 557.0], [32.1, 557.0], [32.2, 557.0], [32.3, 557.0], [32.4, 557.0], [32.5, 561.0], [32.6, 561.0], [32.7, 561.0], [32.8, 561.0], [32.9, 561.0], [33.0, 561.0], [33.1, 561.0], [33.2, 561.0], [33.3, 561.0], [33.4, 561.0], [33.5, 561.0], [33.6, 561.0], [33.7, 561.0], [33.8, 561.0], [33.9, 561.0], [34.0, 561.0], [34.1, 561.0], [34.2, 561.0], [34.3, 561.0], [34.4, 561.0], [34.5, 561.0], [34.6, 561.0], [34.7, 561.0], [34.8, 561.0], [34.9, 561.0], [35.0, 565.0], [35.1, 565.0], [35.2, 565.0], [35.3, 565.0], [35.4, 565.0], [35.5, 565.0], [35.6, 565.0], [35.7, 565.0], [35.8, 565.0], [35.9, 565.0], [36.0, 565.0], [36.1, 565.0], [36.2, 565.0], [36.3, 565.0], [36.4, 565.0], [36.5, 565.0], [36.6, 565.0], [36.7, 565.0], [36.8, 565.0], [36.9, 565.0], [37.0, 565.0], [37.1, 565.0], [37.2, 565.0], [37.3, 565.0], [37.4, 565.0], [37.5, 565.0], [37.6, 565.0], [37.7, 565.0], [37.8, 565.0], [37.9, 565.0], [38.0, 565.0], [38.1, 565.0], [38.2, 565.0], [38.3, 565.0], [38.4, 565.0], [38.5, 565.0], [38.6, 565.0], [38.7, 565.0], [38.8, 565.0], [38.9, 565.0], [39.0, 565.0], [39.1, 565.0], [39.2, 565.0], [39.3, 565.0], [39.4, 565.0], [39.5, 565.0], [39.6, 565.0], [39.7, 565.0], [39.8, 565.0], [39.9, 565.0], [40.0, 580.0], [40.1, 580.0], [40.2, 580.0], [40.3, 580.0], [40.4, 580.0], [40.5, 580.0], [40.6, 580.0], [40.7, 580.0], [40.8, 580.0], [40.9, 580.0], [41.0, 580.0], [41.1, 580.0], [41.2, 580.0], [41.3, 580.0], [41.4, 580.0], [41.5, 580.0], [41.6, 580.0], [41.7, 580.0], [41.8, 580.0], [41.9, 580.0], [42.0, 580.0], [42.1, 580.0], [42.2, 580.0], [42.3, 580.0], [42.4, 580.0], [42.5, 590.0], [42.6, 590.0], [42.7, 590.0], [42.8, 590.0], [42.9, 590.0], [43.0, 590.0], [43.1, 590.0], [43.2, 590.0], [43.3, 590.0], [43.4, 590.0], [43.5, 590.0], [43.6, 590.0], [43.7, 590.0], [43.8, 590.0], [43.9, 590.0], [44.0, 590.0], [44.1, 590.0], [44.2, 590.0], [44.3, 590.0], [44.4, 590.0], [44.5, 590.0], [44.6, 590.0], [44.7, 590.0], [44.8, 590.0], [44.9, 590.0], [45.0, 590.0], [45.1, 590.0], [45.2, 590.0], [45.3, 590.0], [45.4, 590.0], [45.5, 590.0], [45.6, 590.0], [45.7, 590.0], [45.8, 590.0], [45.9, 590.0], [46.0, 590.0], [46.1, 590.0], [46.2, 590.0], [46.3, 590.0], [46.4, 590.0], [46.5, 590.0], [46.6, 590.0], [46.7, 590.0], [46.8, 590.0], [46.9, 590.0], [47.0, 590.0], [47.1, 590.0], [47.2, 590.0], [47.3, 590.0], [47.4, 590.0], [47.5, 592.0], [47.6, 592.0], [47.7, 592.0], [47.8, 592.0], [47.9, 592.0], [48.0, 592.0], [48.1, 592.0], [48.2, 592.0], [48.3, 592.0], [48.4, 592.0], [48.5, 592.0], [48.6, 592.0], [48.7, 592.0], [48.8, 592.0], [48.9, 592.0], [49.0, 592.0], [49.1, 592.0], [49.2, 592.0], [49.3, 592.0], [49.4, 592.0], [49.5, 592.0], [49.6, 592.0], [49.7, 592.0], [49.8, 592.0], [49.9, 592.0], [50.0, 598.0], [50.1, 598.0], [50.2, 598.0], [50.3, 598.0], [50.4, 598.0], [50.5, 598.0], [50.6, 598.0], [50.7, 598.0], [50.8, 598.0], [50.9, 598.0], [51.0, 598.0], [51.1, 598.0], [51.2, 598.0], [51.3, 598.0], [51.4, 598.0], [51.5, 598.0], [51.6, 598.0], [51.7, 598.0], [51.8, 598.0], [51.9, 598.0], [52.0, 598.0], [52.1, 598.0], [52.2, 598.0], [52.3, 598.0], [52.4, 598.0], [52.5, 602.0], [52.6, 602.0], [52.7, 602.0], [52.8, 602.0], [52.9, 602.0], [53.0, 602.0], [53.1, 602.0], [53.2, 602.0], [53.3, 602.0], [53.4, 602.0], [53.5, 602.0], [53.6, 602.0], [53.7, 602.0], [53.8, 602.0], [53.9, 602.0], [54.0, 602.0], [54.1, 602.0], [54.2, 602.0], [54.3, 602.0], [54.4, 602.0], [54.5, 602.0], [54.6, 602.0], [54.7, 602.0], [54.8, 602.0], [54.9, 602.0], [55.0, 616.0], [55.1, 616.0], [55.2, 616.0], [55.3, 616.0], [55.4, 616.0], [55.5, 616.0], [55.6, 616.0], [55.7, 616.0], [55.8, 616.0], [55.9, 616.0], [56.0, 616.0], [56.1, 616.0], [56.2, 616.0], [56.3, 616.0], [56.4, 616.0], [56.5, 616.0], [56.6, 616.0], [56.7, 616.0], [56.8, 616.0], [56.9, 616.0], [57.0, 616.0], [57.1, 616.0], [57.2, 616.0], [57.3, 616.0], [57.4, 616.0], [57.5, 621.0], [57.6, 621.0], [57.7, 621.0], [57.8, 621.0], [57.9, 621.0], [58.0, 621.0], [58.1, 621.0], [58.2, 621.0], [58.3, 621.0], [58.4, 621.0], [58.5, 621.0], [58.6, 621.0], [58.7, 621.0], [58.8, 621.0], [58.9, 621.0], [59.0, 621.0], [59.1, 621.0], [59.2, 621.0], [59.3, 621.0], [59.4, 621.0], [59.5, 621.0], [59.6, 621.0], [59.7, 621.0], [59.8, 621.0], [59.9, 621.0], [60.0, 648.0], [60.1, 648.0], [60.2, 648.0], [60.3, 648.0], [60.4, 648.0], [60.5, 648.0], [60.6, 648.0], [60.7, 648.0], [60.8, 648.0], [60.9, 648.0], [61.0, 648.0], [61.1, 648.0], [61.2, 648.0], [61.3, 648.0], [61.4, 648.0], [61.5, 648.0], [61.6, 648.0], [61.7, 648.0], [61.8, 648.0], [61.9, 648.0], [62.0, 648.0], [62.1, 648.0], [62.2, 648.0], [62.3, 648.0], [62.4, 648.0], [62.5, 650.0], [62.6, 650.0], [62.7, 650.0], [62.8, 650.0], [62.9, 650.0], [63.0, 650.0], [63.1, 650.0], [63.2, 650.0], [63.3, 650.0], [63.4, 650.0], [63.5, 650.0], [63.6, 650.0], [63.7, 650.0], [63.8, 650.0], [63.9, 650.0], [64.0, 650.0], [64.1, 650.0], [64.2, 650.0], [64.3, 650.0], [64.4, 650.0], [64.5, 650.0], [64.6, 650.0], [64.7, 650.0], [64.8, 650.0], [64.9, 650.0], [65.0, 651.0], [65.1, 651.0], [65.2, 651.0], [65.3, 651.0], [65.4, 651.0], [65.5, 651.0], [65.6, 651.0], [65.7, 651.0], [65.8, 651.0], [65.9, 651.0], [66.0, 651.0], [66.1, 651.0], [66.2, 651.0], [66.3, 651.0], [66.4, 651.0], [66.5, 651.0], [66.6, 651.0], [66.7, 651.0], [66.8, 651.0], [66.9, 651.0], [67.0, 651.0], [67.1, 651.0], [67.2, 651.0], [67.3, 651.0], [67.4, 651.0], [67.5, 653.0], [67.6, 653.0], [67.7, 653.0], [67.8, 653.0], [67.9, 653.0], [68.0, 653.0], [68.1, 653.0], [68.2, 653.0], [68.3, 653.0], [68.4, 653.0], [68.5, 653.0], [68.6, 653.0], [68.7, 653.0], [68.8, 653.0], [68.9, 653.0], [69.0, 653.0], [69.1, 653.0], [69.2, 653.0], [69.3, 653.0], [69.4, 653.0], [69.5, 653.0], [69.6, 653.0], [69.7, 653.0], [69.8, 653.0], [69.9, 653.0], [70.0, 658.0], [70.1, 658.0], [70.2, 658.0], [70.3, 658.0], [70.4, 658.0], [70.5, 658.0], [70.6, 658.0], [70.7, 658.0], [70.8, 658.0], [70.9, 658.0], [71.0, 658.0], [71.1, 658.0], [71.2, 658.0], [71.3, 658.0], [71.4, 658.0], [71.5, 658.0], [71.6, 658.0], [71.7, 658.0], [71.8, 658.0], [71.9, 658.0], [72.0, 658.0], [72.1, 658.0], [72.2, 658.0], [72.3, 658.0], [72.4, 658.0], [72.5, 678.0], [72.6, 678.0], [72.7, 678.0], [72.8, 678.0], [72.9, 678.0], [73.0, 678.0], [73.1, 678.0], [73.2, 678.0], [73.3, 678.0], [73.4, 678.0], [73.5, 678.0], [73.6, 678.0], [73.7, 678.0], [73.8, 678.0], [73.9, 678.0], [74.0, 678.0], [74.1, 678.0], [74.2, 678.0], [74.3, 678.0], [74.4, 678.0], [74.5, 678.0], [74.6, 678.0], [74.7, 678.0], [74.8, 678.0], [74.9, 678.0], [75.0, 679.0], [75.1, 679.0], [75.2, 679.0], [75.3, 679.0], [75.4, 679.0], [75.5, 679.0], [75.6, 679.0], [75.7, 679.0], [75.8, 679.0], [75.9, 679.0], [76.0, 679.0], [76.1, 679.0], [76.2, 679.0], [76.3, 679.0], [76.4, 679.0], [76.5, 679.0], [76.6, 679.0], [76.7, 679.0], [76.8, 679.0], [76.9, 679.0], [77.0, 679.0], [77.1, 679.0], [77.2, 679.0], [77.3, 679.0], [77.4, 679.0], [77.5, 690.0], [77.6, 690.0], [77.7, 690.0], [77.8, 690.0], [77.9, 690.0], [78.0, 690.0], [78.1, 690.0], [78.2, 690.0], [78.3, 690.0], [78.4, 690.0], [78.5, 690.0], [78.6, 690.0], [78.7, 690.0], [78.8, 690.0], [78.9, 690.0], [79.0, 690.0], [79.1, 690.0], [79.2, 690.0], [79.3, 690.0], [79.4, 690.0], [79.5, 690.0], [79.6, 690.0], [79.7, 690.0], [79.8, 690.0], [79.9, 690.0], [80.0, 700.0], [80.1, 700.0], [80.2, 700.0], [80.3, 700.0], [80.4, 700.0], [80.5, 700.0], [80.6, 700.0], [80.7, 700.0], [80.8, 700.0], [80.9, 700.0], [81.0, 700.0], [81.1, 700.0], [81.2, 700.0], [81.3, 700.0], [81.4, 700.0], [81.5, 700.0], [81.6, 700.0], [81.7, 700.0], [81.8, 700.0], [81.9, 700.0], [82.0, 700.0], [82.1, 700.0], [82.2, 700.0], [82.3, 700.0], [82.4, 700.0], [82.5, 737.0], [82.6, 737.0], [82.7, 737.0], [82.8, 737.0], [82.9, 737.0], [83.0, 737.0], [83.1, 737.0], [83.2, 737.0], [83.3, 737.0], [83.4, 737.0], [83.5, 737.0], [83.6, 737.0], [83.7, 737.0], [83.8, 737.0], [83.9, 737.0], [84.0, 737.0], [84.1, 737.0], [84.2, 737.0], [84.3, 737.0], [84.4, 737.0], [84.5, 737.0], [84.6, 737.0], [84.7, 737.0], [84.8, 737.0], [84.9, 737.0], [85.0, 777.0], [85.1, 777.0], [85.2, 777.0], [85.3, 777.0], [85.4, 777.0], [85.5, 777.0], [85.6, 777.0], [85.7, 777.0], [85.8, 777.0], [85.9, 777.0], [86.0, 777.0], [86.1, 777.0], [86.2, 777.0], [86.3, 777.0], [86.4, 777.0], [86.5, 777.0], [86.6, 777.0], [86.7, 777.0], [86.8, 777.0], [86.9, 777.0], [87.0, 777.0], [87.1, 777.0], [87.2, 777.0], [87.3, 777.0], [87.4, 777.0], [87.5, 823.0], [87.6, 823.0], [87.7, 823.0], [87.8, 823.0], [87.9, 823.0], [88.0, 823.0], [88.1, 823.0], [88.2, 823.0], [88.3, 823.0], [88.4, 823.0], [88.5, 823.0], [88.6, 823.0], [88.7, 823.0], [88.8, 823.0], [88.9, 823.0], [89.0, 823.0], [89.1, 823.0], [89.2, 823.0], [89.3, 823.0], [89.4, 823.0], [89.5, 823.0], [89.6, 823.0], [89.7, 823.0], [89.8, 823.0], [89.9, 823.0], [90.0, 946.0], [90.1, 946.0], [90.2, 946.0], [90.3, 946.0], [90.4, 946.0], [90.5, 946.0], [90.6, 946.0], [90.7, 946.0], [90.8, 946.0], [90.9, 946.0], [91.0, 946.0], [91.1, 946.0], [91.2, 946.0], [91.3, 946.0], [91.4, 946.0], [91.5, 946.0], [91.6, 946.0], [91.7, 946.0], [91.8, 946.0], [91.9, 946.0], [92.0, 946.0], [92.1, 946.0], [92.2, 946.0], [92.3, 946.0], [92.4, 946.0], [92.5, 998.0], [92.6, 998.0], [92.7, 998.0], [92.8, 998.0], [92.9, 998.0], [93.0, 998.0], [93.1, 998.0], [93.2, 998.0], [93.3, 998.0], [93.4, 998.0], [93.5, 998.0], [93.6, 998.0], [93.7, 998.0], [93.8, 998.0], [93.9, 998.0], [94.0, 998.0], [94.1, 998.0], [94.2, 998.0], [94.3, 998.0], [94.4, 998.0], [94.5, 998.0], [94.6, 998.0], [94.7, 998.0], [94.8, 998.0], [94.9, 998.0], [95.0, 1020.0], [95.1, 1020.0], [95.2, 1020.0], [95.3, 1020.0], [95.4, 1020.0], [95.5, 1020.0], [95.6, 1020.0], [95.7, 1020.0], [95.8, 1020.0], [95.9, 1020.0], [96.0, 1020.0], [96.1, 1020.0], [96.2, 1020.0], [96.3, 1020.0], [96.4, 1020.0], [96.5, 1020.0], [96.6, 1020.0], [96.7, 1020.0], [96.8, 1020.0], [96.9, 1020.0], [97.0, 1020.0], [97.1, 1020.0], [97.2, 1020.0], [97.3, 1020.0], [97.4, 1020.0], [97.5, 1645.0], [97.6, 1645.0], [97.7, 1645.0], [97.8, 1645.0], [97.9, 1645.0], [98.0, 1645.0], [98.1, 1645.0], [98.2, 1645.0], [98.3, 1645.0], [98.4, 1645.0], [98.5, 1645.0], [98.6, 1645.0], [98.7, 1645.0], [98.8, 1645.0], [98.9, 1645.0], [99.0, 1645.0], [99.1, 1645.0], [99.2, 1645.0], [99.3, 1645.0], [99.4, 1645.0], [99.5, 1645.0], [99.6, 1645.0], [99.7, 1645.0], [99.8, 1645.0], [99.9, 1645.0]], "isOverall": false, "label": "Google-HTTP-Request-Sampler_850000", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 15.0, "series": [{"data": [[600.0, 11.0], [700.0, 3.0], [1600.0, 1.0], [400.0, 6.0], [800.0, 1.0], [900.0, 2.0], [500.0, 15.0], [1000.0, 1.0]], "isOverall": false, "label": "Google-HTTP-Request-Sampler_850000", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 26.0, "series": [{"data": [[0.0, 5.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 9.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 26.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.125, "minX": 1.66227624E12, "maxY": 1.125, "series": [{"data": [[1.66227624E12, 1.125]], "isOverall": false, "label": "No-of-user(Thread Group)_${a}", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66227624E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 617.3428571428572, "minX": 1.0, "maxY": 867.4, "series": [{"data": [[2.0, 867.4], [1.0, 617.3428571428572]], "isOverall": false, "label": "Google-HTTP-Request-Sampler_850000", "isController": false}, {"data": [[1.125, 648.6]], "isOverall": false, "label": "Google-HTTP-Request-Sampler_850000-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 2.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 124.66666666666667, "minX": 1.66227624E12, "maxY": 550266.0333333333, "series": [{"data": [[1.66227624E12, 550266.0333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66227624E12, 124.66666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66227624E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 648.6, "minX": 1.66227624E12, "maxY": 648.6, "series": [{"data": [[1.66227624E12, 648.6]], "isOverall": false, "label": "Google-HTTP-Request-Sampler_850000", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66227624E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 160.42499999999995, "minX": 1.66227624E12, "maxY": 160.42499999999995, "series": [{"data": [[1.66227624E12, 160.42499999999995]], "isOverall": false, "label": "Google-HTTP-Request-Sampler_850000", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66227624E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 65.82499999999999, "minX": 1.66227624E12, "maxY": 65.82499999999999, "series": [{"data": [[1.66227624E12, 65.82499999999999]], "isOverall": false, "label": "Google-HTTP-Request-Sampler_850000", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66227624E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 410.0, "minX": 1.66227624E12, "maxY": 998.0, "series": [{"data": [[1.66227624E12, 998.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66227624E12, 910.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66227624E12, 998.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66227624E12, 998.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66227624E12, 410.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66227624E12, 583.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66227624E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 524.0, "minX": 1.0, "maxY": 708.0, "series": [{"data": [[2.0, 524.0], [1.0, 708.0], [3.0, 565.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 650.0], [2.0, 590.0], [3.0, 581.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 80.0, "minX": 1.0, "maxY": 161.0, "series": [{"data": [[2.0, 152.0], [1.0, 120.0], [3.0, 80.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 152.0], [2.0, 161.0], [3.0, 161.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.66227624E12, "maxY": 0.6666666666666666, "series": [{"data": [[1.66227624E12, 0.6666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66227624E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.66227624E12, "maxY": 0.6666666666666666, "series": [{"data": [[1.66227624E12, 0.6666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66227624E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.66227624E12, "maxY": 0.43333333333333335, "series": [{"data": [[1.66227624E12, 0.43333333333333335]], "isOverall": false, "label": "Google-HTTP-Request-Sampler_850000-failure", "isController": false}, {"data": [[1.66227624E12, 0.23333333333333334]], "isOverall": false, "label": "Google-HTTP-Request-Sampler_850000-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66227624E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.66227624E12, "maxY": 0.43333333333333335, "series": [{"data": [[1.66227624E12, 0.23333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.66227624E12, 0.43333333333333335]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66227624E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

