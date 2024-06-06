import Photo from '../components/Image'
import harvey from '../../../public/Harvey.jpg'
import jake from '../../../public/Jake.jpg'
import dughall from '../../../public/Dughall.jpg'
import yogi from '../../../public/Yogi.jpg'

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
                src={harvey}
                alt='alaskan malamute photo'
            />
            <Photo
                src={jake}
                alt='spaniel cross photo'
            />
            <Photo
                src={dughall}
                alt='scottish terrier photo'
            />
            <Photo
                src={yogi}
                alt='german shephard dog photo'
            />
        </main>
    );
}