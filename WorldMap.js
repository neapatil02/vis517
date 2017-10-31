
function updateWorldMap(p, y, s){
  process = p;
  year = y;
  state = s;
  createWorldMap(state);
  if(state.length > 0){
      readDataFromFile(process);
      dataToPlot(year);
  }
}

var countries = [];
//Draw world map
function createWorldMap (state) {
    map = new Datamap({
                        element: document.getElementById("WorldMap"),
                        projection: 'mercator',
                         setProjection: function(){

                                            var projection = d3.geo.mercator()
                                                .center([0, 0 ])
                                                .scale(100)
                                                .translate([700/2,550/2]);

                                            var path = d3.geo.path()
                                                .projection(projection);
                                            return {projection:projection , path : path};
                         },
                        fills: {
                                defaultFill: "grey",
                                authorHasTraveledTo: "#fa0fa0"
                              },
                        width: 700,
                        height: 550,
                        class: function () {
                          return 'country';
                        },
                        done: function(datamap){
                                datamap.svg.call(d3.behavior.zoom().on("zoom", redraw));
                                function redraw() {
                                    datamap.svg.selectAll("g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
                                }

                                // datamap.svg.selectAll("path").on('mouseover', function(info) {debugger;
                                
                                // });
                            },
                          geographyConfig: {
                                            popupTemplate: function(geo, data) {
                                              debugger;
                                              $("#WorldMapInfo").empty();
                                              if(data != null){
                                                $("#WorldMapInfo").append(
                                                 ['<div class="hoverinfo1" style="display:block"><strong>',
                                                        'Total Dollars ' + state +' traded with ' + geo.properties.name,
                                                        ': ' + data.dollarValue,
                                                        '</strong></div>'].join(''));

                                                        return "";
                                                      }
                                                      else
                                                      {
                                                         $("#WorldMapInfo").append( ['<div class="hoverinfo1"><strong>',
                                                        geo.properties.name,
                                                        '</strong></div>'].join(''));
                                                        return "";
                                                      }
                                            }
                                     }
                        });
    countries = Datamap.prototype.worldTopo.objects.world.geometries;
    countryHash(countries);
  }

var countryHashList = [];
function countryHash(countries)
{
countryHashList = [];
  countries.forEach(function(e)
  {
    countryHashList.push({name : e.properties.name, code : e.id});
  });
}

var exportTopCountries = [];
function readDataFromFile(process)
{
  if(process == "export")
      {
      $.ajax({
      url: 'data/ExportCountry.json',
      async: false,
      dataType: 'json',
      success: function (response) {
        exportTopCountries = response;
      }
    });
    }
    else{
          $.ajax({
          url: 'data/ImportCountry.json',
          async: false,
          dataType: 'json',
          success: function (response) {
            exportTopCountries = response;
          }
        });
        }
}

function dataToPlot(year)
{
  

  var top25Countries = [];
      $.each( exportTopCountries, function(e) {
        if(this.statename.toUpperCase() === state.toUpperCase())
        {
          if($.isNumeric(this.rank))
          {
              top25Countries.push(this);
          }
        }
        if(top25Countries.length == 25)
        {
          return false;
        }
      });
      plotData(top25Countries, year);
      console.log(top25Countries);
}

function plotData(top25Countries, year)
{

generateDataForChoropleth(top25Countries, year);

}

function generateDataForChoropleth(top25Countries, year)
{

var color = d3.scale.threshold()
    .domain([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])
    .range(d3.schemeBlues[9]);

  var data = {};
   var labelData = {};
   countryHashList.forEach(function(e)
    {
       labelData[e.code] =" ";
    });

  top25Countries.forEach(function(c)
  {
    
    countryHashList.forEach(function(e)
    {
      if(e.name.toUpperCase() == c.countryd.toUpperCase())
      {
        var cl = "";
        var rank = parseInt(c.rank);
        if(rank >= 1 && rank <= 5)
        {
           cl = color(8);
        }
         if(rank >= 6 && rank <= 10)
        {
           cl = color(6);
        }
         if(rank >= 11 && rank <= 15)
        {
           cl = color(4);
        }
         if(rank >= 16 && rank <= 20)
        {
           cl = color(2);
        }
         if(rank >= 21 && rank <= 25)
        {
           cl = color(1);
        }
        data[e.code] = { fillColor : cl,
                          dollarValue : calcValueAccordingToYear(c,year)};
        labelData[e.code] = " ";
      }
    });
  });
  map.updateChoropleth(data);
  map.labels({'customLabelText':labelData});


}

function calcValueAccordingToYear(data,year)
{
  var val = 0;
  switch(year)
  {
    case 0 : val = (parseFloat(data.val2013)+parseFloat(data.val2014)+parseFloat(data.val2015)+parseFloat(data.val2016)).toFixed(2);
    break;
    case 2013 : 
    val = parseFloat(data.val2013).toFixed(2);
    break;
     case 2014 : 
    val = parseFloat(data.val2014).toFixed(2);
    break;
     case 2015 : 
    val = parseFloat(data.val2015).toFixed(2);
    break;
     case 2016 : 
    val = parseFloat(data.val2016).toFixed(2);
    break;
  }
  return val;
}
