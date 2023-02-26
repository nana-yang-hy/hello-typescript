export class Block {
    private order: number;
    private paragraph: string;
    private image: string;
    private tags: Array<string>;

    constructor(order: number, paragraph: string, image: string, tags: Array<string>) {
        this.order = order;
        this.paragraph = paragraph;
        this.image = image;
        this.tags = tags;
    }
}