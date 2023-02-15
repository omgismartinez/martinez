import Header from 'ui/header'
import Proyects from 'ui/proyects'
import Stack from 'ui/stack'
import Spotify from 'ui/spotify'

export default function Home() {
    return (
        <main className='flex flex-col gap-8 sm:max-w-3xl mx-auto'>
            <Header />
            <Proyects />
            <Stack />
            <Spotify />
        </main >
    )
}
