import Link from 'next/link';
import Heading from '../components/heading';

export default function HomePage () {
    console.log('[HomePage] rendering');
        return(
        <>
        <Heading>My next.js page</Heading>
        <p className='pb-3'>only greatest games</p>
        <div className="bg-white hover:bg-orange-800 border rounded shadow hover:shadow-2xl w-80 mt-3 sm:w-full">
                <Link href="/reviews/hollow"
                className='flex flex-col sm:flex-row'
                >
                <img src="/stardew-valley.jpg" alt="" 
                with="320" height="180" className='rounded-t sm:rounded-l sm:rounded-r-none'
                />
                <h2 className="font-orbitron font-semibold text-center py-1 sm:px-2">Stardew Valley</h2></Link>
            </div>
        </>
    );
}