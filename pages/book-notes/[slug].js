import { createClient } from 'contentful'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import PostTitleDisplay from '../../components/PostTitleDisplay'
import React from 'react'


const client = createClient({
  space: 'nk2hkdvz2uym',
  accessToken: '6gmUFv_IEAMf7g22ceoqgN3885o_x3Z-eB86MAc5esE'
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'bookNotes'
  })

  const paths = res.items.map(item => ({
    params: {
      slug: item.fields.slug
    }
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({params}) => {
  const { items } = await client.getEntries({
    content_type: 'bookNotes',
    'fields.slug': params.slug
  })

  const { code }  = await bundleMDX({
    source: items[0].fields.content2
  });

  return {
    props: {
      post: items[0],

    },
    revalidate: 1
  }
}

  const PostPage = ({ post }) => {
    if (!post) return <div>loading</div>

      return (
      <>
                <PostTitleDisplay title={post.fields.title} description={post.fields.description} date={post.sys.createdAt} content={post.fields.content2} image={post.fields.image.fields.file.url}/>
        
              </>   
      )
  }

  export default PostPage;
