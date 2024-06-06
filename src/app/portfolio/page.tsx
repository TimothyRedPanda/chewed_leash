import Photo from '../components/Image'

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
            <Photo
                src='../../../public/Harvey.jpg'
                alt='alaskan malamute photo'
            />
            <Photo
                src='../../../public/Jake.jpg'
                alt='spaniel cross photo'
            />
            <Photo
                src='../../../public/Dughall.jpg'
                alt='scottish terrier photo'
            />
            <Photo
                src='../../../public/Yogi.jpg'
                alt='german shephard dog photo'
            />
        </main>
    );
}