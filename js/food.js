class Food{


    constructor(){
        this.foodStock = 0;
        this.lastFed
        this.MilkImg = loadImage("images/Milk.png");
        

    }
    updateStock(foodStock){
        this.foodStock = foodStock;
    }
    deductFood(){
        if(this.foodStock>0){
            this.foodStock -= 1;
        }
    }
    getStock(){
        return this.foodStock;
    }


    display(){
        var x = 80, y = 100;
        imageMode(CENTER);
        image(this.MilkImg, 700, 200, 80,80);

        if(this.foodStock != 0){
            for(var i = 0; i<this.foodStock;i++){
                image(this.MilkImg, x, y, 80, 80);
                x = x+39.9;
            }

        }
    }
}