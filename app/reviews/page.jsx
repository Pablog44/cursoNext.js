import Link from "next/link";
import Heading from '../../components/heading';
import { getReviews } from "@/lib/reviews";

export default async function ReviewsPage() {
    []
    const reviews = await getReviews();

    return (
        <>
            <Heading>Reviews</Heading>
            <ul className="flex flex-row flex-wrap gap-3 mb-2">
                {reviews.map((review) => (
                    <li key={review.slug}
                        className="bg-white hover:bg-orange-800 border rounded shadow hover:shadow-2xl w-80 mt-2">
                        <Link href={`/reviews/${review.slug}`}>
                            <img src={review.image} alt=""
                                with="640" height="360" className='rounded-t'
                            />
                            <h2 className="font-orbitron font-semibold text-center py-1">{review.title}</h2></Link>
                    </li>
                ))}
            </ul>
        </>
    );
}