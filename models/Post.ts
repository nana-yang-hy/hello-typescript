import { Block } from "./Block";

export class Post {
    private title: string;
    private blocks: Array<Block>;

    constructor(myTitle: string, blocks: Array<Block>) {
        this.title = myTitle;
        this.blocks = blocks;
    }

    public getBlockContentByOrder(order: number): any {
        return this.blocks[order - 1].getContent();
    }

    public getTypeFromBlock(blockOrder: number) {
        return this.blocks[blockOrder - 1].getType()
    }
    public getAllBlocksType():Array<string> {
        let typeArray:Array<string> = [];
        this.blocks.forEach((block) => {
            typeArray.push(block.getType())
        })
        return typeArray;
    }
}