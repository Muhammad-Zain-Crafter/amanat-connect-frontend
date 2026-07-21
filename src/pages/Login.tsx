import LoginForm from "../components/auth/LoginForm";


const Login = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-3 text-slate-600">
            Login to access your Amanat Connect account.
          </p>
        </div>

        <LoginForm />
      </div>
    </section>
  );
};

export default Login;

