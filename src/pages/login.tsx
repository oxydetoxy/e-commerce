import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
const login = () => {
  const [gender, setGender] = useState(" ");
  const [date, SetDate] = useState("");
  return (
    <div className="login">
      <main>
        <h1 className="heading">Login</h1>
        <div>
          <label>
            Gender
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            value={date}
            onChange={(e) => SetDate(e.target.value)}
          />
        </div>
        <div>
          <p> Alredy Signed In Once</p>
          <button>
            <FcGoogle />
            <span> Sign In With Google</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default login;
