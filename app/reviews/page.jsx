import Link from "next/link";
import Heading from '../../components/heading';

export default function ReviewsPage () {
    return (
        <>
        <Heading>Reviews</Heading>
        <ul>
            <li>
                <Link href="/reviews/hollow">Hollow Knight</Link>
            </li>
            <li>
                <Link href="/reviews/stardew">Stardew Valley</Link>
            </li>
        </ul>
        </>
    );
}