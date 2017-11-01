var myChart1 = echarts.init(document.getElementById('IEsub'));
var export2013=0;
var export2014=0;
var export2015=0;
var export2016=0;
var import2013=0;
var import2014=0;
var import2015=0;
var import2016=0;
d3.csv("export.csv", function(data){
d3.csv("import.csv",function(data1){
for(var i=0;i<1430;i++)
{
  if(data[i]["abbreviatn"]=='World'&&data[i]["statename"]== statename)
    {
      
     
      export2013=parseFloat(data[i]["val2013"]);
       export2014=parseFloat(data[i]["val2014"]);
        export2015=parseFloat(data[i]["val2015"]);
         export2016=parseFloat(data[i]["val2016"]);
     import2013=parseFloat(data1[i]["val2013"]);
       import2014=parseFloat(data1[i]["val2014"]);
        import2015=parseFloat(data1[i]["val2015"]);
         import2016=parseFloat(data1[i]["val2016"]);

         export2013= parseFloat(export2013.toFixed(2));
          export2014= parseFloat(export2014.toFixed(2));
           export2015= parseFloat(export2015.toFixed(2)); 
            export2016= parseFloat(export2016.toFixed(2));
        import2013= parseFloat(import2013.toFixed(2));
          import2014= parseFloat(import2014.toFixed(2));
           import2015= parseFloat(import2015.toFixed(2)); 
            import2016= parseFloat(import2016.toFixed(2));
     // importyear[j]=
      
      // console.log(j+data[i]["statename"]+' '+ parseFloat(exportsum[j]));
           }
           break;
     
    }
 //   console.log(export2013);
var option = {
   
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['import', 'export']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['2013','2014','2015','2016']
    },
    series: [
        {
            name: 'import',
            type: 'bar',
            data: [import2013, import2014, import2015, import2016]
        },
        {
            name: 'export',
            type: 'bar',
            data: [export2013, export2014, export2015, export2016]
        }
    ]
};
 myChart.setOption(option);
});
});
