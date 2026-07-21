import {
  PackageCheck,
  Search,
  Users,
  Trophy,
} from "lucide-react";

const stats = [
  {
    icon: PackageCheck,
    value: "500+",
    label: "Items Reported",
  },
  {
    icon: Search,
    value: "320+",
    label: "Recovered Items",
  },
  {
    icon: Users,
    value: "1500+",
    label: "Students Served",
  },
  {
    icon: Trophy,
    value: "95%",
    label: "Recovery Rate",
  },
];

export const StatsSection = () => {
  return (
    <section className="bg-emerald-600 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={index}
              className="text-center"
            >
              <Icon
                size={42}
                className="mx-auto mb-5"
              />

              <h2 className="text-4xl font-bold">
                {stat.value}
              </h2>

              <p className="mt-3 text-emerald-100">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};