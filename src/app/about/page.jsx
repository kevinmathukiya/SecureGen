import { generateMetadata as genMeta, pageMetadata } from '@/lib/seo-metadata';
import { generateBreadcrumbSchema } from '@/lib/schema-generators';

export const metadata = genMeta(pageMetadata.about);

export default function About() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <div className="container py-16 max-w-3xl">
        <h1 className="font-heading text-4xl font-bold mb-8">About SecureGen: Our Mission for Password Security & Privacy</h1>
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
          <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">The Technology Behind SecureGen</h2>
          <p>
            SecureGen leverages the modern standard for browser-based cryptographic operations: the <strong>Web Crypto API</strong>. 
            Unlike legacy applications that use `Math.random()`, which is inherently predictable, the Web Crypto API utilizes the underlying operating system's true hardware random number generator to provide cryptographically secure entropy.
          </p>
          <p>
            By computing exclusively on the client-side, your passwords exist entirely within your browser window. Zero network requests mean zero risk of interception in transit or storage on our servers.
          </p>

          <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">About the Creator</h2>
          <div className="flex flex-col sm:flex-row gap-6 mt-6 p-6 border rounded-xl bg-muted/20">
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full bg-primary/10 flex justify-center items-center font-bold text-3xl text-primary">
              KM
            </div>
            <div>
              <h3 className="text-xl font-bold mt-0 mb-1">Kevin Mathukiya</h3>
              <p className="text-sm text-primary font-medium mb-3">Security Enthusiast & Developer</p>
              <p className="text-sm mb-4">
                SecureGen was created to solve a personal frustration: the lack of completely free, ad-free, and privacy-respecting password generation tools online. With a passion for open-source software and strong cryptographic principles, Kevin developed SecureGen as a transparent utility for everyone.
              </p>
              <a href="https://github.com/kevinmathukiya" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:underline inline-flex items-center gap-2">
                View GitHub Profile
              </a>
            </div>
          </div>

          <div className="mt-12 text-center p-8 border rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10">
            <h3 className="font-heading text-2xl font-bold mb-4">Verify Our Transparency</h3>
            <p className="mb-6">
              Don't just take our word for it. The complete source code of SecureGen is available for public peer-review on GitHub.
            </p>
            <a href="https://github.com/kevinmathukiya/SecureGen" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-6">
              Audit the Source Code
            </a>
          </div>
        </div>
    </div>
    </>
  );
}

