import {
  Search,
  ClipboardCheck,
  Handshake,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Report Lost or Found Item",
    description:
      "Students can quickly report a lost or found item by providing details and an image.",
  },
  {
    icon: ClipboardCheck,
    title: "Admin Verification",
    description:
      "Every report is reviewed and approved by the administrator before it becomes visible.",
  },
  {
    icon: Handshake,
    title: "Claim & Recover",
    description:
      "Owners submit a claim, and once approved, the item is safely returned to them.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Simple Process
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            How Amanat Connect Works
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Recovering lost belongings has never been easier.
            Follow these simple steps to reconnect with your valuables.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <Icon
                    size={32}
                    className="text-emerald-600"
                  />
                </div>

                <h3 className="mb-4 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;