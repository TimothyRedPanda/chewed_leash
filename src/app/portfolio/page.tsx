import Image from 'next/image'

export default function Home() {
    return (
        <main className="max-h-screen
        w-screen
        h-screen
        grid
        grid-cols-1
        gap-2
        p-2
        md:grid-cols-4
        lg:grid-cols-4
        bg-gray-100
        justify-center
        overflow-x-hidden
        ">
            <Image
                src='/harvey.jpg'
                layout='responsive'
                width='100'
                height='100'
                alt='alaskan malamute photo'
            />
            <Image
                src='/jake.jpg'
                layout='responsive'
                width='100'
                height='100'
                alt='spaniel cross photo'
            />
            <Image
                src='/dughall.jpg'
                layout='responsive'
                width='100'
                height='100'
                alt='scottish terrier photo'
            />
            <Image
                src='/yogi.jpg'
                layout='responsive'
                width='100'
                height='100'
                alt='german shephard dog photo'
            />
        </main>
    );
}