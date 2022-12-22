import { useState } from "react";
import _ from "lodash";
import Link from "next/link";
import Pagination from "../Pagination";

const Articles = ({ articles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
  };

  const paginatePosts = paginate(articles, currentPage, pageSize);

  return (
    <>
      <ul>
        {paginatePosts.map((article) => {
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
      <Pagination
        items={articles.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Articles;
