import markdown from "./markdown";
import { type } from "./types";
import { promisify } from "util";
import { writeFile } from "fs";
import { join } from "path";

async function makeCheatSheet() {
  await promisify(writeFile)(
    join(__dirname, '../cheatsheet.md'),
    [
      markdown(type.array),
      markdown(type.boolean),
      markdown(type.date),
      markdown(type.error),
      markdown(type.function),
      markdown(type.json),
      markdown(type.number),
      markdown(type.object),
      markdown(type.regexp),
      markdown(type.string),
    ].join('\n')
  )
}

makeCheatSheet()