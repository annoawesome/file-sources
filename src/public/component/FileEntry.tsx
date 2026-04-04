import React from "react";

export type FileRep = {
  name: string;
  source: string;
};

export function FileEntry({ fileRep }: { fileRep: FileRep }) {
  return (
    <article className="file-entry">
      <h3 className="text-2">{fileRep.name}</h3>
      <button type="button" className="button-2">
        Download
      </button>
    </article>
  );
}
