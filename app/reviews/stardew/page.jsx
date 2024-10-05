import { readFile } from 'node:fs/promises';
import Heading from '@/components/heading';
import { marked } from 'marked';
import matter from 'gray-matter';

export default async function ReviewsPage () {
    const text = await readFile('./content/reviews/stardew-valley.md', 'utf8');
    const { content, data: { title, date, image } } = matter(text);
    const html = marked(content, {headerIds: false, mangle: false});


    return (
        <>
        <Heading>{title}</Heading>
        <p className='italic pb-1'>{date}</p>
        <img src={image} alt="" 
        with="640" height="360" className='w-1/2 mb-2 rounded-2xl'
        />
        <article dangerouslySetInnerHTML={{ __html: html }} 
        className='max-w-screen-sm prose prose-slate'
        />
        </>
    );
}