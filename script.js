 var viewportwidth;
 var viewportheight;
  
 // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
  
 if (typeof window.innerWidth != 'undefined')
 {
      viewportwidth = window.innerWidth,
      viewportheight = window.innerHeight
 }
  
// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
 
 else if (typeof document.documentElement != 'undefined'
     && typeof document.documentElement.clientWidth !=
     'undefined' && document.documentElement.clientWidth != 0)
 {
       viewportwidth = document.documentElement.clientWidth,
       viewportheight = document.documentElement.clientHeight
 }
  
 // older versions of IE
  
 else
 {
       viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
       viewportheight = document.getElementsByTagName('body')[0].clientHeight
 }
 


var w = viewportwidth/5,
	h = viewportwidth/5;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Smartphone','Tablet'];
 var count=0;
var op= JSON.parse(localStorage["myOpacity"]);

//Data

var ClusterID=localStorage["clusteringID"];
console.log("ClusterID",ClusterID);
var d;// = 
//d3.json("./data_radar.json", function(json) {
 // if (error) return console.warn(error);

    switch (ClusterID) {
      case "Supervised":
     		 //data pam
            d=[[{"axis":"I/P tax p.a.","value":"0.08"},{"axis":"O/P tax p.a.","value":"0.06"},{"axis":"Taxable turnover","value":"0.17"},{"axis":"Output p.a.","value":"0.26"},{"axis":"Trade class","value":"0.65"},{"axis":"VAT period","value":"0.58"},{"axis":"Sales growth present","value":"0.54"},{"axis":"Sales growth previous","value":"0.49"},{"axis":"Complexity points","value":"0.41"},{"axis":"European indicator","value":"0.32"},{"axis":"Postcode","value":"0.46"},{"axis":"Avg. delay","value":"0.52"}],[{"axis":"I/P tax p.a.","value":"0.27"},{"axis":"O/P tax p.a.","value":"0.34"},{"axis":"Taxable turnover","value":"0.37"},{"axis":"Output p.a.","value":"0.26"},{"axis":"Trade class","value":"0.6"},{"axis":"VAT period","value":"0.55"},{"axis":"Sales growth present","value":"0.57"},{"axis":"Sales growth previous","value":"0.51"},{"axis":"Complexity points","value":"0.43"},{"axis":"European indicator","value":"0.33"},{"axis":"Postcode","value":"0.49"},{"axis":"Avg. delay","value":"0.54"}],[{"axis":"I/P tax p.a.","value":"0.14"},{"axis":"O/P tax p.a.","value":"0.11"},{"axis":"Taxable turnover","value":"0.22"},{"axis":"Output p.a.","value":"0.26"},{"axis":"Trade class","value":"0.46"},{"axis":"VAT period","value":"0.55"},{"axis":"Sales growth present","value":"0.58"},{"axis":"Sales growth previous","value":"0.52"},{"axis":"Complexity points","value":"0.44"},{"axis":"European indicator","value":"0.33"},{"axis":"Postcode","value":"0.48"},{"axis":"Avg. delay","value":"0.56"}],[{"axis":"I/P tax p.a.","value":"0.18"},{"axis":"O/P tax p.a.","value":"0.2"},{"axis":"Taxable turnover","value":"0.26"},{"axis":"Output p.a.","value":"0.25"},{"axis":"Trade class","value":"0.56"},{"axis":"VAT period","value":"0.58"},{"axis":"Sales growth present","value":"0.58"},{"axis":"Sales growth previous","value":"0.53"},{"axis":"Complexity points","value":"0.41"},{"axis":"European indicator","value":"0.32"},{"axis":"Postcode","value":"0.5"},{"axis":"Avg. delay","value":"0.55"}],[{"axis":"I/P tax p.a.","value":"0.53"},{"axis":"O/P tax p.a.","value":"0.57"},{"axis":"Taxable turnover","value":"0.7"},{"axis":"Output p.a.","value":"0.35"},{"axis":"Trade class","value":"0.55"},{"axis":"VAT period","value":"0.46"},{"axis":"Sales growth present","value":"0.52"},{"axis":"Sales growth previous","value":"0.46"},{"axis":"Complexity points","value":"0.57"},{"axis":"European indicator","value":"0.48"},{"axis":"Postcode","value":"0.42"},{"axis":"Avg. delay","value":"0.48"}]];
            console.log("Inherenow");
            break;
      case "Robust":
	       //data tclust
           d=[[{"axis":"I/P tax p.a.","value":"0.45"},{"axis":"O/P tax p.a.","value":"0.49"},{"axis":"Taxable turnover","value":"0.57"},{"axis":"Output p.a.","value":"0.29"},{"axis":"Trade class","value":"0.54"},{"axis":"VAT period","value":"0.49"},{"axis":"Sales growth present","value":"0.51"},{"axis":"Sales growth previous","value":"0.47"},{"axis":"Complexity points","value":"0.52"},{"axis":"European indicator","value":"0.41"},{"axis":"Postcode","value":"0.44"},{"axis":"Avg. delay","value":"0.5"}],[{"axis":"I/P tax p.a.","value":"0.12"},{"axis":"O/P tax p.a.","value":"0.1"},{"axis":"Taxable turnover","value":"0.2"},{"axis":"Output p.a.","value":"0.26"},{"axis":"Trade class","value":"0.55"},{"axis":"VAT period","value":"0.57"},{"axis":"Sales growth present","value":"0.57"},{"axis":"Sales growth previous","value":"0.51"},{"axis":"Complexity points","value":"0.42"},{"axis":"European indicator","value":"0.33"},{"axis":"Postcode","value":"0.48"},{"axis":"Avg. delay","value":"0.54"}],[{"axis":"I/P tax p.a.","value":"0.23"},{"axis":"O/P tax p.a.","value":"0.27"},{"axis":"Taxable turnover","value":"0.31"},{"axis":"Output p.a.","value":"0.25"},{"axis":"Trade class","value":"0.58"},{"axis":"VAT period","value":"0.57"},{"axis":"Sales growth present","value":"0.58"},{"axis":"Sales growth previous","value":"0.53"},{"axis":"Complexity points","value":"0.41"},{"axis":"European indicator","value":"0.32"},{"axis":"Postcode","value":"0.5"},{"axis":"Avg. delay","value":"0.55"}]];
           console.log("Inherenowaswell");
            break;
      case "SemiSupervised":
	        //data kcca
		d=[[{"axis":"I/P tax p.a.","value":"0.11"},{"axis":"O/P tax p.a.","value":"0.09"},{"axis":"Taxable turnover","value":"0.2"},{"axis":"Output p.a.","value":"0.26"},{"axis":"Trade class","value":"0.55"},{"axis":"VAT period","value":"0.57"},{"axis":"Sales growth present","value":"0.57"},{"axis":"Sales growth previous","value":"0.51"},{"axis":"Complexity points","value":"0.42"},{"axis":"European indicator","value":"0.33"},{"axis":"Postcode","value":"0.47"},{"axis":"Avg. delay","value":"0.54"}],[{"axis":"I/P tax p.a.","value":"0.24"},{"axis":"O/P tax p.a.","value":"0.27"},{"axis":"Taxable turnover","value":"0.33"},{"axis":"Output p.a.","value":"0.26"},{"axis":"Trade class","value":"0.57"},{"axis":"VAT period","value":"0.56"},{"axis":"Sales growth present","value":"0.57"},{"axis":"Sales growth previous","value":"0.52"},{"axis":"Complexity points","value":"0.43"},{"axis":"European indicator","value":"0.33"},{"axis":"Postcode","value":"0.49"},{"axis":"Avg. delay","value":"0.55"}]];
  break;
	  case "Unsupervised":
	       //data pdfCluster
       		  d=[[{"axis":"I/P tax p.a.","value":"0.18"},{"axis":"O/P tax p.a.","value":"0.17"},{"axis":"Taxable turnover","value":"0.25"},{"axis":"Output p.a.","value":"0.27"},{"axis":"Trade class","value":"0.52"},{"axis":"VAT period","value":"0.56"},{"axis":"Sales growth present","value":"0.6"},{"axis":"Sales growth previous","value":"0.53"},{"axis":"Complexity points","value":"0.42"},{"axis":"European indicator","value":"0.34"},{"axis":"Postcode","value":"0.48"},{"axis":"Avg. delay","value":"0.56"}],[{"axis":"I/P tax p.a.","value":"0.12"},{"axis":"O/P tax p.a.","value":"0.14"},{"axis":"Taxable turnover","value":"0.25"},{"axis":"Output p.a.","value":"0.24"},{"axis":"Trade class","value":"0.62"},{"axis":"VAT period","value":"0.57"},{"axis":"Sales growth present","value":"0.51"},{"axis":"Sales growth previous","value":"0.48"},{"axis":"Complexity points","value":"0.44"},{"axis":"European indicator","value":"0.3"},{"axis":"Postcode","value":"0.48"},{"axis":"Avg. delay","value":"0.52"}]];
		  	  break;
} 
  
  //data kmeans
   //      d =[[{axis:"I/P tax p.a.",value:0.1},{axis:"O/P tax p.a.",value:0.08},{axis:"Taxable turnover",value:0.18},{axis:"Output p.a.",value:0.27},{axis:"Trade class",value:0.59},{axis:"VAT period",value:0.57},{axis:"Sales growth present",value:0.56},{axis:"Sales growth previous",value:0.51},{axis:"Complexity points",value:0.42},{axis:"European indicator",value:0.33},{axis:"Postcode",value:0.47},{axis:"Avg. delay",value:0.53}],[{axis:"I/P tax p.a.",value:0.16},{axis:"O/P tax p.a.",value:0.23},{axis:"Taxable turnover",value:0.26},{axis:"Output p.a.",value:0.26},{axis:"Trade class",value:0.57},{axis:"VAT period",value:0.57},{axis:"Sales growth present",value:0.58},{axis:"Sales growth previous",value:0.52},{axis:"Complexity points",value:0.42},{axis:"European indicator",value:0.32},{axis:"Postcode",value:0.5},{axis:"Avg. delay",value:0.55}],[{axis:"I/P tax p.a.",value:0.19},{axis:"O/P tax p.a.",value:0.14},{axis:"Taxable turnover",value:0.24},{axis:"Output p.a.",value:0.25},{axis:"Trade class",value:0.47},{axis:"VAT period",value:0.56},{axis:"Sales growth present",value:0.58},{axis:"Sales growth previous",value:0.52},{axis:"Complexity points",value:0.42},{axis:"European indicator",value:0.32},{axis:"Postcode",value:0.49},{axis:"Avg. delay",value:0.57}],[{axis:"I/P tax p.a.",value:0.3},{axis:"O/P tax p.a.",value:0.36},{axis:"Taxable turnover",value:0.4},{axis:"Output p.a.",value:0.26},{axis:"Trade class",value:0.6},{axis:"VAT period",value:0.55},{axis:"Sales growth present",value:0.57},{axis:"Sales growth previous",value:0.51},{axis:"Complexity points",value:0.43},{axis:"European indicator",value:0.34},{axis:"Postcode",value:0.49},{axis:"Avg. delay",value:0.54}],[{axis:"I/P tax p.a.",value:0.59},{axis:"O/P tax p.a.",value:0.64},{axis:"Taxable turnover",value:0.79},{axis:"Output p.a.",value:0.35},{axis:"Trade class",value:0.52},{axis:"VAT period",value:0.44},{axis:"Sales growth present",value:0.47},{axis:"Sales growth previous",value:0.45},{axis:"Complexity points",value:0.62},{axis:"European indicator",value:0.51},{axis:"Postcode",value:0.39},{axis:"Avg. delay",value:0.48}]];
   
   
  //data tclust
 
 //d=[[{"axis":"I/P tax p.a.","value":"0.45"},{"axis":"O/P tax p.a.","value":"0.49"},{"axis":"Taxable turnover","value":"0.57"},{"axis":"Output p.a.","value":"0.29"},{"axis":"Trade class","value":"0.54"},{"axis":"VAT period","value":"0.49"},{"axis":"Sales growth present","value":"0.51"},{"axis":"Sales growth previous","value":"0.47"},{"axis":"Complexity points","value":"0.52"},{"axis":"European indicator","value":"0.41"},{"axis":"Postcode","value":"0.44"},{"axis":"Avg. delay","value":"0.5"}],[{"axis":"I/P tax p.a.","value":"0.12"},{"axis":"O/P tax p.a.","value":"0.1"},{"axis":"Taxable turnover","value":"0.2"},{"axis":"Output p.a.","value":"0.26"},{"axis":"Trade class","value":"0.55"},{"axis":"VAT period","value":"0.57"},{"axis":"Sales growth present","value":"0.57"},{"axis":"Sales growth previous","value":"0.51"},{"axis":"Complexity points","value":"0.42"},{"axis":"European indicator","value":"0.33"},{"axis":"Postcode","value":"0.48"},{"axis":"Avg. delay","value":"0.54"}],[{"axis":"I/P tax p.a.","value":"0.23"},{"axis":"O/P tax p.a.","value":"0.27"},{"axis":"Taxable turnover","value":"0.31"},{"axis":"Output p.a.","value":"0.25"},{"axis":"Trade class","value":"0.58"},{"axis":"VAT period","value":"0.57"},{"axis":"Sales growth present","value":"0.58"},{"axis":"Sales growth previous","value":"0.53"},{"axis":"Complexity points","value":"0.41"},{"axis":"European indicator","value":"0.32"},{"axis":"Postcode","value":"0.5"},{"axis":"Avg. delay","value":"0.55"}]];


 //data dpmeans
 
 //d=[[{"axis":"I/P tax p.a.","value":"0.16"},{"axis":"O/P tax p.a.","value":"0.16"},{"axis":"Taxable turnover","value":"0.24"},{"axis":"Output p.a.","value":"0.26"},{"axis":"Trade class","value":"0.57"},{"axis":"VAT period","value":"0.56"},{"axis":"Sales growth present","value":"0.56"},{"axis":"Sales growth previous","value":"0.51"},{"axis":"Complexity points","value":"0.43"},{"axis":"European indicator","value":"0.32"},{"axis":"Postcode","value":"0.48"},{"axis":"Avg. delay","value":"0.54"}],[{"axis":"I/P tax p.a.","value":"0.15"},{"axis":"O/P tax p.a.","value":"0.14"},{"axis":"Taxable turnover","value":"0.23"},{"axis":"Output p.a.","value":"0.26"},{"axis":"Trade class","value":"0.55"},{"axis":"VAT period","value":"0.57"},{"axis":"Sales growth present","value":"0.58"},{"axis":"Sales growth previous","value":"0.51"},{"axis":"Complexity points","value":"0.41"},{"axis":"European indicator","value":"0.33"},{"axis":"Postcode","value":"0.47"},{"axis":"Avg. delay","value":"0.56"}],[{"axis":"I/P tax p.a.","value":"0.17"},{"axis":"O/P tax p.a.","value":"0.16"},{"axis":"Taxable turnover","value":"0.26"},{"axis":"Output p.a.","value":"0.26"},{"axis":"Trade class","value":"0.55"},{"axis":"VAT period","value":"0.56"},{"axis":"Sales growth present","value":"0.56"},{"axis":"Sales growth previous","value":"0.51"},{"axis":"Complexity points","value":"0.42"},{"axis":"European indicator","value":"0.33"},{"axis":"Postcode","value":"0.49"},{"axis":"Avg. delay","value":"0.53"}],[{"axis":"I/P tax p.a.","value":"0.16"},{"axis":"O/P tax p.a.","value":"0.17"},{"axis":"Taxable turnover","value":"0.25"},{"axis":"Output p.a.","value":"0.27"},{"axis":"Trade class","value":"0.54"},{"axis":"VAT period","value":"0.56"},{"axis":"Sales growth present","value":"0.58"},{"axis":"Sales growth previous","value":"0.51"},{"axis":"Complexity points","value":"0.43"},{"axis":"European indicator","value":"0.32"},{"axis":"Postcode","value":"0.49"},{"axis":"Avg. delay","value":"0.57"}],[{"axis":"I/P tax p.a.","value":"0.17"},{"axis":"O/P tax p.a.","value":"0.17"},{"axis":"Taxable turnover","value":"0.25"},{"axis":"Output p.a.","value":"0.28"},{"axis":"Trade class","value":"0.56"},{"axis":"VAT period","value":"0.57"},{"axis":"Sales growth present","value":"0.58"},{"axis":"Sales growth previous","value":"0.51"},{"axis":"Complexity points","value":"0.43"},{"axis":"European indicator","value":"0.34"},{"axis":"Postcode","value":"0.48"},{"axis":"Avg. delay","value":"0.54"}],[{"axis":"I/P tax p.a.","value":"0.19"},{"axis":"O/P tax p.a.","value":"0.19"},{"axis":"Taxable turnover","value":"0.27"},{"axis":"Output p.a.","value":"0.23"},{"axis":"Trade class","value":"0.58"},{"axis":"VAT period","value":"0.55"},{"axis":"Sales growth present","value":"0.57"},{"axis":"Sales growth previous","value":"0.52"},{"axis":"Complexity points","value":"0.43"},{"axis":"European indicator","value":"0.35"},{"axis":"Postcode","value":"0.47"},{"axis":"Avg. delay","value":"0.57"}]];

// json;
 // console.log("here",json);


//Options for the Radar chart, other than default

var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  //opacityArea: 0.5,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);





function newRadar(){
console.log("Callingnew");
  RadarChart.draw("#chart", d, mycfg);
}
//newRadar();



////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("What % of owners use a specific service in a week");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	
//}); #end of d3.json