import Link from 'next/link';

const PostList = (props) => {
    return (
            <div className="rounded-lg dark:border-gray-700 mb-4 relative" key={props.key}>
            <div>
                <Link href={'/essays/' + props.slug} passHref>
                    <a className="text-2xl font-bold underline decoration-dotted text-slate-900 hover:text-amber-700 hover:decoration-amber-700 focus:prose-a:text-slate-900hover:text-amber-700 underline-offset-4">{props.title}</a>
                </Link>
                <p className=" mt-2 mb-2 font-light">{props.description}</p>
                <p className="mb-2 text-xs text-slate-400">Published on: {props.date.slice(0,10)}</p>
                <Link href={'/essays/' + props.slug} passHref class="inline-flex items-center text-sm font-medium text-center text-slate-500 hover:text-slate-900">
                    <div className="text-slate-400 flex flex-column items-center">
                      <a>Read more</a>
                      <svg className="ml-2 -mr-1 w-4 h-4 hover:ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </div>
                </Link >
            </div>
        </div>
        )
}

export default PostList;
