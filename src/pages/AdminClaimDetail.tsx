import { useEffect } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  User,
  GraduationCap,
  Calendar,
  ShieldCheck,
} from "lucide-react";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

import {
  fetchPendingClaims,
  approveClaim,
  rejectClaim,
} from "../features/admin/adminThunk";

import Loader from "../components/common/Loader";

const AdminClaimDetail = () => {
  const { claimId } = useParams<{
    claimId: string;
  }>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    pendingClaims,
    loading,
    error,
  } = useAppSelector((state) => state.admin);

  useEffect(() => {
    if (pendingClaims.length === 0) {
      dispatch(fetchPendingClaims());
    }
  }, [dispatch, pendingClaims.length]);

  const claim = pendingClaims.find(
    (item) => item._id === claimId
  );

  // ================= Loading =================

  if (loading && pendingClaims.length === 0) {
    return (
      <div className="flex justify-center py-32">
        <Loader />
      </div>
    );
  }

  // ================= Error =================

  if (error) {
    return (
      <div className="py-20 text-center text-red-500">
        {error}
      </div>
    );
  }

  // ================= Not Found =================

  if (!claim) {
    return (
      <section className="min-h-screen bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h1 className="text-2xl font-bold text-slate-800">
            Claim Not Found
          </h1>

          <p className="mt-2 text-slate-500">
            This claim may have already been approved,
            rejected, or does not exist.
          </p>

          <Link
            to="/admin/pending-claims"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700"
          >
            <ArrowLeft size={18} />
            Back to Pending Claims
          </Link>

        </div>
      </section>
    );
  }

  // ================= Approve =================

  const handleApprove = async () => {
    const result = await dispatch(
      approveClaim(claim._id)
    );

    if (approveClaim.fulfilled.match(result)) {
      navigate("/admin/pending-claims");
    }
  };

  // ================= Reject =================

  const handleReject = async () => {
    const result = await dispatch(
      rejectClaim({
        id: claim._id,
      })
    );

    if (rejectClaim.fulfilled.match(result)) {
      navigate("/admin/pending-claims");
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-5xl px-6">

        {/* Back */}
        <Link
          to="/admin/pending-claims"
          className="mb-6 inline-flex items-center gap-2 text-slate-600 transition hover:text-slate-900"
        >
          <ArrowLeft size={18} />
          Back to Pending Claims
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Review Ownership Claim
          </h1>

          <p className="mt-2 text-slate-500">
            Review the claimant's information and proof
            before making a decision.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* ================= Asset ================= */}

          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

            <img
              src={
                claim.asset?.image?.url ||
                "https://placehold.co/800x500?text=No+Image"
              }
              alt={claim.asset?.title}
              className="h-80 w-full object-cover"
            />

            <div className="p-6">

              <p className="text-sm font-medium text-emerald-600">
                Asset
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                {claim.asset?.title}
              </h2>

              <p className="mt-3 text-slate-600">
                {claim.asset?.description}
              </p>

              <div className="mt-5 rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">
                  Location
                </p>

                <p className="mt-1 font-medium text-slate-800">
                  {claim.asset?.location}
                </p>
              </div>

            </div>
          </div>

          {/* ================= Claim Information ================= */}

          <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <ShieldCheck
                  size={25}
                  className="text-emerald-600"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Claim Information
                </h2>

                <p className="text-sm text-slate-500">
                  Submitted ownership claim
                </p>
              </div>

            </div>

            {/* Claimant */}

            <div className="border-b pb-5">
              <div className="flex items-start gap-3">

                <User
                  size={20}
                  className="mt-1 text-slate-500"
                />

                <div>
                  <p className="text-sm text-slate-500">
                    Claimed By
                  </p>

                  <p className="font-semibold text-slate-900">
                    {claim.claimedBy?.fullName}
                  </p>
                </div>

              </div>
            </div>

            {/* Student ID */}

            <div className="border-b py-5">
              <div className="flex items-start gap-3">

                <GraduationCap
                  size={20}
                  className="mt-1 text-slate-500"
                />

                <div>
                  <p className="text-sm text-slate-500">
                    Student ID
                  </p>

                  <p className="font-semibold text-slate-900">
                    {claim.claimedBy?.studentId}
                  </p>
                </div>

              </div>
            </div>

            {/* Department */}

            <div className="border-b py-5">
              <p className="text-sm text-slate-500">
                Department
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                {claim.claimedBy?.department}
              </p>
            </div>

            {/* Date */}

            <div className="border-b py-5">
              <div className="flex items-start gap-3">

                <Calendar
                  size={20}
                  className="mt-1 text-slate-500"
                />

                <div>
                  <p className="text-sm text-slate-500">
                    Claim Submitted
                  </p>

                  <p className="font-semibold text-slate-900">
                    {new Date(
                      claim.createdAt
                    ).toLocaleDateString()}
                  </p>
                </div>

              </div>
            </div>

            {/* Proof */}

            <div className="pt-5">

              <p className="text-sm font-medium text-slate-500">
                Proof Description
              </p>

              <div className="mt-2 rounded-xl bg-slate-50 p-4">
                <p className="leading-7 text-slate-700">
                  {claim.proofDescription}
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* ================= Actions ================= */}

        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">

          <h2 className="text-lg font-semibold text-slate-900">
            Review Decision
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Approve the claim if the provided information
            sufficiently proves ownership.
          </p>

          <div className="mt-5 flex gap-3">

            <button
              onClick={handleReject}
              disabled={loading}
              className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <XCircle size={19} />
              Reject Claim
            </button>

            <button
              onClick={handleApprove}
              disabled={loading}
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <CheckCircle size={19} />
              Approve Claim
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AdminClaimDetail;