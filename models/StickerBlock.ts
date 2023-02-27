import {BlockType} from "./BlockType";
import {Block} from "./Block";

export class StickerBlock extends Block{
    constructor(order:number,content:string) {
        super(order,BlockType.sticker,content);
    }
}