import {BlockType} from "./BlockType";

export class Block {
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

    public getType():string{
        if(this.type==BlockType.image){
            return "this is image"
        }else if(this.type==BlockType.paragraph){
            return "this is paragraph"
        }else if(this.type==BlockType.tags){
            return "this is tags"
        }
        return "error"
    }
}