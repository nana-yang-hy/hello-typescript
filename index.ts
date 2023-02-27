import {Post} from "./models/Post";
import {ImageBlock} from "./models/ImageBlock";
import {ParagraphBlock} from "./models/ParagraphBlock";
import {TagsBlock} from "./models/TagsBlock";

let image1 = new ImageBlock(1,  "picture...")
let paragraph1 = new ParagraphBlock(2,"letter..." )
let tags1 = new TagsBlock(3, ["hashtag", "hashtag2"])
let image2 = new ImageBlock(4,"picture2...")

let post1 = new Post("My First Writing", [image1,paragraph1,tags1,image2]);

console.log(post1.getAllBlocksType()); //拿到全部block的type

