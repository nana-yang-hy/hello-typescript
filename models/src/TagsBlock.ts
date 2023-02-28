import { Block } from "./Block";
import { Type } from "./Types";

export class TagsBlock extends Block{
    constructor(order:number,content:Array<String>) {
        super(order,Type.tags,content);
    }

    getType() {
        return "this is tags"
    }
}