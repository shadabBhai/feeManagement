import { useState } from "react";
import { useForm } from "react-hook-form";

const Admin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handelTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className=" w-3/12 h-96 p-12  bg-black bg-opacity-90 my-10 mx-auto  right-0 left-0   rounded-lg">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <h1 className="text-center font-bold text-3xl my-4 text-white">
          Admin login{" "}
        </h1>

        <input
          {...register("Email", { required: true })}
          className="my-4 mx-12 rounded-sm"
          placeholder="Email"
        />
        {errors.Email && <p className="text-white">Email is required.</p>}
        <div className="flex">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
            className="my-4 mx-12 rounded-sm"
            placeholder="Password"
          />
          {errors.password && <p className="text-white">Enter password </p>}
          <button
            onClick={handelTogglePassword}
            className=" text-white -mx-10 "
            type="button"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <input
          type="submit"
          className="my-4 mx-20 rounded-sm border-none bg-slate-500 w-28  cursor-pointer text-white "
        />
      </form>
    </div>
  );
};

export default Admin;
