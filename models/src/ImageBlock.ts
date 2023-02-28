import { Block } from "./Block";
import { Type } from "./Types";

export class ImageBlock extends Block{
    constructor(order:number,content:string) {
        super(order,Type.image,content);
    }

    getType() {
        return "this is image"
    }
}