function onUpdateButtonClick(){
var year = $("#Years").val();
var process = $("input:radio[name='Process']:checked").val();
var r = $("#rangeHsCode").val();
var rg = $("#hsCode").val();
state = "";
if(rg.length > 1)
{
	range = rg;
}
else
{
	range = r;
}

 $("#ComChart").empty();
 $("#WorldMap").empty();
 $("#USMap").empty();

PopulateUSMap(range, year, process);
updateWorldMap(process, year, state);
ComChart(process,state,year);

}