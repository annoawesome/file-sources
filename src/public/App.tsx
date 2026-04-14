import React, { useState } from "react";
import FileSearch from "./component/FileSearch";
import UserRegistration from "./component/UserRegistration";
import UserLogin from "./component/UserLogin";
import FileUpload from "./component/FileUpload";

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
    return FileSearch(username, setLocation);
  } else if (location === "user-registration") {
    return UserRegistration(setLocation);
  } else if (location === "user-login") {
    return UserLogin(setLocation, setUsername);
  } else if (location === "file-upload") {
    return FileUpload();
  }

  return <h1>Failed to resolve</h1>;
}

export default function App() {
  const startingLocation = "file-upload";

  const [pageLocation, setPageLocation] = useState(startingLocation);
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
