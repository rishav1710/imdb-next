'use client';
import React from 'react';
import Card from './Card';
import { Pagination } from '@nextui-org/react';

function HomePage({
  results,
  totalPages,
  handlePage,
  currentPage,
}: {
  results: any;
  totalPages: number;
  currentPage: number;
  handlePage: (page: number) => void;
}) {
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {results.map((result: any, index: number) => {
          return <Card key={index} result={result} />;
        })}
      </div>
      {results.length > 0 && (
        <div>
          <Pagination
            color="warning"
            isCompact
            showControls
            initialPage={1}
            page={currentPage}
            className="flex p-4 lg:text-lg justify-center gap-6"
            total={totalPages}
            onChange={(e) => handlePage(e)}
          />
        </div>
      )}
    </>
  );
}

export default HomePage;
