import { Images } from "./images";

export interface Goods{
    name: string;
    category: string;
    total: number;
    quantity: number;
    price:number;
    image: Images ;
}