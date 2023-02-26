import { Block } from "./Block";

export class Post {
    private title: string;
    private blocks: Array<Block>;

    constructor(myTitle: string, blocks: Array<Block>) {
        this.title = myTitle;
        this.blocks = blocks;
    }

    public getBlockByOrder(order: number) {
        return this.blocks[order - 1];
    }
}