module.exports = {
    problem2: function (inventory)
    {
        if(inventory.length==0)
        return [];
        const lastElement=inventory.length-1;     //    storing the index of last element
        let result="Last Car is a "+ inventory[lastElement].car_make+' '+ inventory[lastElement].car_model;
        return result;  
    }
}