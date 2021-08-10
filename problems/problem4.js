module.exports = {
    problem4: function(inventory)
    {
        let years=[];  // initializing an empty array
        for(let id=0; id< inventory.length; id++)
            {
             years.push(inventory[id].car_year); //pushing the years of every car
            }
        return years;
    }
}