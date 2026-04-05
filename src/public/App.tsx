import React, { useEffect, useState } from "react";
import { FileEntry, FileRep } from "./component/FileEntry";

function FileList() {
  const [fileReps, setFileReps] = useState<FileRep[]>([]);
  const searchQuery = "";

  const fileEntries = fileReps.map((fileRep, index) => (
    <FileEntry key={index} fileRep={fileRep} />
  ));

  useEffect(() => {
    const req = new Request("/api/v1/files/search", {
      method: "GET",
    });

    fetch(req)
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
      })
      .then((body: FileRep[]) => {
        setFileReps(body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchQuery]);

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
