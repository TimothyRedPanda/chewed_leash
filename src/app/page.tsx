import Button from './components/Button'

export default function Home() {
  return (
    <main className="bg-[url('/red_panda.jpg')] bg-cover flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Button text='Welcome'/>
    </main>
  );
}
