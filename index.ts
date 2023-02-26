import {Post} from "./models/Post";
import {Block} from "./models/Block";
import { Type } from "./models/Type"

let block1 = new Block(1,Type.image,  "picture...")
let block2 = new Block(2,Type.paragraph ,"letter..." )
let block3 = new Block(3,Type.tags, ["hashtag", "hashtag2"])
let block4 = new Block(4,Type.image,"picture2...")

let post1 = new Post("My First Writing", [block1,block2,block3,block4]);

console.log(post1.getAllBlocksType()); //拿到全部block的type

