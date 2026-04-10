import React from "react";
import FileSearch from "./component/FileSearch";
import UserRegistration from "./component/UserRegistration";
import UserLogin from "./component/UserLogin";

function ResolvedPage({ location }: { location: string }) {
  if (location === "files-search") {
    return FileSearch();
  } else if (location === "user-registration") {
    return UserRegistration();
  } else if (location === "user-login") {
    return UserLogin();
  }

  return <h1>Failed to resolve</h1>;
}

export default function App() {
  const pageLocation = "user-login";

  return <ResolvedPage location={pageLocation} />;
}
