import { useEffect, useState } from 'react';
import { RoleList } from './RoleList';

export function Experiences() {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/roles')
      .then(res => {
        if (!res.ok) throw Error('Could not fetch roles.');
        return res.json();
      })
      .then(data => {
        setArticles(data);
      })
      .catch(err => {
        setError(err.message);
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className=" w-full">
      {/* Top wave */}
      <div className="bg-[#CCD5AE]">
        <img src="/assets/wave.svg" alt="Top Wave" className="w-full rotate-180 " />
      </div>

      {/* Content section */}
      <div className="bg-[#283618] px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FEFAE0] mb-10">
            Experiences
          </h1>

          <div className="grid-rows-2 ">
              {error && <div className="text-red-400 text-center">{error}</div>}
              {!articles && !error && <div className="text-[#FEFAE0] text-center">Loading...</div>}
              {articles && <RoleList articles={articles} />}
          </div>
          
        </div>
      </div>

      {/* Bottom wave */}
      <div className="bg-[#E9EDC9]">
        <img src="/assets/wave.svg" alt="Top Wave" className="w-full" />
      </div>
    </div>
  );
}
