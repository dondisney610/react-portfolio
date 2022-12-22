import Link from "next/link";
import _ from "lodash";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) {
    return null;
  }
  const pages = _.range(1, pageCount + 1);
  return (
    <div className="works-pager">
      <div className="wp-pagenavi" role="navigation">
        {currentPage !== 1 && (
          <div>
            <Link href="" onClick={() => onPageChange(currentPage - 1)}>
              &lt;
            </Link>
          </div>
        )}
        {pages.map((page) => {
          return (
            <div key={page}>
              {page === currentPage ? (
                <span className="current">{page}</span>
              ) : (
                <Link href="" onClick={() => onPageChange(page)}>
                  {page}
                </Link>
              )}
            </div>
          );
        })}
        {currentPage !== Math.ceil(pageCount) && (
          <div>
            <Link href="" onClick={() => onPageChange(currentPage + 1)}>
              &gt;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
