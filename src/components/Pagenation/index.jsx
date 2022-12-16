const Pagenation = () => {
  return (
    <div className="works-pager">
      <div className="wp-pagenavi" role="navigation">
        <span aria-current="page" className="current">
          1
        </span>
        <a
          className="page larger"
          title="ページ 2"
          href="http://localhost:10073/articles/page/2/"
        >
          2
        </a>
        <a
          className="page larger"
          title="ページ 3"
          href="http://localhost:10073/articles/page/3/"
        >
          3
        </a>
        <span className="extend">...</span>
        <a
          className="nextpostslink"
          rel="next"
          aria-label="次のページ"
          href="http://localhost:10073/articles/page/2/"
        >
          &gt;
        </a>
        <a
          className="last"
          aria-label="Last Page"
          href="http://localhost:10073/articles/page/4/"
        >
          &gt;&gt;
        </a>
      </div>
    </div>
  );
};

export default Pagenation;
