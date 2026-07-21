import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <section className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Create Account
          </h1>

          <p className="mt-3 text-slate-600">
            Join Amanat Connect to report and recover lost items.
          </p>
        </div>

        <RegisterForm />
      </div>
    </section>
  );
};

export default Register;