import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("content");

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const fileContent = fs.readFileSync(
      path.join("content", filename),
      "utf-8"
    );
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      date: data.date,
    };
  });

  // Optional: Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      posts,
    },
  };
}

export default function BlogIndex({ posts }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
