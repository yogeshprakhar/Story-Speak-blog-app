import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [formData, setFormdata] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading, error: errorMessage} = useSelector(state => state.user)

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please Select all fields"));
    }

    try {
      dispatch(signInStart());
      const res = await fetch(`api/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* <div className="">
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </div> */}
            <div className="">
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="your@email.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button color={"dark"} type="submit" disabled={loading}>
              {" "}
              {loading ? (
                <>
                  <Spinner size={"sm"} color={"primary"} />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}{" "}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-3 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to={"/sign-up"} className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
