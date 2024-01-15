'use client';
import Loading from '@/app/loading';
import HomePage from '@/src/components/HomePage';
import { useEffect, useState } from 'react';

export default function SearchPage({ params }: any) {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const seachTerm = params.searchTerm;
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${seachTerm}&language=en-US&page=1&include_adult=false`
      );
      if (!res.ok) {
        throw new Error('DATA NOT FOUND');
      }
      const data = await res.json();
      setData(data);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handlePage = (page: number) => {
    setPage(page);
  };

  if (!data) {
    return <Loading />;
  }

  return (
    <div>
      {data.results && data.results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {data.results && (
        <HomePage
          results={data.results}
          totalPages={data.total_pages}
          handlePage={handlePage}
          currentPage={page}
        />
      )}
    </div>
  );
}
