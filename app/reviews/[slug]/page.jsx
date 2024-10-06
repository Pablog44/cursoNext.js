
import Heading from '@/components/heading';
import { getReview, getSlugs } from '@/lib/reviews';

export async function generateStaticParams() {
    const slugs = await getSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function genereteMetadata({ params: { slug } }) {
    const review = await getReview(slug);
    return {
        title: review.title,
    };
}

export default async function ReviewPage({ params: { slug } }) {
    const review = await getReview(slug);
    return (
        <>
            <Heading>{review.title}</Heading>
            <p className='italic pb-1'>{review.date}</p>
            <img src={review.image} alt=""
                with="640" height="360" className='w-1/2 mb-2 rounded-2xl'
            />
            <article dangerouslySetInnerHTML={{ __html: review.body }}
                className='max-w-screen-sm prose prose-slate'
            />
        </>
    );
}