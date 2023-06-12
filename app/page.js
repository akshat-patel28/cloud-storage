'use client';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import FIleAndFolderListing from '@/components/file-folder-listing/FIleAndFolderListing';
import Header from '@/components/header/Header';
import { useState } from 'react';

export default function Home() {
  const [currentPath, setCurrentPath] = useState('/');
  return (
    <>
      <Header />
      <main>
        <Breadcrumbs
          currentPath={currentPath}
          setCurrentPath={setCurrentPath}
        />
        <FIleAndFolderListing
          currentPath={currentPath}
          setCurrentPath={setCurrentPath}
        />
      </main>
    </>
  );
}
