import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read my experiences about software development, design and much more.',
}

export default async function Blog() {
    return (
        <main>
            <h1 className='text-2xl font-bold text-dark dark:text-white'>Blog</h1>
            <section>
                <div className='py-4'>
                    <Link
                        href={'/blog/real-scroll-for-a-chat-application'}
                        className='hover:underline underline-offset-2 dark:text-neutral text-gray'
                    >
                        <h2 className='text-lg font-bold'>Real Scroll for a Chat Application</h2>
                    </Link>
                </div>
            </section>
        </main>
    )
}
