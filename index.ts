// let model = require("./model.json")
//
// console.log(model.title)
// for (i = 0; i < model.contents.length; i++) {
//     console.log(model.contents[i])
// }
//
//
import {Post} from "./models/Post";
import {Block} from "./models/Block";

let block1 = new Block(1, "", "picture...", [])
let block2 = new Block(2, "letter...", "", [])
let block3 = new Block(3, "", "", ["hashtag", "hashtag2"])
// let block2 = new Block(2)

let post1 = new Post("My First Writing", [block1,block2,block3]);

// let post2 = new Content("My Second Writing",block2);
// console.log(content1.title + "/" + content1.getOrder() + "/" + content1.getParagraph() + "/" + content1.getImage() + "/" + content1.getTags());

console.log(post1.getBlockByOrder(1))
console.log(post1.getBlockByOrder(2))
console.log(post1.getBlockByOrder(3))

// console.log(post2.title+post2.block.order);
