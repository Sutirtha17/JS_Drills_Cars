module.exports = {
    problem5: function(inventory,years)
    {
        let yearCount=0;
        for(let id=0; id<years.length; id++) //5
        {
            if(inventory[id].car_year<2000)
            yearCount=yearCount+1;
        }   
        return yearCount;
    }
}