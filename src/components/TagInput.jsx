import { useEffect, useState } from "react";
import { fetchTags } from "../services/fileService";

function TagInput({
  tags,
  setTags,
}) {
  const [input, setInput] =
    useState("");

  const [suggestions, setSuggestions] =
    useState([]);

  useEffect(() => {
    const loadTags = async () => {
      try {
        const response =
          await fetchTags(input);
          console.log("Tag API Response:", response);

        setSuggestions(
          response.data || []
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (input.length > 0) {
      loadTags();
    }
  }, [input]);

  const addTag = (tagName) => {
    if (
      tags.some(
        (tag) =>
          tag.tag_name === tagName
      )
    )
      return;

    setTags([
      ...tags,
      {
        tag_name: tagName,
      },
    ]);

    setInput("");
  };

  const removeTag = (tagName) => {
    setTags(
      tags.filter(
        (tag) =>
          tag.tag_name !== tagName
      )
    );
  };

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Tag"
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
      />

      {suggestions.length > 0 && (
        <div className="border p-2">

          {suggestions.map(
            (item, index) => (
              <div
                key={index}
                style={{
                  cursor: "pointer",
                }}
                onClick={() =>
                addTag(
                    item.tag_name ||
                    item.label ||
                        ""
                        )
                }
              >
                {item.tag_name ||
                item.label ||
                ""}
              </div>
            )
          )}

        </div>
      )}

      <div className="mt-2">

        {tags.map((tag) => (
          <span
            key={tag.tag_name}
            className="badge bg-primary me-2"
          >
            {tag.tag_name}

            <button
              type="button"
              className="btn btn-sm text-white"
              onClick={() =>
                removeTag(
                  tag.tag_name
                )
              }
            >
              ×
            </button>
          </span>
        ))}

      </div>
    </>
  );
}

export default TagInput;