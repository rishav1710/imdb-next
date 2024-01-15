'use client';
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
import HomePage from '@/src/components/HomePage';
import React, { useEffect, useState } from 'react';
import Loading from './loading';

function Home({ searchParams }: { searchParams: { genre: string } }) {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<any>();

  const fetchData = async () => {
    const genre = searchParams.genre || 'fetchTrending';
    const res = await fetch(
      `https://api.themoviedb.org/3${
        genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
      }?api_key=${API_KEY}&language=en-US&page=${page}`
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
  }, [page, searchParams.genre]);

  useEffect(() => {
    setPage(1);
  }, [searchParams.genre]);

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
