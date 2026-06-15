import { useState } from "react";
import Navbar from "../components/Navbar";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import {
  categoryOptions,
  personalOptions,
  professionalOptions,
} from "../utils/constants";

import { searchDocuments }
from "../services/searchService";

function Search() {

  const [majorHead, setMajorHead] =
    useState("");

  const [minorHead, setMinorHead] =
    useState("");

  const [tag, setTag] =
    useState("");

  const [fromDate, setFromDate] =
    useState(null);

  const [toDate, setToDate] =
    useState(null);

  const [results, setResults] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const getMinorOptions = () => {

    if (majorHead === "Personal") {
      return personalOptions;
    }

    if (majorHead === "Professional") {
      return professionalOptions;
    }

    return [];
  };

  const handlePreview = (
    fileUrl
    ) => {
    window.open(
    fileUrl,
    "_blank"
  );
};

const handleDownload = (
  fileUrl
) => {
  const link =
    document.createElement(
      "a"
    );

  link.href = fileUrl;

  link.target = "_blank";

  link.click();
};

  const handleSearch = async (
    e
  ) => {
    e.preventDefault();

    try {

      setLoading(true);

      const payload = {
        major_head: majorHead,
        minor_head: minorHead,

        from_date: fromDate
          ? fromDate
              .toLocaleDateString(
                "en-GB"
              )
              .replaceAll("/", "-")
          : "",

        to_date: toDate
          ? toDate
              .toLocaleDateString(
                "en-GB"
              )
              .replaceAll("/", "-")
          : "",

        tags: tag
          ? [
              {
                tag_name: tag,
              },
            ]
          : [],

        uploaded_by: "",

        start: 0,

        length: 10,

        filterId: "",

        search: {
          value: "",
        },
      };

      const response =
        await searchDocuments(
          payload
        );

      console.log(
        "Search Response:",
        response
      );

      setResults(
        response.data || []
      );

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <div className="card p-4 shadow">

          <h3>
            Search Documents
          </h3>

          <form
            onSubmit={
              handleSearch
            }
          >

            <div className="row">

              <div className="col-md-6 mb-3">

                <label>
                  Category
                </label>

                <select
                  className="form-select"
                  value={majorHead}
                  onChange={(e) =>
                    setMajorHead(
                      e.target.value
                    )
                  }
                >
                  <option value="">
                    Select
                  </option>

                  {categoryOptions.map(
                    (item) => (
                      <option
                        key={
                          item.value
                        }
                        value={
                          item.value
                        }
                      >
                        {item.label}
                      </option>
                    )
                  )}
                </select>

              </div>

              <div className="col-md-6 mb-3">

                <label>
                  Name /
                  Department
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
                        key={
                          item.value
                        }
                        value={
                          item.value
                        }
                      >
                        {item.label}
                      </option>
                    )
                  )}
                </select>

              </div>

            </div>

            <div className="mb-3">

              <label>
                Tag
              </label>

              <input
                type="text"
                className="form-control"
                value={tag}
                onChange={(e) =>
                  setTag(
                    e.target.value
                  )
                }
              />

            </div>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label>
                  From Date
                </label>

                <DatePicker
                  selected={
                    fromDate
                  }
                  onChange={
                    setFromDate
                  }
                  className="form-control"
                />

              </div>

              <div className="col-md-6 mb-3">

                <label>
                  To Date
                </label>

                <DatePicker
                  selected={toDate}
                  onChange={
                    setToDate
                  }
                  className="form-control"
                />

              </div>

            </div>

            <button
              className="btn btn-primary"
              disabled={
                loading
              }
            >
              {
                loading
                  ? "Searching..."
                  : "Search"
              }
            </button>

          </form>
        {results.length > 0 && (
  <div className="mt-4">

    <div className="d-flex justify-content-between align-items-center">

  <h4>
    Search Results
  </h4>

  <button
    className="btn btn-success"
    onClick={() => {

      results.forEach(
        (doc) => {
          window.open(
            doc.file_url,
            "_blank"
          );
        }
      );

    }}
  >
    Download All
  </button>

</div>
<div className="table-responsive">

    <table className="table table-bordered">

      <thead>
        <tr>
          <th>#</th>
         <thead>
  <tr>
    <th>ID</th>
    <th>Category</th>
    <th>Sub Category</th>
    <th>Date</th>
    <th>Remarks</th>
    <th>Uploaded By</th>
    <th>Actions</th>
  </tr>
</thead>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>

        {results.map(
          (item, index) => (
            <tr key={index}>

              <td>
                {index + 1}
              </td>

              <td>
                {item.document_id}
                </td>

                <td>
                {item.major_head}
                </td>

                <td>
                {item.minor_head}
                </td>

                <td>
                {
                    new Date(
                    item.document_date
                    ).toLocaleDateString()
                }
                </td>

                <td>
                {item.document_remarks}
                </td>

                <td>
                {item.uploaded_by}
                            </td>

              <td>

                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() =>
                  handlePreview(
                  item.file_url
                  )
                }
                >
                  Preview
                </button>

                <button
                  className="btn btn-success btn-sm"
                  onClick={() =>
                  handleDownload(
                  item.file_url
                  )
                }
                >
                  Download
                </button>

              </td>

            </tr>
          )
        )}

      </tbody>

    </table>
</div>
  </div>
)}
        </div>

      </div>
    </>
  );
}

export default Search;  