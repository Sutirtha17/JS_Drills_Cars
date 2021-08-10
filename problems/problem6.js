module.exports = {
    problem6: function(inventory)
    {
    let carsModel=[]; // initializing empty array
    for(let id=0; id<inventory.length; id++) //6
    {
        if( inventory[id].car_make=="Audi" || inventory[id].car_make=="BMW")
        {
        carsModel.push(inventory[id]);  // pushing those car's details which have either AUDI or BMW car-make
        }
    }
    return carsModel;  // stringify the whole resultant array
    }
}
