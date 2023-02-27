import {BlockType} from "./BlockType";
import {Block} from "./Block";

export class ImageBlock extends Block {

    constructor(order: number, content: string) {
        super(order, BlockType.image, content);

    }

    getType(): string {
        return "this is image";
    }
}