import Link from 'next/link';
import Heading from '../components/heading';
import {getFeaturedReview} from '@/lib/reviews';
import { title } from 'process';

export const metadata = {
    title: 'Indie Gamer',
    description: 'only greatest games'
}

export default async function HomePage() {
    const review = await getFeaturedReview();
    console.log('[HomePage] rendering');
    return (
        <>
            <Heading>My next.js page</Heading>
            <p className='pb-3'>only greatest games</p>
            <div className="bg-white hover:bg-orange-800 border rounded shadow hover:shadow-2xl w-80 mt-3 sm:w-full">
                <Link href={`/reviews/${review.slug}`}
                    className='flex flex-col sm:flex-row'
                >
                    <img src= {review.image} alt=""
                        with="320" height="180" className='rounded-t sm:rounded-l sm:rounded-r-none'
                    />
                    <h2 className="font-orbitron font-semibold text-center py-1 sm:px-2">{review.title}</h2></Link>
            </div>
        </>
    );
}