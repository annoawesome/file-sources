import React from "react";

type UserData = {
  username: string;
};

function serializeFormDataToJson(formData: FormData) {
  const formObject: Record<string, unknown> = {};

  formData.forEach((value, key) => {
    formObject[key as string] = value;
  });

  return formObject;
}

function loginUser(
  e: React.SubmitEvent<HTMLFormElement>,
  setLocation: React.Dispatch<React.SetStateAction<string>>,
  setUsername: React.Dispatch<React.SetStateAction<string>>,
) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const req = new Request("/api/v1/users/login", {
    method: "POST",
    headers: new Headers([["Content-Type", "application/json"]]),
    body: JSON.stringify(serializeFormDataToJson(formData)),
  });

  fetch(req)
    .then((res) => {
      if (!res.ok) {
        if (res.status === 400) {
          alert("Wrong username or password");
        }

        throw new Error(res.status + ": " + res.statusText);
      } else {
        return res.json();
      }
    })
    .then((body: UserData) => {
      const username = body.username;
      console.log("Registration success");
      setLocation("files-search");
      setUsername(username);
    });
}

export default function UserLogin(
  setLocation: React.Dispatch<React.SetStateAction<string>>,
  setUsername: React.Dispatch<React.SetStateAction<string>>,
) {
  return (
    <div className="flex-center user-register-flex-center">
      <h2 className="text-center">Login</h2>
      <form
        onSubmit={(event) => loginUser(event, setLocation, setUsername)}
        className="form-1"
      >
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="" />
        <button type="submit" className="button-1">
          Register
        </button>
      </form>
    </div>
  );
}
