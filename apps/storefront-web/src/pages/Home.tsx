import { Hero } from '../components/Hero';
import { QuickEntrances } from '../components/QuickEntrances';
import { BrandHistory } from '../components/BrandHistory';

export function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <QuickEntrances />
      <BrandHistory />
    </main>
  );
}
