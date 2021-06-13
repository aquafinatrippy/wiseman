import { Article } from "./types/article";
import { TableRow } from "./types/tableRow";

const url = "http://proovitoo.twn.ee/api/";

export const fetchArticle = async (): Promise<Article[]> =>
  await fetch(`${url}/article.json`).then((response) => response.json());

export const fetchTabledata = async (): Promise<TableRow[]> =>
  await fetch(`${url}/list.json`).then((response) => response.json());
