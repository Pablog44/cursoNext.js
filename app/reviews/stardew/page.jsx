import { readFile } from 'node:fs/promises';
import Heading from '../../../components/heading';

export default async function ReviewsPage () {
    const text = await readFile('./content/reviews/stardew-valley.md', 'utf8')

    return (
        <>
        <Heading>Stardew</Heading>
        <img src="/stardew-valley.jpg" alt="" 
        with="640" height="360" className='w-1/2 mb-2 rounded-2xl'
        />
        <p>{text}</p>
        </>
    );
}