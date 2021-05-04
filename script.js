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
    var allProduction = function (s) {
        let sum = 0;
        for (let i = 0; i < s.length; i++){
            sum += s[i].meanProduction;
            if (i == s.length -1) {
                return sum;
            }
        }
    };
    var totalProduction = function (obj) {
        for (let i = 0; i <obj.length; i++){
            console.log(
                "your production in " + obj[i].name + " " + obj[i].meanProduction + "litres per day"
            );
        }
        console.log(
            "The total production is " + allProduction(obj) + " litres per day"
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
    }