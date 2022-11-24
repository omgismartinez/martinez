import Image from 'next/image'
import Github from './icons/github'

const proyects = [
    {
        title: 'fitstore',
        description: 'supplement store.',
        image: '/fitstore.png',
        url: 'https://fitstore.vercel.app',
        technologies: ['Next.js', 'TailwindCSS', 'Supabase', 'NextAuth'],
        github: 'https://github.com/omgismartinez/fitstore',
    },
]

export default function Proyects() {
    return (
        <section className='flex flex-col gap-6'>
            <h1 className='text-xl text-white font-bold'>Proyects</h1>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    proyects.map(proyect => (
                        <section key={proyect.title} className={`overflow-hidden relative rounded-xl ${proyect.title && 'animate-fade'}`}>
                            <div className='flex flex-col backdrop-blur-3xl overflow-hidden'>
                                <div className='flex items-center justify-between py-4 px-6'>
                                    <div className='truncate'>
                                        <a href={proyect.url} target='_blank' rel='noreferrer'>
                                            <h1 className='text-white font-semibold text-xl z-20 hover:underline'>{proyect.title}</h1>
                                        </a>
                                        <p className='text-stone text-sm'>{proyect.description}</p>
                                    </div>
                                    <a href={proyect.github} target='_blank' rel='noreferrer'>
                                        <Github />
                                    </a>
                                </div>
                                <div className='shadow-md'>
                                    <Image src={proyect.image} priority={true}
                                        className='rounded-xl' alt={proyect.title} width={400} height={200} layout='responsive' objectFit='contain' />
                                </div>
                            </div>
                        </section>
                    ))
                }
            </div>
        </section>
    )
}
