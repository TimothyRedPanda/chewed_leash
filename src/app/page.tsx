import Button from './components/Button'
import Link from "next/link";

export default function Home() {
    return (
        <main className="bg-[url('/red_panda.jpg')]
    bg-cover
    flex
    flex-col
    items-center
    justify-center
    min-h-screen">
            <Link href='/portfolio'>
                <Button text='Welcome'/>
            </Link>
        </main>
    );
}
