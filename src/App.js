import React, { useState, useRef, useEffect, useCallback } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import useFetch from "./hooks/useFetch";

function App() {
  const [term, setTerm] = useState("");
  const [page, setPage] = useState(1);
  const { loading, error, images } = useFetch(term, page);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <>
      <header className="bg-green-500 text-white p-5 container mx-auto"><h1>PhotoGallery</h1></header>
      <main className="container mx-auto">
        <ImageSearch setTerm={setTerm} />

        {!loading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}
        

        <div className="grid grid-cols-4 gap-4">
          {images.map(image => {
            return <ImageCard key={image.id} image={image} />;
          })}
        </div>

        {error && <p>Error!</p>}
        {loading && <p>Loading...</p>}
        <div ref={loader}></div>
      </main>
    </>
  );
}

export default App;
