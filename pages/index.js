/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Meta from "../components/Meta";
import { getAllPosts, getTags } from "../lib/getMarkdownFiles";
import generateRssFeed from "../utils/rss";

const popularTags = [
  {
    name: "History",
    slug: "history"
  },
  {
    name: "Books",
    slug: "books"
  },
  {
    name: "People",
    slug: "people"
  },
  {
    name: "Life",
    slug: "life"
  },
  {
    name: "Writing",
    slug: "writing"
  },
  {
    name: "Reading",
    slug: "reading"
  },

]

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  const tags = await getTags();

  generateRssFeed(posts);

  return {
    props: { posts: posts.slice(0,5), tags },
  }};

export default function Home({ posts }) {
  if (!posts) return <h1>No posts</h1>;
  return <>
    <Meta
      title="Dalton Mabery is a video editor who reads and writes."
      description="Developer, Video Editor, Writer."
    />
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
      <h1 className="text-xl">Hi, I'm Dalton</h1>
        <div className="flex flex-col gap-3">
          <p>
            I'm a first year law student in Sacramento.
          </p>
          <p>
            I write about what I learn studying law and reading about history.
          </p>
        </div>
        <p></p>
      </div>
      <div className="flex flex-col pt-10">
        <h2><Link href="/writing" className="text-xl hover:text-blue-500">Latest posts</Link></h2>
        <ol className="mt-2 flex flex-col gap-2 list-disc list-inside">
          {posts.map((post) => (
            <li className="underline decoration-blue-300">
              <Link href={`posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ol>
      </div>
      <div className="flex flex-col py-10">
        <h2><Link href="/writing" className="mb-5 text-xl hover:text-blue-500">Popular Tags</Link></h2>
        <ol className="mt-2 flex flex-col gap-2 list-disc list-inside">
          {popularTags.map((tag) => (
            <li className="underline decoration-blue-300">
              <Link href={`tags/${tag.slug}`}>{tag.name}</Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </>;
}
