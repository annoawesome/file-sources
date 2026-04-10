import React, { useState } from "react";
import FileSearch from "./component/FileSearch";
import UserRegistration from "./component/UserRegistration";
import UserLogin from "./component/UserLogin";

function ResolvedPage({
  location,
  setLocation,
}: {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}) {
  if (location === "files-search") {
    return FileSearch();
  } else if (location === "user-registration") {
    return UserRegistration(setLocation);
  } else if (location === "user-login") {
    return UserLogin(setLocation);
  }

  return <h1>Failed to resolve</h1>;
}

export default function App() {
  const [pageLocation, setPageLocation] = useState("user-login");

  return <ResolvedPage location={pageLocation} setLocation={setPageLocation} />;
}
