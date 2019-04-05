import React, { useEffect, useState } from "react";
import {useTheme, create, percent, Label, ExportMenu, ColorSet, color} from "@amcharts/amcharts4/core";
import {PieChart, PieSeries, Legend} from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function customTheme(target) {
  am4themes_animated(target);
  if (target instanceof ColorSet) {
    target.list = [
      color("red"),
      color("blue"),
      color("green")
    ];
  }
}

useTheme(customTheme);

const ChartsMaps = () => {
  let [chart] = useState();

  useEffect(() => {
    chart = create("chartdiv", PieChart);
    // chart.hiddenState.properties.opacity = 0;

    // Add data
    chart.data = [
      {
        type: 'remaining',
        balance: "Future remaining balance",
        amount: 1.25,
        amountLabel: 1.25
      },
      {
        type: 'pending',
        balance: "My pending transactions",
        amount: 0.15,
        amountLabel: -0.15
      },
      {
        type: 'other',
        balance: "Other pending transactions",
        amount: 0.4,
        amountLabel: -0.4
      }
    ];
    chart.numberFormatter.numberFormat = "#,###";

    // Add and configure Series
    var pieSeries = chart.series.push(new PieSeries());
    pieSeries.dataFields.value = "amount";
    pieSeries.dataFields.category = "balance";

    pieSeries.slices.template.events.on("hit", function(ev) {
      console.log("clicked on ", ev, ev.target.dataItem.dataContext.type);
    }, this);

    // Let's cut a hole in our Pie chart the size of 40% the radius
    chart.innerRadius = percent(45);

    // Put a thick white border around each Slice
    // pieSeries.slices.template.stroke = am4core.color("#4a2abb");
    // pieSeries.slices.template.strokeWidth = 2;
    // pieSeries.slices.template.strokeOpacity = 1;

    // Add a legend
    chart.legend = new Legend();
    let markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 150;
    markerTemplate.height = 10;
    chart.legend.useDefaultMarker = true;
    pieSeries.legendSettings.labelText = "[font-size: 30px]{amountLabel}[/]B\n{balance}";
    pieSeries.slices.template.tooltipText = "[font-size: 30px]{amountLabel}[/]B\n{balance}";
    // chart.legend.labels.template.text = "{amount}{balance}";
    chart.legend.valueLabels.template.text = "";
    chart.exporting.menu = new ExportMenu();
    chart.hiddenState.properties.innerRadius = percent(0);
    chart.hiddenState.properties.radius = percent(10);
    chart.legend.position = "top";
    chart.legend.contentAlign = "center"

    // let marker = chart.legend.markers.template.children.getIndex(0);
    //
    // marker.width = 150;
    // marker.height = 10;

    // Enable respnsivity
    chart.responsive.enabled = true;

    // pieSeries.labels.template.disabled = true;
    // pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.text = "[font-size: 30px]{amountLabel}[/]B\n{balance}";

    pieSeries.hiddenState.properties.endAngle = -90;

    var label = chart.seriesContainer.createChild(Label);
    label.text = "1.80[font-size: 15px]B[/]";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 40;

    var label2 = chart.seriesContainer.createChild(Label);
    label2.text = "Total available balance";
    label2.horizontalCenter = "middle";
    // label2.verticalCenter = "top";
    // label2.textValign = 'bottom';
    label2.fontSize = '100%';
    label2.fullWords = false;
    //label2.maxWidth = 100;
    label2.paddingTop = 20;
    label2.ellipsis = true;
    label2.truncate = true;
    label2.wrap = true;
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <>
      <h2>ChartsMaps v4 - npm(15) - responsive(8/10)</h2>
      <div id="chartdiv" style={{ width: "100%", height: "500px" }} />
    </>
  );
};

export default ChartsMaps;
