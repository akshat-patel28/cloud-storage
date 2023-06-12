'use client';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import FileAndFolderListing from '@/components/file-folder-listing/FileAndFolderListing';
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
        <FileAndFolderListing
          currentPath={currentPath}
          setCurrentPath={setCurrentPath}
        />
      </main>
    </>
  );
}
