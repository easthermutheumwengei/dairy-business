var sheds = [
    {
        title: "shade A",
        meanProduction: 510,
        
    },
    {
        title: "shade B",
        meanProduction: 308,
       
    },
    {
        title: "shade C",
        meanProduction: 486,
    },
    {
        title: "shade D",
        meanProduction: 572,
      
    },
];
    var allProduction = function (prdn) {
        let sum = 0;
        for (let i = 0; i < prdn.length; i++){
            sum += prdn[i].meanProduction;
            if (i == prdn.length -1) {
                return sum;
            }
        }
    };
    var totalProduction = function (ttl) {
        for (let i = 0; i <ttl.length; i++){
            console.log(
                "your production in " + ttl[i].name + " " + ttl[i].meanProduction + "litres per day"
            );
        }
        console.log(
            "The total production is " + allProduction(ttl) + " litres per day"
        );
    };
    totalProduction(sheds);
    var months = {
        january: 31,
        february: 29,
        march: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31,
    };
    var sellingPricePerLitre = 45;
    function incomeOverTime(selling_price, time){
        if (time == "weekly") {
            let week = allProduction(sheds) * 7 * selling_price;
            console.log("Your weekly income will be ksh " + week);
        } else if (time == "yearly") {
            let sum = 0;
            for (let values of Object.values(months)){
                sum = values * allProduction(sheds) * selling_price;
            }
            console.log("your yearly income will be ksh " + sum);
        }
    }
    incomeOverTime(sellingPricePerLitre, "weekly");
    incomeOverTime(sellingPricePerLitre, "yearly");
    function incomPerMonth(selling_price) {
        let monthProduction;
        for (let [keys,values] of Object.entries(months)) {
            monthlyProduction = values * allProduction(sheds) * selling_price; 
            console.log("Your income for " + keys + " is" + monthlyProduction);
        } 
    }
    incomPerMonth(sellingPricePerLitre);