import React from "react";
import { FileEntry, FileRep } from "./component/FileEntry";

function FileList() {
  // temporary value for testing
  const fileReps: FileRep[] = [
    {
      name: "File Name 1",
      source: "",
    },
    {
      name: "File Name 2",
      source: "",
    },
  ];

  const fileEntries = fileReps.map((fileRep) => (
    <FileEntry fileRep={fileRep} />
  ));

  return (
    <div>
      <h2>Results</h2>
      <div className="file-entries">{fileEntries}</div>
    </div>
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
