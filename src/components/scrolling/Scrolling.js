import { useCallback, useEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./Scrolling.css";
function Scrolling() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch(query, page);
  const loader = useRef(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div className="Scrolling">
      <div className="Scrolling-total-data-box">
        {list.map((item) => (
          <div className="Scrolling-data-box" key={item.id}>
            <div className="Scrolling-title-box">{item.title}</div>
            <div className="Scrolling-content-box"> {`${item.body}`}</div>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={loader} />
    </div>
  );
}

export default Scrolling;
