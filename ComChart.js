
//MY CODE
// var margin = {top: 30, right: 120, bottom: 0, left: 400},
var margin = {top: 30, right: 20, bottom: 0, left: 40},
    // width = 960 - margin.left - margin.right,
    width = 330 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]);

var barHeight = 20;

var color = d3.scale.ordinal()
    .range(["#007bff", "#007bff"]);

var duration = 750,
    delay = 25;

var partition = d3.layout.partition()
    .value(function(d) { return d.size; });

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("top");

var svg = d3.select("#ComChart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height)
    .on("click", up);

svg.append("g")
    .attr("class", "x axis");

svg.append("g")
    .attr("class", "y axis")
  .append("line")
    .attr("y1", "100%");

// d3.json("readme.json", function(error, root) {
//   if (error) throw error;

//   partition.nodes(root);
//   x.domain([0, root.value]).nice();
//   down(root, 0);
// });
//> start connect with export /import

var state="Alabama";
// var year=0;
// var year=0;
// var process="import";
// console.log(typeof year);
//start export
var update=[];
if (process=="export"){
  var dataFile="ComChart_data/exstall.csv";
}
if (process=="import"){
  var dataFile="ComChart_data/imstall.csv";
}

d3.csv(dataFile, function(data) {
for (i=0;i<data.length;i++){


var hsCode=(data[i].hs6);

if ((hsCode.match(/\d{6}/))!=null){
shortHsCode=(hsCode.match(/\d{2}/)); 
    }
else{
shortHsCode=(hsCode.match(/\d{1}/)); 
}
//<=cut HsCode
if ((data[i].statename==state)&&(hsCode!=0)&&(hsCode!=25)){
    if (year==2016){
          console.log("state "+data[i].statename+" HS CODE "+hsCode+ " year "+year+ " value "+data[i].val2016);
        var val=+data[i].val2016;
        update.push({code:shortHsCode[0], size:val}); //add a point to path array
                 }
    if (year==2015){
    console.log("state "+data[i].statename+" HS CODE "+hsCode+ " year "+year+ " value "+data[i].val2015);
        var val=+data[i].val2015;
        update.push({code:shortHsCode[0], size:val}); //add a point to path array
                  }
    if (year==2014){
console.log("state "+data[i].statename+" HS CODE "+hsCode+ " year "+year+ " value "+data[i].val2014);
        var val=+data[i].val2014;
        update.push({code:shortHsCode[0], size:val}); //add a point to path array
                  }
    if (year==2013){
    console.log("state "+data[i].statename+" HS CODE "+hsCode+ " year "+year+ " value "+data[i].val2013);
        var val=+data[i].val2013;
        update.push({code:shortHsCode[0], size:val}); //add a point to path array
                  }
                  
    if (year==0){
    console.log("state "+data[i].statename+" HS CODE "+hsCode+ " year "+year+ " value "+data[i].valAll);
        var val=+data[i].valAll;
        update.push({code:shortHsCode[0], size:val}); //add a point to path array
                  }

                                                           }

    



}



//> connect with HSCodes.json


hash    = {};
d3.json("ComChart_data/HSCodes.json", function(error, root) {
  if (error) throw error;
//> Assignment new value(newsize) to Size 



  for ( let i=0;i<root.children.length;i++){


    for (let j=0;j<root.children[i].children.length;j++){
      hash[root.children[i].children[j].code]=root.children[i].children[j];
// console.log("OLD: Code "+root.children[i].children[j].code+" Size "+root.children[i].children[j].size);
      
                                                    }
                                        }

    for (let i = 0; i < update.length; i++) {
    let o = update[i];
    hash[o.code].size += o.size;
                                            }

  for ( let i=0;i<root.children.length;i++){
    for (let j=0;j<root.children[i].children.length;j++){

//  

                                                    }
                                        }
//< Assignment new value(newsize) to Size
  partition.nodes(root);
  x.domain([0, root.value]).nice();
  down(root, 0);
});
//< connect with HSCodes.json
console.log(update);

});


//< start connect with export /import

function down(d, i) {
  if (!d.children || this.__transition__) return;
  var end = duration + d.children.length * delay;

  // Mark any currently-displayed bars as exiting.
  var exit = svg.selectAll(".enter")
      .attr("class", "exit");

  // Entering nodes immediately obscure the clicked-on bar, so hide it.
  exit.selectAll("rect").filter(function(p) { return p === d; })
      .style("fill-opacity", 1e-6);

  // Enter the new bars for the clicked-on data.
  // Per above, entering bars are immediately visible.
  var enter = bar(d)
      .attr("transform", stack(i))
      .style("opacity", 1);

  // Have the text fade-in, even though the bars are visible.
  // Color the bars as parents; they will fade to children if appropriate.
  enter.select("text").style("fill-opacity", 1e-6);
  enter.select("rect").style("fill", color(true));

  // Update the x-scale domain.
  x.domain([0, d3.max(d.children, function(d) { return d.value; })]).nice();

  // Update the x-axis.
  svg.selectAll(".x.axis").transition()
      .duration(duration)
      .call(xAxis);

  // Transition entering bars to their new position.
  var enterTransition = enter.transition()
      .duration(duration)
      .delay(function(d, i) { return i * delay; })
      .attr("transform", function(d, i) { return "translate(0," + barHeight * i * 1.2 + ")"; });

  // Transition entering text.
  enterTransition.select("text")
      .style("fill-opacity", 1);

  // Transition entering rects to the new x-scale.
  enterTransition.select("rect")
      .attr("width", function(d) { return x(d.value); })
      .style("fill", function(d) { return color(!!d.children); });

  // Transition exiting bars to fade out.
  var exitTransition = exit.transition()
      .duration(duration)
      .style("opacity", 1e-6)
      .remove();

  // Transition exiting bars to the new x-scale.
  exitTransition.selectAll("rect")
      .attr("width", function(d) { return x(d.value); });

  // Rebind the current node to the background.
  svg.select(".background")
      .datum(d)
    .transition()
      .duration(end);

  d.index = i;
}

function up(d) {
  if (!d.parent || this.__transition__) return;
  var end = duration + d.children.length * delay;

  // Mark any currently-displayed bars as exiting.
  var exit = svg.selectAll(".enter")
      .attr("class", "exit");

  // Enter the new bars for the clicked-on data's parent.
  var enter = bar(d.parent)
      .attr("transform", function(d, i) { return "translate(0," + barHeight * i * 1.2 + ")"; })
      .style("opacity", 1e-6);

  // Color the bars as appropriate.
  // Exiting nodes will obscure the parent bar, so hide it.
  enter.select("rect")
      .style("fill", function(d) { return color(!!d.children); })
    .filter(function(p) { return p === d; })
      .style("fill-opacity", 1e-6);

  // Update the x-scale domain.
  x.domain([0, d3.max(d.parent.children, function(d) { return d.value; })]).nice();

  // Update the x-axis.
  svg.selectAll(".x.axis").transition()
      .duration(duration)
      .call(xAxis);

  // Transition entering bars to fade in over the full duration.
  var enterTransition = enter.transition()
      .duration(end)
      .style("opacity", 1);

  // Transition entering rects to the new x-scale.
  // When the entering parent rect is done, make it visible!
  enterTransition.select("rect")
      .attr("width", function(d) { return x(d.value); })
      .each("end", function(p) { if (p === d) d3.select(this).style("fill-opacity", null); });

  // Transition exiting bars to the parent's position.
  var exitTransition = exit.selectAll("g").transition()
      .duration(duration)
      .delay(function(d, i) { return i * delay; })
      .attr("transform", stack(d.index));

  // Transition exiting text to fade out.
  exitTransition.select("text")
      .style("fill-opacity", 1e-6);

  // Transition exiting rects to the new scale and fade to parent color.
  exitTransition.select("rect")
      .attr("width", function(d) { return x(d.value); })
      .style("fill", color(true));

  // Remove exiting nodes when the last child has finished transitioning.
  exit.transition()
      .duration(end)
      .remove();

  // Rebind the current parent to the background.
  svg.select(".background")
      .datum(d.parent)
    .transition()
      .duration(end);
}

// Move to fron and move to back 
d3.selection.prototype.moveToFront = function() {  
      return this.each(function(){
        this.parentNode.appendChild(this);
      });
    };
    d3.selection.prototype.moveToBack = function() {  
        return this.each(function() { 
            var firstChild = this.parentNode.firstChild; 
            if (firstChild) { 
                this.parentNode.insertBefore(this, firstChild); 
            } 
        });
    };
// Creates a set of bars for the given data node, at the specified index.
function bar(d) {
  var bar = svg.insert("g", ".y.axis")
      .attr("class", "enter")
      .attr("transform", "translate(0,5)")
    .selectAll("g")
      .data(d.children)
    .enter().append("g")
      .style("cursor", function(d) { return !d.children ? null : "pointer"; })
      .on("click", down);
  //Write a text 
  bar.append("text1")
      // .attr("x", -6)
      .attr("x", 2)
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .style("text-anchor", "start")
      .text(function(d) { return d.name });
      // .text(function(d) { return d.code+" "+d.name; });
      // .on('mouseover', function(d) {
      //       d3.select(this).moveToFront();
      //   });
bar.append("text")

      .attr("x", -6)
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d.code });

  bar.append("rect")
      .attr("width", function(d) { return x(d.value); })
      .attr("height", barHeight)
      .on('mouseover', function(d) {
            d3.select(this).moveToBack();
        });

  return bar;
 }

// A stateful closure for stacking bars horizontally.
function stack(i) {
  var x0 = 0;
  return function(d) {
    var tx = "translate(" + x0 + "," + barHeight * i * 1.2 + ")";
    x0 += x(d.value);
    return tx;
  };
}
