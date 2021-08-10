module.exports = {
    problem2: function (inventory)
    {
        const lastElement=inventory.length-1;     //    storing the index of last element
        let result="Last Car is a "+ inventory[lastElement].car_make+' '+ inventory[lastElement].car_model;
        return result;  
    }
}