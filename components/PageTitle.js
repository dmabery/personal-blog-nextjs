import Link from 'next/link'
import Image from 'next/image';
import { getStaticProps } from '../pages/essays/[slug]';

const PageTitle = ({title, description, image, width, height}) => {
    const condition = image ? 'flex' : 'flex-none sm:flex'
    
    return (
        <div className={`flex-row items-center ${condition}`}>
            <div className="basis-2/3">
                <h2 className="text-[50px] text-slate-900 font-bold"><span className="underline decoration-amber-700">{title}</span></h2>
                {description.length > 0 &&
                    <p className="text-slate-900 font-light">{description}</p>
                }
                <br />
            </div>
            {image ? (
                <div className="ml-2"> 
                <Image src={image} width={width ? width : 175} height={height ? height : 175} loading="lazy" />
                </div>
            ) : <div></div>
            } 
        </div>
    )
}

export default PageTitle;