import { useEffect, useState } from "react";
import ArticleContent from "../components/ArticleContent";
import { fetchArticle } from "../api";
import Article from "../types/article";

const ArticleView = () => {
  const [articleInfo, setarticleInfo] = useState<Article[]>([]);
  

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchArticle();

        setarticleInfo(data);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  console.log(articleInfo);
  if (articleInfo.length !== 0) {
    console.log(articleInfo);
  }

  return (
    <div>
      article
      <ArticleContent data={[articleInfo]} />
    </div>
  );
};

export default ArticleView;
