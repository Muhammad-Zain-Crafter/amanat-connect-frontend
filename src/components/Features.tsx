import {
  Search,
  ShieldCheck,
  FilePlus2,
  Handshake,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description:
      "Quickly search lost and found items using keywords, categories, and locations.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Claims",
    description:
      "Only authenticated students can submit claims, ensuring a secure recovery process.",
  },
  {
    icon: FilePlus2,
    title: "Easy Reporting",
    description:
      "Report a lost or found item in just a few steps with image upload support.",
  },
  {
    icon: Handshake,
    title: "Secure Recovery",
    description:
      "Our approval workflow helps return belongings safely to their rightful owners.",
  },
];

const Features = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-widest text-emerald-600">
            Why Choose Amanat Connect
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Making Lost & Found Simple
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Amanat Connect streamlines the entire process of reporting,
            searching, and recovering belongings through a secure and
            user-friendly platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-emerald-100 p-4 transition group-hover:bg-emerald-600">
                  <Icon
                    size={30}
                    className="text-emerald-600 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;