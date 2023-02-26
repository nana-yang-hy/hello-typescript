import {Type} from "./Type";

export class Block {
    private content: any;
    private order: number;
    private type: Type;

    constructor(order: number,type:Type,content:any) {
        this.order = order;
        this.type = type;
        this.content = content
    }

    public getContent(): any {
        return {order:this.order,cotent:this.content}
    }
}