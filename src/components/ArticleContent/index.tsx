// import Article from "../../types/article";

// interface Test {
//   name: string;
// }

type ArticleProps = {
  data?: Object;
};

const ArticleContent = (props: ArticleProps) => {
  console.log(props);
  return (
    <div>
      test <br />
    </div>
  );
};

export default ArticleContent;
