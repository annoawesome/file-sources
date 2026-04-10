import React from "react";

function serializeFormDataToJson(formData: FormData) {
  const formObject: Record<string, unknown> = {};

  formData.forEach((value, key) => {
    formObject[key as string] = value;
  });

  return formObject;
}

function registerUser(
  e: React.SubmitEvent<HTMLFormElement>,
  setLocation: React.Dispatch<React.SetStateAction<string>>,
) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const req = new Request("/api/v1/users/register", {
    method: "POST",
    headers: new Headers([["Content-Type", "application/json"]]),
    body: JSON.stringify(serializeFormDataToJson(formData)),
  });

  fetch(req).then((res) => {
    if (!res.ok) {
      alert(
        `"Registration failed with status ${res.status}. Username already taken.`,
      );
      return;
    } else {
      console.log("Registration success");
      setLocation("user-login");
    }
  });
}

export default function UserRegistration(
  setLocation: React.Dispatch<React.SetStateAction<string>>,
) {
  return (
    <div className="flex-center user-register-flex-center">
      <h2 className="text-center">Register</h2>
      <form
        onSubmit={(event) => registerUser(event, setLocation)}
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
