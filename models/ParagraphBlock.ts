import {BlockType} from "./BlockType";
import {Block} from "./Block";

export class ParagraphBlock extends Block {
    constructor(order: number, content: string) {
        super(order, BlockType.paragraph, content);
    }

    getType(): string {
        return "this is paragraph";
    }
}