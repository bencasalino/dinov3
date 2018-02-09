import React from "react";

export default function Preview({ listings, expand, expanded, previewText }) {
  return (
    <form id="app-preview" onSubmit={expand}>
      <button id="preview-toggle">Show Preview</button>
      <section id="application-preview" className={expanded ? "" : "hidden"}>
        {previewText}
      </section>
    </form>
  );
}
