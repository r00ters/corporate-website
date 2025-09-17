import Hero from '@/components/Hero';
import Keypoint from '@/components/Keypoint';
import Features from '@/components/Features';
import Testimonial from '@/components/Testimonial';

export default function Home() {
  return (
    <main className="homepage container">
        <Hero />
        <Keypoint />
        <Features />
        <Testimonial />
    </main>
  );
}
