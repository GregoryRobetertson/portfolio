import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export async function getStaticPaths() {
  const files = fs.readdirSync("content");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join("content", `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    props: {
      frontmatter: data,
      content,
    },
  };
}

export default function BlogPost({ frontmatter, content }) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{frontmatter.title}</h1>
      <p className="text-gray-500 mb-6">{frontmatter.date}</p>
      <ReactMarkdown className="prose">{content}</ReactMarkdown>
    </div>
  );
}
