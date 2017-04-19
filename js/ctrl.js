(function(){
    
   
    
    
    
    
    
    
    var homeDeopt = [   
    {
        ProductName: 'SAMSUNG 4.5 CU.FT WASHING MACHINE WITH SMART TECHNOLOGY...',
        ProductModel: "WFW75HEFW", 
        ProductPrice: 762,
        ProductRating: 2,
        ProductImageUrl:"assets/img/products/product1.png"
    },
    {

        ProductName: 'LG 4.5 CU.FT WASHING MACHINE WITH SMART TECHNOLOGY...',
        ProductModel: "EFLS617STT", 
        ProductPrice: 487,
        ProductRating: 1,
        ProductImageUrl:"assets/img/products/product2.png"
    },
    {            
        ProductName: 'BOSCH 4.5 CU.FT WAHSING MACHINE WITH SMART TECHNOLOGY...',
        ProductModel: "WM3770HWA", 
        ProductPrice: 623,
        ProductRating: 3,
        ProductImageUrl:"assets/img/products/product3.png"
    }  
  
];
    
    
    
        var lowes = [   
    {
        ProductName: 'SAMSUNG 4.5 CU.FT WASHING MACHINE WITH SMART TECHNOLOGY...',
        ProductModel: "WFW75HEFW", 
        ProductPrice: 732,
        ProductRating: 2,
        ProductImageUrl:"assets/img/products/product1.png"
    },
    {

        ProductName: 'LG 4.5 CU.FT WASHING MACHINE WITH SMART TECHNOLOGY...',
        ProductModel: "EFLS617STT", 
        ProductPrice: 423,
        ProductRating: 4,
        ProductImageUrl:"assets/img/products/product2.png"
    },
    {            
        ProductName: 'BOSCH 4.5 CU.FT WASHING MACHINE WITH SMART TECHNOLOGY...',
        ProductModel: "WM3770HWA", 
        ProductPrice: 628,
        ProductRating: 1,
        ProductImageUrl:"assets/img/products/product3.png"
    }  
  
];
    
    
        var menards = [   
    {
        ProductName: 'SAMSUNG 4.5 CU.FT WASHING MACHINE WITH SMART TECHNOLOGY...',
        ProductModel: "WFW75HEFW", 
        ProductPrice: 784,
        ProductRating: 4,
        ProductImageUrl:"assets/img/products/product1.png"
    },
    {

        ProductName: 'LG 4.5 CU.FT WASHING MACHINE WITH SMART TECHNOLOGY...',
        ProductModel: "EFLS617STT", 
        ProductPrice: 493,
        ProductRating: 3,
        ProductImageUrl:"assets/img/products/product2.png"
    },
    {            
        ProductName: 'BOSCH 4.5 CU.FT WASHING MACHINE WITH SMART TECHNOLOGY...',
        ProductModel: "WM3770HWA", 
        ProductPrice: 683,
        ProductRating: 2,
        ProductImageUrl:"assets/img/products/product3.png"
    }  
  
];
    
    

     
     $("#selectaTagHide").hide();
    $("#compareTable").hide();
      $("#footer").css("margin-top", "398px");
    
    
    $("#btnSearch").click(function(){
    $("#compareTable").show();
        $("#selectaTagHide").show();
        $("#footer").css("margin-top", "auto");
        creatingTable(homeDeopt,lowes,menards)
});
    
    
    
    function creatingTable(data1,data2,data3)
    {
        
        
        
        var trTable="<tr class='compare-inputs'>"+
									"<td class='tableheader' width='200'>"+
										"Home Depot"+
									"</td>"+
									"<td class='tableheader' width='200'>"+
										"Lowe's"+
									"</td>"+
									"<td class='tableheader' width='200'>"+
										"Menards"+
									"</td>"+
									
								"</tr>";
        for(var i=0;i<data1.length;i++)
            {
//                console.log("a"+data1[i].ProductRating)
//                console.log("b"+data2[i].ProductRating)
//                console.log("c"+data3[i].ProductRating)
                var rating1="";
                for (var j=0;j<data1[i].ProductRating;j++)
                    {
                       var r="<i class='fa fa-star'>";
                        rating1=rating1+r;
                    }
                 var rating2="";
                for (var k=0;k<data2[i].ProductRating;k++)
                    {
                       var r="<i class='fa fa-star'>";
                        rating2=rating2+r;
                    }
                 var rating3="";
                for (var l=0;l<data3[i].ProductRating;l++)
                    {
                       var r="<i class='fa fa-star'>";
                        rating3=rating3+r;
                    }
                
                var table="<tr><td><img src='"+data1[i].ProductImageUrl+"' class='img-responsive center-block' />"+
										"<div class='separator clear-left'>"+
										"<div class='productdesc'>"+
											"<h5>"+data1[i].ProductName+"</h5>"+
											"<p><strong>Model No.</strong> :  "+data1[i].ProductModel+"</p>"+
											"<p><strong>Price</strong> : $"+data1[i].ProductPrice+"</p>"+
											"<p><strong>Rating</strong> : "+rating1+"</p>"+
										"</div>"+
										"</div>"+
									"</td>";
                
                
                trTable=trTable+table;
                table="<td><img src='"+data2[i].ProductImageUrl+"' class='img-responsive center-block' />"+
										"<div class='separator clear-left'>"+
										"<div class='productdesc'>"+
											"<h5>"+data2[i].ProductName+"</h5>"+
											"<p><strong>Model No.</strong> :  "+data2[i].ProductModel+"</p>"+
											"<p><strong>Price</strong> : $"+data2[i].ProductPrice+"</p>"+
											"<p><strong>Rating</strong> : "+rating2+"</p>"+
										"</div>"+
										"</div>"+
									"</td>";
                
                trTable=trTable+table;
                
                 table="<td><img src='"+data3[i].ProductImageUrl+"' class='img-responsive center-block' />"+
										"<div class='separator clear-left'>"+
										"<div class='productdesc'>"+
											"<h5>"+data3[i].ProductName+"</h5>"+
											"<p><strong>Model No.</strong> :  "+data3[i].ProductModel+"</p>"+
											"<p><strong>Price</strong> : $"+data3[i].ProductPrice+"</p>"+
											"<p><strong>Rating</strong> : "+rating3+"</p>"+
										"</div>"+
										"</div>"+
									"</td></tr>";
                
                trTable=trTable+table;
                
            }
        
        
        document.getElementById("tableData").innerHTML =trTable;
    }
    
    
    
    
    
        var selectionTag=document.getElementById("onchangeTag");
    
    selectionTag.addEventListener("change",selectionFunction)
    
    function selectionFunction()
    {
        var perpormace=selectionTag.value;
        if(perpormace=="low")
            {
        
                    this.homeDeoptResults = homeDeopt.slice(0);
                    this.homeDeoptResults.sort(function(a,b) {
                            return b.ProductPrice - a.ProductPrice;
                        });
                
                     this.lowesResults = lowes.slice(0);
                    this.lowesResults.sort(function(a,b) {
                            return b.ProductPrice - a.ProductPrice;
                        });
                
                  this.menardsResults = menards.slice(0);
                    this.menardsResults.sort(function(a,b) {
                           return b.ProductPrice - a.ProductPrice;
                        });
        
            }
        
        
          else if(perpormace=="high")
            {
        
                    this.homeDeoptResults = homeDeopt.slice(0);
                    this.homeDeoptResults.sort(function(a,b) {
                            return a.ProductPrice - b.ProductPrice;
                        });
                
                     this.lowesResults = lowes.slice(0);
                    this.lowesResults.sort(function(a,b) {
                            return a.ProductPrice - b.ProductPrice;
                        });
                
                  this.menardsResults = menards.slice(0);
                    this.menardsResults.sort(function(a,b) {
                           return a.ProductPrice - b.ProductPrice;
                        });
        
            }
        
               else if(perpormace=="rating")
            {
        
                    this.homeDeoptResults = homeDeopt.slice(0);
                    this.homeDeoptResults.sort(function(a,b) {
                            return  b.ProductRating - a.ProductRating;
                        });
                
                     this.lowesResults = lowes.slice(0);
                    this.lowesResults.sort(function(a,b) {
                            return  b.ProductRating - a.ProductRating;
                        });
                
                  this.menardsResults = menards.slice(0);
                    this.menardsResults.sort(function(a,b) {
                           return  b.ProductRating - a.ProductRating;
                        });
        
            }
        
        
              else if(perpormace=="normal")
            {
        
                    this.homeDeoptResults = homeDeopt;
                 
                
                     this.lowesResults = lowes;
                  
                
                  this.menardsResults = menards;
                   
        
            }
        
        
            creatingTable(this.homeDeoptResults,this.lowesResults,this.menardsResults)
        
    }
    
    
    
    
})();