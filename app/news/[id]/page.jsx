import Link from "next/link";

export default function NewsDetailPage({ params }) {
  const newsID = params.id;
  return (
    <>
      <h1>News Page</h1>
      <p>News ID: {newsID}</p>
    </>
  );
}
