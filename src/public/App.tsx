import React from "react";

function FileList() {
  return (
    <div>
      <h2>Results</h2>
      <div>
        <FileEntry name="File Name 1" />
      </div>
    </div>
  );
}

function FileEntry({ name }: { name: string }) {
  return (
    <article className="file-entry">
      <h3 className="text-2">{name}</h3>
      <button type="button" className="button-2">
        Download
      </button>
    </article>
  );
}

function SearchBar() {
  return (
    <input
      className="search-1"
      type="search"
      name="a"
      id=""
      placeholder="Big Buck Bunny"
    />
  );
}

export default function App() {
  return (
    <div className="flex-center">
      <SearchBar />
      <FileList />
    </div>
  );
}
