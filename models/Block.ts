import {BlockType} from "./BlockType";

export abstract class Block {
    private content: any;
    private order: number;
    private type: BlockType;

    constructor(order: number, type:BlockType, content:any) {
        this.order = order;
        this.type = type;
        this.content = content
    }

    public getContent(): any {
        return {order:this.order,content:this.content}
    }

    public abstract getType():string;

}