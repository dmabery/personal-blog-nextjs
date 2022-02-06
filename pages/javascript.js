import Image from 'next/image'
import Link from 'next/link'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'))
  
    const posts = files.map(filename => {
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
      const { data: frontMatter } = matter(markdownWithMeta)
  
      return {
        frontMatter,
        slug: filename.split('.')[0]
      }
    })
  
    return {
      props: {
        posts
      }
    }

const JavaScript = ({ props }) => {
    return (
        <>
           <div></div>
        </>
    )
}}

export default JavaScript;