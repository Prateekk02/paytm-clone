import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <Heading label={"Sign Up"} />
        <SubHeading label={"Enter your information to create an account"} />

        <InputBox
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="John"
          label={"First Name"}
        />
        <InputBox
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Doe"
          label={"Last Name"}
        />
        <InputBox
          onChange={(e) => setUsername(e.target.value)}
          placeholder="john.doe@gmail.com"
          label={"Email"}
        />
        <InputBox
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          label={"Password"}
          type={"password"}
        />

        <div className="pt-4">
          <Button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  username,
                  firstName,
                  lastName,
                  password,
                }
              );
              localStorage.setItem("token", response.data.token);
              navigate("/dashboard");
            }}
            label={"Sign Up"}
          />
        </div>

        <div className="mt-6 text-center">
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign In"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
