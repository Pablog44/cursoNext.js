import { readFile } from 'node:fs/promises';
import Heading from '../../../components/heading';
import { marked } from 'marked';

export default async function ReviewsPage () {
    const text = await readFile('./content/reviews/stardew-valley.md', 'utf8');
    const html = marked(text, {headerIds: false, mangle: false});

    return (
        <>
        <Heading>Stardew</Heading>
        <img src="/stardew-valley.jpg" alt="" 
        with="640" height="360" className='w-1/2 mb-2 rounded-2xl'
        />
        <article dangerouslySetInnerHTML={{ __html: html }} />
        </>
    );
}