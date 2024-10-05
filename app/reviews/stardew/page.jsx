
import Heading from '@/components/heading';
import { getReview } from '@/lib/reviews';



export default async function ReviewsPage(slug) {
    const review = await getReview('stardew-valley');
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