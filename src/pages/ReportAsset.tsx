import ReportForm from "../components/report/ReportForm";


const ReportAsset = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Report an Asset
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Help others recover their belongings by reporting a
            lost or found item.
          </p>
        </div>

        <ReportForm />
      </div>
    </section>
  );
};

export default ReportAsset;