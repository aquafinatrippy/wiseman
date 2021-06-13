interface Article {
  id?: string;
  title?: string;
  author?: string;
  date?: Date;
  images?: Array<[]>;
  intro?: string;
  body?: string;
  tags?: Array<[]>;
}

export default Article;
