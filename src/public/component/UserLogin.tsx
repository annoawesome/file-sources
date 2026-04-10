import React from "react";

function serializeFormDataToJson(formData: FormData) {
  const formObject: Record<string, unknown> = {};

  formData.forEach((value, key) => {
    formObject[key as string] = value;
  });

  return formObject;
}

function loginUser(e: React.SubmitEvent<HTMLFormElement>) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const req = new Request("/api/v1/users/login", {
    method: "POST",
    headers: new Headers([["Content-Type", "application/json"]]),
    body: JSON.stringify(serializeFormDataToJson(formData)),
  });

  fetch(req).then((res) => {
    if (!res.ok) {
      alert(`"Login failed with status ${res.status}.`);
      return;
    } else {
      console.log("Registration success");
    }
  });
}

export default function UserLogin() {
  return (
    <div className="flex-center user-register-flex-center">
      <h2 className="text-center">Login</h2>
      <form onSubmit={loginUser} className="form-1">
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
