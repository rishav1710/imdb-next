'use client';
import HomePage from '@/src/components/HomePage';
import React, { useEffect, useState } from 'react';
import Loading from './loading';
import { useSearchParams } from 'next/navigation';

function Home() {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<any>();
  const searchParams = useSearchParams();

  const fetchData = async () => {
    const genre = searchParams.get('genre') || 'fetchTrending';

    const res = await fetch(
      `https://api.themoviedb.org/3${
        genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
      }?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${page}`
    );
    if (!res.ok) {
      throw new Error('DATA NOT FOUND');
    }
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchParams.get('genre')]);

  useEffect(() => {
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get('genre')]);

  const handlePage = (page: number) => {
    setPage(page);
  };

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      <HomePage
        currentPage={page}
        results={data.results}
        totalPages={Math.floor(data.total_pages / 2)}
        handlePage={handlePage}
      />
    </>
  );
}

export default Home;
