import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { PenguinSilhouette } from '../components/PenguinSilhouette';

export function NotFoundPage() {
  return (
    <section className="flex min-h-[80vh] items-center bg-midnight text-snow">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-10 px-5 pt-32 md:flex-row md:items-center md:gap-16 md:px-8 lg:px-12">
        <PenguinSilhouette revealOnView strokeWidth={1.5} className="h-48 text-glacier" />
        <div>
          <p className="font-display text-sm font-bold text-glacier">404</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.03em] md:text-6xl">This page drifted off the ice.</h1>
          <p className="mt-4 max-w-md text-lg text-icegrey">The page you’re looking for doesn’t exist or has moved.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-arctic px-7 py-4 text-sm font-semibold text-midnight transition-colors duration-200 hover:bg-glacier">
            
            Back to home
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>);

}