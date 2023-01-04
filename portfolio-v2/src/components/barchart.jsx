import React from "react";
import * as d3 from "d3";
import { useD3 } from "../hooks/useD3";

export default function BarChart() {
  const ref = useD3( (svg) =>{
    const barGraph = d3.select("svg#barGraph");
  const barTotalWidth = barGraph.attr("width");
  const barTotalHeight = barGraph.attr("height");
  const barGraphMargin = {
    top: 10,
    right: 160,
    bottom: 50,
    left: 70,
  };
  const barGraphWidth =
    barTotalWidth - barGraphMargin.left - barGraphMargin.right;
  const barGraphHeight =
    barTotalHeight - barGraphMargin.top - barGraphMargin.bottom - 10;
  const barGraphAnnotations = barGraph.append("g").attr("id", "annotations");

  barChartSales = vgsalesRaw.filter((vg) => {
    return vg["Year"] != "N/A" && vg["Year"] <= "2015";
  });

  const yearConsoleCount = [];
  for (const i = 1980; i <= 2015; i++) {
    yearConsoleCount.push({
      Year: i,
      Nintendo: 0,
      Microsoft: 0,
      Sony: 0,
      Pc: 0,
      Atari: 0,
      Sega: 0,
      Arcade: 0,
      Total: 0,
    });
  }

  function yearConsoleCountEntry(vg, cList, c) {
    if (cList.includes(vg["Platform"])) {
      vg["Console"] = c;
      const year = vg["Year"] - 1980;
      const sales = parseFloat(vg["Global_Sales"]);
      yearConsoleCount[year][c] += sales;
      yearConsoleCount[year]["Total"] += sales;
    }
  }

  barChartSales.forEach((vg, i) => {
    yearConsoleCountEntry(
      vg,
      ["Wii", "NES", "GB", "DS", "SNES", "GBA", "3DS", "N64", "GC", "WiiU"],
      "Nintendo"
    );
    yearConsoleCountEntry(vg, ["X360", "XB", "XOne"], "Microsoft");
    yearConsoleCountEntry(
      vg,
      ["PS3", "PS2", "PS4", "PS", "PSP", "PSV"],
      "Sony"
    );
    yearConsoleCountEntry(vg, ["PC"], "Pc");
    yearConsoleCountEntry(vg, ["2600"], "Atari");
    yearConsoleCountEntry(vg, ["GEN", "DC", "SAT", "SCD", "GG"], "Sega");
    yearConsoleCountEntry(vg, ["NG"], "Arcade");
  });

  // Set up scales

  const yearExtent = d3.extent(barChartSales, (vg) => parseInt(vg["Year"]));
  yearExtent[1] += 1;
  const yearScale = d3
    .scaleLinear()
    .domain(yearExtent)
    .range([0, barGraphWidth]);

  const percentScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, barGraphHeight]);

  colorPalette = [
    "#fa8901",
    "#f43545",
    "#808080",
    "#00c2de",
    "#fad717",
    "#00418d",
    "#5f2879",
    "#00ba71",
  ];
  const scaleOrdinal = d3.scaleOrdinal(colorPalette);

  // Create axes and axis labels

  const bottomAxis = d3.axisBottom(yearScale);
  barGraphAnnotations
    .append("g")
    .attr("class", "x axis")
    .attr(
      "transform",
      `translate(${barGraphMargin.left}, ${
        barGraphHeight + barGraphMargin.top + 10
      })`
    )
    .call(bottomAxis.tickFormat(d3.format("d")));

  const leftAxis = d3.axisLeft(percentScale);
  barGraphAnnotations
    .append("g")
    .attr("class", "y axis")
    .attr(
      "transform",
      `translate(${barGraphMargin.left - 10}, ${barGraphMargin.top})`
    )
    .call(
      leftAxis.tickFormat((p) => {
        return Math.round((1 - p) * 100) + "%";
      })
    );

  barGraphAnnotations
    .append("text")
    .attr("class", "x label")
    .attr("text-anchor", "middle")
    .attr("x", barGraphWidth / 2 + barGraphMargin.left)
    .attr("y", barGraphHeight + barGraphMargin.top + 50)
    .text("Year Released");

  barGraphAnnotations
    .append("text")
    .attr("class", "y label")
    .attr("text-anchor", "middle")
    .attr("y", 5)
    .attr("x", -barGraphHeight / 2 + barGraphMargin.top)
    .attr("dy", ".6em")
    .attr("transform", "rotate(-90)")
    .text("Percent of Total Unit Sales");

  // Create bars (only if console has at least 1% of sales in a year)

  const rectWidth = barGraphWidth / (yearExtent[1] - yearExtent[0]) - 1;

  yearConsoleCount.forEach((year, i) => {
    total = year["Total"];
    y = year["Year"];
    const nextFloor = 0;
    for (const c in year) {
      if (c != "Total" && c != "Year") {
        percent = year[c] / total;
        if (percent >= 0.01) {
          barGraph
            .append("rect")
            .attr("x", yearScale(y) + barGraphMargin.left)
            .attr("y", nextFloor + barGraphMargin.top)
            .attr("originalPosition", nextFloor + barGraphMargin.top)
            .attr("width", rectWidth)
            .attr("height", percentScale(year[c] / total))
            .style("fill", scaleOrdinal(c))
            .attr("originalFill", scaleOrdinal(c))
            .attr("class", `bar ${c}`);
          nextFloor += percentScale(year[c] / total);
        }
      }
    }
    if (nextFloor < barGraphHeight) {
      barGraph
        .append("rect")
        .attr("x", yearScale(y) + barGraphMargin.left)
        .attr("y", nextFloor + barGraphMargin.top)
        .attr("originalPosition", nextFloor + barGraphMargin.top)
        .attr("width", rectWidth)
        .attr("height", barGraphHeight - nextFloor)
        .style("fill", scaleOrdinal("Other"))
        .attr("originalFill", scaleOrdinal("Other"))
        .attr("class", "bar Other");
    }
     });
  )
  }
  
 
  

  return (
    <>
      <h2>Copies Sold by Company</h2>
      <div
        id="graph"
        style="position: relative; overflow: visible; font-family: 'Quicksand', sans-serif;"
      >
        <svg id="barGraph" height="450" width="800"></svg>
      </div>
    </>
  );
}
