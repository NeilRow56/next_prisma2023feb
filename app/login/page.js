const LoginScreen = () => {
  return (
    <div className="flex  h-full flex-col items-center justify-center  gap-y-4">
      <h2 className="text-5xl font-extrabold text-yellow-300">
        {" "}
        Welcome to Kudos!
      </h2>
      <p className="font-semibold text-slate-300">
        Log In To Give Some Praise!
      </p>
      <form method="post" className="w-96 rounded-2xl bg-gray-200 p-6">
        <label htmlFor="email" className="font-semibold text-blue-600">
          Email
        </label>

        <input
          type="text"
          id="email"
          name="email"
          className="my-2 w-full rounded-xl p-2"
        />

        <label htmlFor="password" className="font-semibold text-blue-600">
          Password
        </label>

        <input
          type="password"
          id="password"
          name="password"
          className="my-2 w-full rounded-xl p-2"
        />

        <div className="w-full text-center">
          <input
            type="submit"
            className="mt-2 rounded-xl bg-yellow-300 px-3 py-2 font-semibold text-blue-600 transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-yellow-400"
            value="Sign In"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
