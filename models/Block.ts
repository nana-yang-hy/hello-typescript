export class Block{
    "order":number;
    "paragraph":string;
    "image":string;
    "tags":Array<string>;

    constructor(order:number,paragraph:string,image:string,tags:Array<string>) {
        this.order = order;
        this.paragraph = paragraph;
        this.image = image;
        this.tags = tags;
    }
}