import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-9">
        {/* left side */}
        <div className="flex-1">
          <Link to={"/"} className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 rounded-s-lg bg-gradient-to-r from-zinc-800 via-stone-500">
              Trauma
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            this app is something about share your trauma, bad story &
            experience in life, your failure story, name of this app is not
            decided, but main motive of this app is to share your bad experience
            "Open up is not bad name"
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div className="">
              <Label value="Your email" />
              <TextInput type="email" placeholder="your@email.com" id="email" />
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button color={"dark"} type="submit"> Sign Up </Button>
          </form>
          <div className="flex gap-3 text-sm mt-5">
            <span>
              Have an account?
            </span>
            <Link to={"/sign-in"} className="text-blue-500">
            Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
