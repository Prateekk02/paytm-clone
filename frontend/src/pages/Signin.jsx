import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <Heading label={"Sign In"} />
        <SubHeading label={"Enter your credentials to access your account"} />

        <InputBox placeholder="john.doe@gmail.com" label={"Email"} />
        <InputBox type={"password"} placeholder="******" label={"Password"} />

        <div className="pt-4">
          <Button label={"Sign In"} />
        </div>

        <div className="mt-6 text-center">
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
