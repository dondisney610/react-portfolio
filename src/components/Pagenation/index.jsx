import Link from "next/link";

const Pagenation = ({ id }) => {
  const pageNation = () => {
    switch (id) {
      case "2":
        return (
          <>
            <Link className="previouspostslink" rel="prev" href="/works">
              &lt;
            </Link>
            <Link className="page smaller" href="/works">
              1
            </Link>
            <span aria-current="page" className="current">
              2
            </span>
            <Link className="page larger" href="/works/3">
              3
            </Link>
            <Link className="nextpostslink" href="/works/3">
              &gt;
            </Link>
          </>
        );
      case "3":
        return (
          <>
            <Link className="previouspostslink" href="/works/2">
              &lt;
            </Link>
            <Link className="page smaller" href="/works">
              1
            </Link>
            <Link className="page smaller" href="/works/2">
              2
            </Link>
            <span aria-current="page" className="current">
              3
            </span>
          </>
        );
      default:
        return (
          <>
            <span aria-current="page" className="current">
              1
            </span>
            <Link className="page larger" href="/works/2/">
              2
            </Link>
            <Link className="page larger" href="/works/3/">
              3
            </Link>
            <Link className="nextpostslink" href="/works/2">
              &gt;
            </Link>
          </>
        );
    }
  };
  return (
    <div className="works-pager">
      <div className="wp-pagenavi" role="navigation">
        {pageNation()}
      </div>
    </div>
  );
};

export default Pagenation;
