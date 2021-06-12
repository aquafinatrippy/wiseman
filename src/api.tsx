import { Article } from "./types/article";

const url = "http://proovitoo.twn.ee/api/";

export const fetchArticle = async (): Promise<Article[]> =>
  await fetch(`${url}/article.json`).then((response) => response.json());
