import { useEffect, useState } from 'react';
import { RoleList } from './RoleList'; // ⬅️ Update path if needed

export function Experiences() {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching data...");
    fetch('https://json-vercel-app.vercel.app/articles')
      .then(res => {
        if (!res.ok) {
          throw Error('Error.');
        }
        return res.json();
      })
      .then(data => {
        setArticles(data);
        console.log("Data fetched successfully");
      })
      .catch(err => {
        setError(err.message);
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="bg-[#CCD5AE] w-full">
      <img src="/assets/wave.svg" alt="Wave-top" className="w-full rotate-180" />

      <div className="bg-[#283618] py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#FEFAE0] mb-6">Experiences</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {error && <div className="text-red-500">{error}</div>}
            {!articles && !error && <div className="text-[#FEFAE0]">Loading...</div>}
            {articles && <RoleList articles={articles} title="Newsletters" />}
          </div>
        </div>
      </div>

      <img src="/assets/wave.svg" alt="Wave-bottom" className="w-full" />
    </div>
  );
}
