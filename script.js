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
    var totalProduction = fuction