import Header from './components/Header';
import Hero from './components/home/Hero';
import FileUpload from './components/FileUpload';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <div className="max-w-3xl mx-auto">
          <FileUpload />
        </div>
      </main>
    </div>
  );
}