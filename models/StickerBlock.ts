import { Block } from "./Block";
import { Type } from "./Types";

export class StickerBlock extends Block{
    constructor(order:number,content:string) {
        super(order,Type.sticker,content);
    }

    getType() {
        return "this is sticker"
    }
}