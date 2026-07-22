import {
  Mail,
  GraduationCap,
  Building2,
  Shield,
  Pencil,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";

const ProfileCard = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
      {/* Cover */}

      <div className="h-40 bg-gradient-to-r from-emerald-500 to-emerald-700" />

      {/* Avatar */}

      <div className="-mt-16 flex flex-col items-center px-8">
        <img
          src={
            user?.profileImage?.url ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(
              user?.fullName || "User"
            )}`
          }
          alt={user?.fullName}
          className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
        />

        <h1 className="mt-5 text-3xl font-bold">
          {user?.fullName}
        </h1>

        <p className="mt-1 text-gray-500">
          {user?.role?.toUpperCase()}
        </p>
      </div>

      {/* Details */}

      <div className="mt-10 grid gap-6 px-8 pb-10 md:grid-cols-2">
        <InfoCard
          icon={<Mail size={20} />}
          label="Email"
          value={user?.email}
        />

        <InfoCard
          icon={<GraduationCap size={20} />}
          label="Student ID"
          value={user?.studentId}
        />

        <InfoCard
          icon={<Building2 size={20} />}
          label="Department"
          value={user?.department}
        />

        <InfoCard
          icon={<Shield size={20} />}
          label="Role"
          value={user?.role}
        />

      </div>

      {/* Buttons */}

      <div className="flex flex-col gap-4 border-t p-8 md:flex-row">
        <Link
          to="/profile/edit"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          <Pencil size={18} />
          Edit Profile
        </Link>

        <Link
          to="/change-password"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-emerald-600 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-50"
        >
          <Lock size={18} />
          Change Password
        </Link>
      </div>
    </div>
  );
};

interface Props {
  icon: React.ReactNode;
  label: string;
  value?: string;
}

const InfoCard = ({ icon, label, value }: Props) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl border bg-slate-50 p-5">
      <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-500">{label}</p>

        <p className="font-semibold text-slate-800">
          {value || "-"}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;