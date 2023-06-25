import Link from "next/link";
import { useEffect } from "react";
import LinkedTagButton from "./LinkedTagButton";
import PostBodyContent from "./PostBodyContent";
const prism = require("prismjs");

const HomePagePostDisplay = ({
  title,
  description,
  image,
  date,
  tags,
  content,
  slug,
}) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <>
      <article>
        <div className="border-b p-0 pb-5 text-gray-900/90">
          <Link href={`/posts/${slug}`}>
            <a className="mb-1 font-serif text-3xl font-bold">{title || ""}</a>
          </Link>
          <div className="text-xs text-slate-500">{date.slice(0, 10)}</div>
        </div>
        <div>
          <PostBodyContent content={content} />
        </div>
        <div>
          {tags.map((tag) => (
            <span key={tag}>
              {" "}
              <Link href={`/tags/${tag}`}>
                <a>
                  <LinkedTagButton btnText={tag} />
                </a>
              </Link>
            </span>
          ))}
        </div>
      </article>
    </>
  );
};

export default HomePagePostDisplay;
