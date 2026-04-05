import React from "react";

export default function UserRegistration() {
  return (
    <div className="flex-center user-register-flex-center">
      <h2 className="text-center">Register</h2>
      <form action="" className="form-1">
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
