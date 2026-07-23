import ForgotPasswordForm from "../components/profile/ForgotPasswordForm";


const ForgotPassword = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-16">
      <div className="mx-auto max-w-md px-4">
        <ForgotPasswordForm />
      </div>
    </section>
  );
};

export default ForgotPassword;