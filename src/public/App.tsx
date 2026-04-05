import React, { useEffect, useRef, useState } from "react";
import { FileEntry, FileRep } from "./component/FileEntry";

function FileList({ searchQuery }: { searchQuery: string }) {
  const [fileReps, setFileReps] = useState<FileRep[]>([]);

  const fileEntries = fileReps.map((fileRep, index) => (
    <FileEntry key={index} fileRep={fileRep} />
  ));

  useEffect(() => {
    const req = new Request(
      `/api/v1/files/search?${new URLSearchParams({
        query: searchQuery,
      })}`,
      {
        method: "GET",
      },
    );

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
      })
      .finally(() => console.log("Retrieved results"));
  }, [searchQuery]);

  return (
    <div>
      <h2>Results</h2>
      <div className="file-entries">{fileEntries}</div>
    </div>
  );
}

function SearchBar({
  setSearchQuery,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
  // Probably not needed
  const queryRef: React.RefObject<HTMLInputElement | null> = useRef(null);

  return (
    <input
      ref={queryRef}
      className="search-1"
      type="search"
      name="a"
      id=""
      placeholder="Big Buck Bunny"
      onKeyUp={(ev) => {
        if (ev.key === "Enter" && queryRef.current) {
          setSearchQuery(queryRef.current.value);
          ev.currentTarget.blur();

          console.log("Sending search query");
        }
      }}
    />
  );
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="flex-center">
      <SearchBar setSearchQuery={setSearchQuery} />
      <FileList searchQuery={searchQuery} />
    </div>
  );
}
