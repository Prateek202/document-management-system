import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import {
  categoryOptions,
  personalOptions,
  professionalOptions,
} from "../utils/constants";

import TagInput from "./TagInput";
import { uploadDocument }
from "../services/fileService";

function FileUploadForm() {
  const [documentDate, setDocumentDate] =
    useState(new Date());

  const [majorHead, setMajorHead] =
    useState("");

  const [minorHead, setMinorHead] =
    useState("");

  const [remarks, setRemarks] =
    useState("");

  const [file, setFile] =
    useState(null);

const [tags, setTags] =
  useState([]);

const [loading, setLoading] =
  useState(false);

const mobile =
  localStorage.getItem("mobile");

  const getMinorOptions = () => {
    if (majorHead === "Personal") {
      return personalOptions;
    }

    if (majorHead === "Professional") {
      return professionalOptions;
    }

    return [];
  };

  const handleFileChange = (e) => {
    const selectedFile =
      e.target.files[0];

    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/jpg",
    ];

    if (
      !allowedTypes.includes(
        selectedFile.type
      )
    ) {
      alert(
        "Only PDF and Image files allowed"
      );
      return;
    }

    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const payload = {
      major_head: majorHead,
      minor_head: minorHead,

      document_date:
        documentDate
          .toLocaleDateString(
            "en-GB"
          )
          .replaceAll("/", "-"),

      document_remarks:
        remarks,

      tags,

      user_id:
        mobile || "frontend-user",
    };

    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );

    formData.append(
      "data",
      JSON.stringify(payload)
    );

    const response =
      await uploadDocument(
        formData
      );

    console.log(
      "Upload Response:",
      response
    );

    alert(
      "Document uploaded successfully"
    );

  } catch (error) {
    console.log(error);

    alert(
      "Upload failed"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="card shadow p-4">

      <h3 className="mb-4">
        Upload Document
      </h3>

      <form onSubmit={handleSubmit}>

        {/* Date */}

        <div className="mb-3">

          <label>
            Document Date
          </label>

          <DatePicker
            selected={documentDate}
            onChange={(date) =>
              setDocumentDate(date)
            }
            className="form-control"
          />

        </div>

        {/* Major Head */}

        <div className="mb-3">

          <label>
            Category
          </label>

          <select
            className="form-select"
            value={majorHead}
            onChange={(e) => {
              setMajorHead(
                e.target.value
              );

              setMinorHead("");
            }}
          >

            <option value="">
              Select Category
            </option>

            {categoryOptions.map(
              (item) => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </option>
              )
            )}

          </select>

        </div>

        {/* Minor Head */}

        <div className="mb-3">

          <label>
            Name / Department
          </label>

          <select
            className="form-select"
            value={minorHead}
            onChange={(e) =>
              setMinorHead(
                e.target.value
              )
            }
          >

            <option value="">
              Select
            </option>

            {getMinorOptions().map(
              (item) => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </option>
              )
            )}

          </select>

        </div>


        {/* Tags */}

        <div className="mb-3">

        <label className="mb-2">
            Tags
        </label>

        <TagInput
            tags={tags}
            setTags={setTags}
        />

        </div>


        {/* Remarks */}

        <div className="mb-3">

          <label>
            Remarks
          </label>

          <textarea
            className="form-control"
            rows="4"
            value={remarks}
            onChange={(e) =>
              setRemarks(
                e.target.value
              )
            }
          />

        </div>

        {/* File */}

        <div className="mb-3">

          <label>
            Upload File
          </label>

          <input
            type="file"
            className="form-control"
            onChange={
              handleFileChange
            }
          />

        </div>

        <button
            className="btn btn-success"
            disabled={loading}
        >
        {
            loading
            ? "Uploading..."
            : "Upload"
        }
        </button>

      </form>

    </div>
  );
}

export default FileUploadForm;