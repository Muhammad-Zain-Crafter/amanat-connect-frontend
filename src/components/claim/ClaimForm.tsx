import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  clearClaimMessage,
} from "../../features/claim/claimSlice";
import { createClaim } from "../../features/claim/claimThunk";

interface ClaimFormProps {
  assetId: string;
}

const ClaimForm = ({ assetId }: ClaimFormProps) => {
  const dispatch = useAppDispatch();

  const { loading, success, error } = useAppSelector(
    (state) => state.claim
  );

  const [proofDescription, setProofDescription] =
    useState("");

  useEffect(() => {
    return () => {
      dispatch(clearClaimMessage());
    };
  }, [dispatch]);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (proofDescription.trim().length < 20) {
      return;
    }

    await dispatch(
      createClaim({
        assetId,
        proofDescription,
      })
    ).unwrap();

    setProofDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 rounded-3xl bg-white p-8 shadow-lg"
    >
      <div className="mb-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <ShieldCheck
            className="text-emerald-600"
            size={30}
          />
        </div>

        <h2 className="text-2xl font-bold">
          Claim this Asset
        </h2>

        <p className="mt-2 text-gray-500">
          Describe something that proves this
          item belongs to you.
        </p>
      </div>

      <label className="mb-2 block font-medium">
        Proof Description
      </label>

      <textarea
        rows={6}
        value={proofDescription}
        onChange={(e) =>
          setProofDescription(e.target.value)
        }
        maxLength={500}
        placeholder="Example: This laptop has a sticker on the back, the wallpaper contains my university timetable, and the charger has blue tape around the cable."
        className="w-full resize-none rounded-xl border p-4 outline-none transition focus:border-emerald-600"
      />

      <div className="mt-2 flex justify-between text-sm text-gray-500">
        <span>
          Minimum 20 characters
        </span>

        <span>
          {proofDescription.length}/500
        </span>
      </div>

      {proofDescription.length > 0 &&
        proofDescription.length < 20 && (
          <p className="mt-3 rounded-lg bg-red-50 p-3 text-sm text-red-600">
            Please provide at least 20
            characters.
          </p>
        )}

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 p-3 text-red-600">
          {error}
        </p>
      )}

      {success && (
        <p className="mt-4 rounded-lg bg-green-50 p-3 text-green-600">
          {success}
        </p>
      )}

      <button
        type="submit"
        disabled={
          loading ||
          proofDescription.trim().length < 20
        }
        className="mt-8 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {loading
          ? "Submitting..."
          : "Submit Claim"}
      </button>
    </form>
  );
};

export default ClaimForm;