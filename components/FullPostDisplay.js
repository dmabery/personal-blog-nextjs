import Link from 'next/link';
import { useEffect } from 'react';
import LinkedTagButton from './LinkedTagButton';
import Meta from './Meta';
import PostBodyContent from './PostBodyContent';
import Subscribe from './Subscribe';
const prism = require("prismjs")

const FullPostDisplay = ({ title, description, image, date, tags, content }) => {

    useEffect(() => {
        prism.highlightAll();
      }, []);

    return (
             <>
             <Meta title={title} description={description} image={image} />
                <article className="mx-auto text-neutral-300">
                  <div className="text-gray-900/90 md:pl-5 md:pr-5 p-0">
                    <div className="text-xs text-slate-500">
                      {date.slice(0,10)} |
                      {tags.map((tag => (
                          <span key={tag}> <Link href={`/tags/${tag}`}><a><LinkedTagButton btnText={tag} /></a></Link></span>
                      )))}
                    </div>
                    <h1 className="text-3xl md:text-4xl mt-3 decoration-4 font-bold">{title || ''}</h1>
                  </div>
                  <div className='container mx-auto'>
                    <PostBodyContent content={content} />
                  <div className='mt-5 md:pl-5 md:pr-5 p-0'>
                    <Subscribe title={"If you enjoyed this post..."} caption={"Sign up for weekly essays and book notes on history, science, programming, and philosophy."} />
                  </div>
                  </div>
                </article>
              </>
    )
} 

export default FullPostDisplay;
