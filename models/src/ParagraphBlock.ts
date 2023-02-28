import { Block } from "./Block";
import { Type } from "./Types";

export class ParagraphBlock extends Block{
    constructor(order:number,content:string) {
        super(order,Type.paragraph,content);
    }

    getType() {
        return "this is paragraph"
    }
}