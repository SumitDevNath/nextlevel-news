"use client";

export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2 style={{ color: "brown" }}>An error occurred</h2>
      <p style={{ color: "red" }}>Invalid Path: {error.message}</p>
    </div>
  );
}
