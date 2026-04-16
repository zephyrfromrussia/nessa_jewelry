import { Hero } from '../components/Hero';
import { QuickEntrances } from '../components/QuickEntrances';

export function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <QuickEntrances />
    </main>
  );
}
