import React from "react";

const SignIn = () => {
  const onsubmitHandler = (e) => {
    e.preventDefault();
    const userId = e.target.userId.value;

    const DOB = e.target.DOB.value;
    if (userId.length > 6 || (isNaN(DOB) && DOB.length !== 8)) {
      console.log("login sucessfully");
    } else {
      console.log("Error in  user is  or DOB");
    }
  };
  return (
    <div className="">
      <form
        onSubmit={onsubmitHandler}
        className="flex flex-col  w-3/12 p-12  bg-black bg-opacity-70 my-10 mx-auto  right-0 left-0 text-white  rounded-lg "
      >
        <h1 className="font-bold text-3xl"> Student Sign In</h1>
        <input
          type="text"
          name="userId"
          placeholder="User Id"
          className="p-2 my-4 w-full  bg-black bg-opacity-70 rounded-lg"
        />
        <input
          type="text"
          name="DOB"
          placeholder="DDMMYYYY"
          className="p-2 my-4 w-full  bg-black bg-opacity-70 rounded-lg"
        />
        <button className="text-2xl text-white cursor-pointer ">
          <input type="submit" value="Sign in" className="cursor-pointer" />
        </button>
      </form>
    </div>
  );
};

export default SignIn;
