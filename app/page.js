import FIleAndFolderListing from "@/components/file-folder-listing/FIleAndFolderListing";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FIleAndFolderListing />
      </main>
    </>
  );
}
