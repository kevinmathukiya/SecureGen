import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Seo from '@/components/seo/Seo';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo 
        title="About Us"
        description="Learn about SecureGen's mission to make the internet safer with secure, client-side password generation."
        keywords="about securegen, password security mission, secure password tool team"
        canonicalUrl="https://securegen.app/about"
      />
      <Header />
      <main className="flex-1 container py-16 max-w-3xl">
        <h1 className="font-heading text-4xl font-bold mb-8">About SecureGen</h1>
        <div className="prose dark:prose-invert">
          <p className="text-lg text-muted-foreground mb-6">
            SecureGen was built with a single mission: to make the internet a safer place, one password at a time.
          </p>
          <p>
            We believe that security shouldn't be complicated. That's why we created a tool that is powerful enough for security experts but simple enough for everyone.
          </p>
          <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Our Philosophy</h2>
          <p>
            <strong>Privacy First:</strong> We designed this tool to run entirely in your browser. No password you generate is ever sent to a server. It exists only on your device, for the moment you need it.
          </p>
          <p>
            <strong>Open Source:</strong> We believe in transparency. Our code is open for inspection, ensuring there are no backdoors or hidden tracking.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
