module.exports = {
    problem3: function(inventory)
    {
    if(inventory.length==0)
    return [];
    for( let i=0; i<inventory.length;i++)             // using selection-sort
        {
             let min=i;                              // storing the index i in min variable initially
            for( let j=i+1; j<inventory.length;j++)
             {
                 if(inventory[min].car_model.toLowerCase()>inventory[j].car_model.toLowerCase()) // calculating the next min element and storing it's index in min
                    min=j;
             }
             if(min!=i)
             {
                let temp=inventory[i];
                inventory[i]=inventory[min]; // if index min is not i, then we swap them
                inventory[min]=temp;
             }
        }
        return inventory;
    }   
}