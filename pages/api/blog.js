import * as fs from "fs";

export default async function handler(req, res) {
  
  let data = await fs.promises.readdir('blogdata');
  let allBlogs = [];

  for(let i=0 ; i<data.length ; i++){
    let temp = await fs.promises.readFile(`blogdata/${data[i]}` , 'utf-8');
    allBlogs.push(JSON.parse(temp));
  }

  res.status(200).json(allBlogs);

}
