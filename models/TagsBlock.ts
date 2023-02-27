import {BlockType} from "./BlockType";
import {Block} from "./Block";

export class TagsBlock extends Block{
    constructor(order:number,content:Array<String>) {
        super(order,BlockType.tags,content);
    }
}