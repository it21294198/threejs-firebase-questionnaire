"use client"
import Form from '../app/Form';
import Footer from '../app/Footer';
import Header from './Header';
import Load from './Loading/Load';
import { useState, lazy, Suspense } from 'react';

const LazyBackground = lazy(() => import('../app/Background'));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <Suspense fallback={<Load />}>
        {isLoading ? (
          <div className="loader-container">
            <Load />
          </div>
        ) : (
          <div className="">
            <Header />
            <LazyBackground />
            <Form />
            <Footer />
          </div>
        )}
      </Suspense>
    </div>
  );
}
