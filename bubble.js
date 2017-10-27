//bubble chart
var diameter = 300;
var format = d3.format(",d");
var colors = ['#FFD700', '#57B28D','#FBAE4B', '#F16045', '#D12258', '#5E4E73', '#C2B49B', '#734743', '#80A464', '#435773'];
var color = d3.scale.category10().range(colors);
var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter * 1.4, diameter]) //size of the bubble chart
    .padding(1);
var svg = d3.select("body").select("#svg_bubble");
var tooltip = d3.select("body") //set the tooltip
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("color", "white")
    .style("background-color", "rgba(0, 0, 0, 0.75)")
    .style("border-radius", "6px")
    .style("padding", "5px")
    .style("font", "12px PT Sans")
    .text("tooltip");
var habbits = [
  {category: "Asia", name: "Afghanistan", alt: "death count: 32,756", value: 4.1},
  {category: "Asia", name: "Iraq", alt: "death count: 70,436", value: 8.9},
  {category: "Africa", name: "Nigeria", alt: "death count: 20,359", value: 2.6},
  {category: "Asia", name: "Pakistan", alt: "death count: 19,585", value: 2.5},
  {category: "Asia", name: "Syria", alt: "death count: 12,610", value: 1.59},
  {category: "Asia", name: "India", alt: "death count: 9,969", value: 1.26},
  {category: "Asia", name: "Yemen", alt: "death count: 7,946", value: 1},
  {category: "Africa", name: "Somalia", alt: "death count: 7,924", value: 1},
  {category: "Africa", name: "Algeria", alt: "death count: 4,146", value: 0.52},
  {category: "Africa", name: "Philippines", alt: "death count: 3,957", value: 0.50},

];
var node = svg.selectAll(".node")
    .data(bubble.nodes({children:habbits}).filter(function(d) { return !d.children; }))
  .enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
node.append("circle")
    .attr("r", function(d) { return d.r; })
    .style("fill", function(d) { return color(d.category); })
    .on("mouseover", function(d) {
            //d3.select(this.parentNode).select("text").text(d.alt);
            d3.select(this).style("fill", function(d) { return "rgba(220,220,220,0.8)"; });
            //tooltip.text(d.name + " takes up about " + (d.value*100) + "% of my spare time");
            tooltip.text(d.alt);
            tooltip.style("visibility", "visible");
    })
    .on("mousemove", function() {
        return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
    })
    .on("mouseout", function(){
        //d3.select(this.parentNode).select("text").text(function(d) { return d.name; });
        d3.select(this).style("fill", function(d) { return color(d.category); });
        return tooltip.style("visibility", "hidden");
    });
node.append("text")
    .attr("dy", ".3em")
    .style("text-anchor", "middle")
    .style("pointer-events", "none")
    .style("font-size", function(d){ return 18/60*d.r + "px"}) //adjust font-size based on node radius
    .text(function(d) { return d.name; });
    var legend = d3.select("#bubble").append("svg").attr("id", "legend");
    legend.append("rect").attr("id", "legend1")
        .attr("x", "30").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", color("Asia"));
    legend.append("text").attr("x", "60").attr("y", "24").attr("font-size", "12px").text("Asia");
    legend.append("rect").attr("id", "legend2")
        .attr("x", "110").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", color("Africa"));
    legend.append("text").attr("x", "140").attr("y", "24").attr("font-size", "12px").text("Africa");
    legend.append("rect").attr("id", "legend4")
        .attr("x", "190").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", color("North America"));
    legend.append("text").attr("x", "220").attr("y", "24").attr("font-size", "12px").text("North America");
    legend.append("rect").attr("id", "legend3")
        .attr("x", "330").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", color("Europe"));
    legend.append("text").attr("x", "360").attr("y", "24").attr("font-size", "12px").text("Europe");

function filter(category){
    d3.select(".dropbtn").text(category);
    switch(category){
        case 'all':
            svg.selectAll(".node")
               .select("circle")
               .attr("opacity", 1);
            svg.selectAll(".node")
               .select("text")
               .attr("opacity", 1);
            break;
        default:
            svg.selectAll(".node")
               .select("circle")
               .attr("opacity", function(d){ return d.category == category? 1:0;});
            svg.selectAll(".node")
               .select("text")
               .attr("opacity", function(d){ return d.category == category? 1:0;});
            break;
    }
}

//second bubble chart
var diameter = 300;
var format = d3.format(",d");
var colors = ['#FFD700', '#57B28D','#FBAE4B', '#F16045', '#D12258', '#5E4E73', '#C2B49B', '#734743', '#80A464', '#435773'];
var color = d3.scale.category10().range(colors);
var bubble2 = d3.layout.pack()
    .sort(null)
    .size([diameter * 1.4, diameter]) //size of the bubble chart
    .padding(1);
var svg = d3.select("body").select("#svg_bubble2");
var tooltip = d3.select("body") //set the tooltip
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("color", "white")
    .style("background-color", "rgba(0, 0, 0, 0.75)")
    .style("border-radius", "6px")
    .style("padding", "5px")
    .style("font", "12px PT Sans")
    .text("tooltip");
var habbits = [
  {category: "Asia", name: "Afghanistan", alt: "17.2%", value: 4.1},
  {category: "Africa", name: "Iraq", alt: " ", value: 0},
  {category: "Asia", name: "Iraq", alt: "24.8%", value: 8.9},
  {category: "North America", name: "The US", alt: "12.9%", value: 2.6},
  {category: "Asia", name: "Pakistan", alt: "11.6%", value: 2.5},
  {category: "Europe", name: "France", alt: "10.8%", value: 1.59},
  {category: "Asia", name: "Israel", alt: "10.6%", value: 1.26},
  {category: "Asia", name: "Syria", alt: "10.5%", value: 1},
  {category: "Asia", name: "Russia", alt: "9.0%", value: 1},
  {category: "Asia", name: "Iran", alt: "9.0%", value: 0.52},
  {category: "Europe", name: "Germany", alt: "8.1%", value: 0.50},

];
var node = svg.selectAll(".node")
    .data(bubble2.nodes({children:habbits}).filter(function(d) { return !d.children; }))
  .enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
node.append("circle")
    .attr("r", function(d) { return d.r; })
    .style("fill", function(d) { return color(d.category); })
    .on("mouseover", function(d) {
            //d3.select(this.parentNode).select("text").text(d.alt);
            d3.select(this).style("fill", function(d) { return "rgba(220,220,220,0.8)"; });
            //tooltip.text(d.name + " takes up about " + (d.value*100) + "% of my spare time");
            tooltip.text(d.alt);
            tooltip.style("visibility", "visible");
    })
    .on("mousemove", function() {
        return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
    })
    .on("mouseout", function(){
        //d3.select(this.parentNode).select("text").text(function(d) { return d.name; });
        d3.select(this).style("fill", function(d) { return color(d.category); });
        return tooltip.style("visibility", "hidden");
    });
node.append("text")
    .attr("dy", ".3em")
    .style("text-anchor", "middle")
    .style("pointer-events", "none")
    .style("font-size", function(d){ return 18/60*d.r + "px"}) //adjust font-size based on node radius
    .text(function(d) { return d.name; });
/*
var legend = d3.select("#bubble2").append("svg").attr("id", "legend");
legend.append("rect").attr("id", "legend1")
    .attr("x", "380").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", color("Asia"));
legend.append("text").attr("x", "405").attr("y", "24").attr("font-size", "12px").text("Asia");
legend.append("rect").attr("id", "legend2")
    .attr("x", "510").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", color("Africa"));
legend.append("text").attr("x", "535").attr("y", "24").attr("font-size", "12px").text("Africa");
legend.append("rect").attr("id", "legend3")
    .attr("x", "640").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", color("North America"));
legend.append("text").attr("x", "665").attr("y", "24").attr("font-size", "12px").text("North America");
legend.append("rect").attr("id", "legend4")
    .attr("x", "800").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", color("Europe"));
legend.append("text").attr("x", "825").attr("y", "24").attr("font-size", "12px").text("Europe");
*/
function filter(category){
    d3.select(".dropbtn").text(category);
    switch(category){
        case 'all':
            svg.selectAll(".node")
               .select("circle")
               .attr("opacity", 1);
            svg.selectAll(".node")
               .select("text")
               .attr("opacity", 1);
            break;
        default:
            svg.selectAll(".node")
               .select("circle")
               .attr("opacity", function(d){ return d.category == category? 1:0;});
            svg.selectAll(".node")
               .select("text")
               .attr("opacity", function(d){ return d.category == category? 1:0;});
            break;
    }
}
