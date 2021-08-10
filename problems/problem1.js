module.exports = { 
problem1: function (inventory, requiredId)
{
    let result= "ID doesn't exists!";     // initializing the result with a message if ID is not present
    for(let id=0; id< inventory.length; id++) 
    {
        if(inventory[id].id==requiredId)  // checking if any ID is matching with required ID
        {
        result="Car " + inventory[id].id + " is a " + inventory[id].car_year + ' ' + inventory[id].car_make + ' ' + inventory[id].car_model;
        break;                            // breaking the loop after getting the ID
        }
    }
    return result;
}
}
