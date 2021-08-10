module.exports = {
    problem3: function(inventory)
    {
        for( let i=0; i<inventory.length;i++)             // using Bubble sort
            for( let j=0; j<inventory.length-i-1;j++)
             {
                 if(inventory[j].car_model.toLowerCase()>inventory[j+1].car_model.toLowerCase()) // comparing each elements with it's next element
                 {
                    let temp=inventory[j+1];
                    inventory[j+1]=inventory[j]; // if it's greater than any of it's next then we swap them
                    inventory[j]=temp;
                 }
             }
        return inventory;
    }
}