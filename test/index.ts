import {Post} from "../src/models/Post";
import {ImageBlock} from "../src/models/ImageBlock";
import {ParagraphBlock} from "../src/models/ParagraphBlock";
import {TagsBlock} from "../src/models/TagsBlock";
import {StickerBlock} from "../src/models/StickerBlock";

let image1 = new ImageBlock(1,  "picture...")
let paragraph1 = new ParagraphBlock(2,"letter..." )
let tags1 = new TagsBlock(3, ["hashtag", "hashtag2"])
let image2 = new ImageBlock(4,"picture2...")
let sticker1 = new StickerBlock(5,"ya!")

let post1 = new Post("My First Writing", [image1,paragraph1,tags1,image2,sticker1]);

console.log(post1.getAllBlocksType()); //拿到全部block的type

