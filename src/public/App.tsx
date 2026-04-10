import React, { useState } from "react";
import FileSearch from "./component/FileSearch";
import UserRegistration from "./component/UserRegistration";
import UserLogin from "./component/UserLogin";

function ResolvedPage({
  location,
  setLocation,
  username,
  setUsername,
}: {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}) {
  if (location === "files-search") {
    return FileSearch(username);
  } else if (location === "user-registration") {
    return UserRegistration(setLocation);
  } else if (location === "user-login") {
    return UserLogin(setLocation, setUsername);
  }

  return <h1>Failed to resolve</h1>;
}

export default function App() {
  const [pageLocation, setPageLocation] = useState("user-login");
  const [username, setUsername] = useState<string>("");

  return (
    <ResolvedPage
      location={pageLocation}
      setLocation={setPageLocation}
      username={username}
      setUsername={setUsername}
    />
  );
}
