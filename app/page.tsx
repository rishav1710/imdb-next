const API_KEY = process.env.API_KEY;
import HomePage from '@/src/components/HomePage';
import { useSearchParams } from 'next/navigation';
import React from 'react';

async function Home({ searchParams }: { searchParams: { genre: string } }) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error('DATA NOT FOUND');
  }

  return (
    <>
      <HomePage results={data.results} />
    </>
  );
}

export default Home;
