import Link from "next/link";

export default function ReviewsPage () {
    return (
        <>
        <h1>Reviews</h1>
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