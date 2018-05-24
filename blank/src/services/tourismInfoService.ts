import { tourismInfo } from "../models/tourismInfo";

export class tourismInfoService{

    private tourismInfo: tourismInfo [] = [];
    
    addTourismItem(title:string, category:string){//this function is to add on element/item into the array.
        this.tourismInfo.push(new tourismInfo(title,category));
    }

    addTourismItems(items:tourismInfo[]){//this function is to add an array of information into the array
        this.tourismInfo.push(...items);//breaks the array into elements/items and then pushes into the new array
    }
    getTourismItems(){
        return this.tourismInfo.slice();//slice creates copy of the array
    }
    removeTourismItems(index:number){
        this.tourismInfo.splice(index,1);//splice removes the element/item fromt the array
    }

}