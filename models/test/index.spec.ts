import {Post} from "../src/Post";
import {expect, test} from "vitest";
import {ImageBlock} from "../src/ImageBlock";
import {ParagraphBlock} from "../src/ParagraphBlock";
import {TagsBlock} from "../src/TagsBlock";
import {StickerBlock} from "../src/StickerBlock";

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
