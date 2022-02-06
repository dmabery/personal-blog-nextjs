import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Button from '../../components/Button'


export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('notes'))
  
    const paths = files.map(filename => ({
      params: {
        slug: filename.replace('.mdx', '')
      }
    }))
  
    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('notes',
      slug + '.mdx'), 'utf-8')
  
    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)
  
    return {
      props: {
        frontMatter,
        slug,
        mdxSource
      }
    }
  }

  const NotesPage = ({ frontMatter: { title, description, tags }, mdxSource }) => {
      return (
          <div className="container mx-auto max-w-screen-sm prose prose-white prose-a:text-slate-400 prose-a:font-bold">
            <div className="border-b-2 pb-3">
              <h1 className="text-left text-4xl mt-20 mb-4">{title}</h1>
            </div>
              <MDXRemote {...mdxSource} components={{ Button, SyntaxHighlighter }} />
          </div>
      )
  }

  export default NotesPage;