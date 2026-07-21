import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ImagePlus,
  Calendar,
  MapPin,
  Phone,
  FileText,
  Tag,
} from "lucide-react";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import { createAsset } from "../../features/reportAsset/reportAssetThunk";
import { resetReportAsset } from "../../features/reportAsset/reportAssetSlice";
import { fetchAssets } from "../../features/asset/assetThunk";

const ReportForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loading, success } = useAppSelector(
    (state) => state.reportAsset
  );

  const [imagePreview, setImagePreview] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(
    null
  );

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    status: "lost",
    location: "",
    date: "",
    contactNumber: "",
  });

  useEffect(() => {
    if (success) {
      dispatch(fetchAssets({ page: 1, search: "" }));

      dispatch(resetReportAsset());

      navigate("/assets");
    }
  }, [success, dispatch, navigate]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.length) return;

    const file = e.target.files[0];

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("status", formData.status);
    data.append("location", formData.location);
    data.append("date", formData.date);
    data.append(
      "contactNumber",
      formData.contactNumber
    );

    if (imageFile) {
      data.append("image", imageFile);
    }

    dispatch(createAsset(data));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image */}

        <div>
          <label className="mb-3 block font-semibold">
            Asset Image
          </label>

          <label className="flex h-80 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 transition hover:border-emerald-500">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="h-full w-full rounded-2xl object-cover"
              />
            ) : (
              <>
                <ImagePlus
                  size={50}
                  className="mb-4 text-emerald-600"
                />

                <p className="font-medium">
                  Click to upload image
                </p>

                <span className="mt-2 text-sm text-gray-500">
                  JPG, PNG or WEBP
                </span>
              </>
            )}

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Form */}

        <div className="space-y-5">
          {/* Title */}

          <div>
            <label className="mb-2 block font-medium">
              Title
            </label>

            <div className="flex items-center rounded-xl border px-4">
              <Tag
                size={18}
                className="text-gray-400"
              />

              <input
                type="text"
                name="title"
                placeholder="Enter asset title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 outline-none"
                required
              />
            </div>
          </div>

          {/* Description */}

          <div>
            <label className="mb-2 block font-medium">
              Description
            </label>

            <div className="flex rounded-xl border px-4">
              <FileText
                size={18}
                className="mt-4 text-gray-400"
              />

              <textarea
                rows={4}
                name="description"
                placeholder="Describe the asset..."
                value={formData.description}
                onChange={handleChange}
                className="w-full resize-none p-3 outline-none"
                required
              />
            </div>
          </div>

          {/* Category & Status */}

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-xl border p-3 outline-none"
                required
              >
                <option value="">
                  Select Category
                </option>
                <option value="Electronics">
                  Electronics
                </option>
                <option value="Wallet">
                  Wallet
                </option>
                <option value="Documents">
                  Documents
                </option>
                <option value="ID Card">
                  ID Card
                </option>
                <option value="Keys">
                  Keys
                </option>
                <option value="Bags">Bags</option>
                <option value="Books">Books</option>
                <option value="Clothing">
                  Clothing
                </option>
                <option value="Others">
                  Others
                </option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-xl border p-3 outline-none"
              >
                <option value="lost">Lost</option>
                <option value="found">Found</option>
              </select>
            </div>
          </div>

          {/* Location */}

          <div>
            <label className="mb-2 block font-medium">
              Location
            </label>

            <div className="flex items-center rounded-xl border px-4">
              <MapPin
                size={18}
                className="text-gray-400"
              />

              <input
                type="text"
                name="location"
                placeholder="Last seen location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 outline-none"
                required
              />
            </div>
          </div>

          {/* Date & Contact */}

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium">
                Date
              </label>

              <div className="flex items-center rounded-xl border px-4">
                <Calendar
                  size={18}
                  className="text-gray-400"
                />

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Contact Number
              </label>

              <div className="flex items-center rounded-xl border px-4">
                <Phone
                  size={18}
                  className="text-gray-400"
                />

                <input
                  type="text"
                  name="contactNumber"
                  placeholder="03XXXXXXXXX"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit */}

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full rounded-xl bg-emerald-600 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading
              ? "Submitting..."
              : "Report Asset"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReportForm;