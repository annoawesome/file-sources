import React from "react";
import FileSearch from "./component/FileSearch";
import UserRegistration from "./component/UserRegistration";

function ResolvedPage({ location }: { location: string }) {
  if (location === "files-search") {
    return FileSearch();
  } else if (location === "user-registration") {
    return UserRegistration();
  }

  return <h1>Failed to resolve</h1>;
}

export default function App() {
  const pageLocation = "user-registration";

  return <ResolvedPage location={pageLocation} />;
}
