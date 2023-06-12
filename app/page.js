'use client';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import FileAndFolderListView from '@/components/file-folder-listing/FileAndFolderListView';
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
        <FileAndFolderListView
          currentPath={currentPath}
          setCurrentPath={setCurrentPath}
        />
      </main>
    </>
  );
}
