import Link from "next/link";
import Pagenation from "../Pagenation";

const Articles = ({ list, id }) => {
  return (
    <>
      <ul>
        {list.map((article) => {
          return (
            <li key={article.id} className="workspage-works-box">
              <Link href={`/works/${article.slug}`}>
                <div className="workspage-works-box-category">
                  <p className={article.category_name.toLowerCase()}>
                    {article.category_name}
                  </p>
                </div>
                <div className="workspage-works-box-title">
                  <p>{article.title.rendered}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Pagenation id={id} />
    </>
  );
};

export default Articles;
