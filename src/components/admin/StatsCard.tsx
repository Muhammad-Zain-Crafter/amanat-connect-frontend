import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
}

const StatsCard = ({
  title,
  value,
  icon: Icon,
  color,
}: Props) => {
  return (
    <div className="group rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {value}
          </h2>

        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
        >
          <Icon
            className="text-white"
            size={28}
          />
        </div>

      </div>

    </div>
  );
};

export default StatsCard;