import {Type} from "./Types";

export abstract class Block{
    order:number;
    content:any;
    type:Type;



    constructor(order:number,type:Type,content:any) {
        this.order = order;
        this.type = type;
        this.content = content;

    }
    public abstract getType():void;
}