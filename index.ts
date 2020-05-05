import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const client = axios.create({
  baseURL: 'https://dev.to/api/',
  timeout: 1000,
  headers: { 'api-key': process.env.DEV_TO_API_KEY }
});

const getArticles = async () => {
  return await client.get("/articles", {params: {
    state: 'rising',
    per_page: '1000'
  }})
}

const main = async () => {
  const tags : {[key: string] : number} = {};
  const articles = await getArticles();
  for (const article of articles.data) {
    for (const tag of article.tag_list) {
      tags[tag] = (tags[tag] || 0) + article.positive_reactions_count + article.comments_count
    }
  };
  console.log(tags);
}

(async () => {
  await main();
})();