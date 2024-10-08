
import Heading from '@/components/heading';
import { getReview, getSlugs } from '@/lib/reviews';
import ShareLinkButton from '@/components/ShareLinkButton';


export async function generateStaticParams() {
    const slugs = await getSlugs();
    console.log('[ReviewPage] generateStaticParams:', slugs);
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
    const review = await getReview(slug);
    return {
        title: review.title,
    };
}

export default async function ReviewPage({ params: { slug } }) {
    const review = await getReview(slug);
    // console.log('[ReviewPage] review', review);
    return (
        <>
            <Heading>{review.title}</Heading>
            <div className="flex gap-3 items-baseline">
                <p className="italic pb-2">{review.date}</p>
                <ShareLinkButton />
            </div>
            <img src={review.image} alt=""
                with="640" height="360" className='w-1/2 mb-2 rounded-2xl'
            />
            <article dangerouslySetInnerHTML={{ __html: review.body }}
                className='max-w-screen-sm prose prose-slate'
            />
        </>
    );
}