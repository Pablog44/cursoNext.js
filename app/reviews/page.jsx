import Link from "next/link";
import Heading from '../../components/heading';

export default function ReviewsPage () {
    return (
        <>
        <Heading>Reviews</Heading>
        <ul className="fex flex-col gap-3 mb-2">
            <li className="bg-white hover:bg-orange-800 border rounded shadow hover:shadow-2xl w-80 mt-2">
                <Link href="/reviews/hollow">
                <img src="/hollow-knight.jpg" alt="" 
                with="640" height="360" className='rounded-t'
                />
                <h2 className="font-orbitron font-semibold text-center py-1">Hollow Knight</h2></Link>
            </li>
            <li className="bg-white hover:bg-orange-800 border rounded shadow hover:shadow-2xl w-80 mt-3">
                <Link href="/reviews/hollow">
                <img src="/stardew-valley.jpg" alt="" 
                with="640" height="360" className='rounded-t'
                />
                <h2 className="font-orbitron font-semibold text-center py-1">Stardew Valley</h2></Link>
            </li>
        </ul>
        </>
    );
}