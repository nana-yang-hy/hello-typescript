import {Post} from "./models/Post";
import {expect, test} from "vitest";
import {ImageBlock} from "./models/ImageBlock";
import {ParagraphBlock} from "./models/ParagraphBlock";
import {TagsBlock} from "./models/TagsBlock";
import {StickerBlock} from "./models/StickerBlock";

test("test get all BlockType", () => {
    let image1 = new ImageBlock(1, "picture...");
    let paragraph1 = new ParagraphBlock(2, "letter...");
    let tags1 = new TagsBlock(3, ["hashtag", "hashtag2"]);
    let sticker1 = new StickerBlock(4, "ya!");

    let post1 = new Post("My First Writing", [image1, paragraph1, tags1,sticker1]);
    expect(post1.getAllBlockType()).toEqual([
        "this is image",
        "this is paragraph",
        "this is tags",
        "this is sticker"
    ])
})
