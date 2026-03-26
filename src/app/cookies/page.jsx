import { generateMetadata as genMeta, pageMetadata } from '@/lib/seo-metadata';
import { generateBreadcrumbSchema } from '@/lib/schema-generators';

export const metadata = genMeta(pageMetadata.cookies);

export default function Cookies() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Cookie Policy", url: "/cookies" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <div className="container py-16 max-w-3xl">
        <h1 className="font-heading text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose dark:prose-invert">
          <p className="text-lg text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">How SecureGen Uses Cookies</h2>
            <p>
              SecureGen uses cookies and similar technologies (like LocalStorage) for the following purposes:
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-2">Essential & Functional (LocalStorage)</h3>
            <p>
              We use <strong>LocalStorage</strong> to remember your settings and preferences so you don't have to re-enter them every time you visit. These are strictly functional and do not track you across other websites.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Theme:</strong> Stores your preference for Light or Dark mode.</li>
              <li><strong>Tool Settings:</strong> Remembers your preferred password length and character types.</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-2">Performance & Analytics (Cookies)</h3>
            <p>
              We use <strong>Google Analytics 4 (GA4)</strong> to understand how visitors interact with our website. This helps us identify technical issues and improve the overall user experience.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>_ga:</strong> Used to distinguish users.</li>
              <li><strong>_ga_&lt;container-id&gt;:</strong> Used to persist session state.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Managing Your Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can set your browser to block cookies or to alert you when cookies are being sent. However, if you block all cookies (including essential ones), some parts of our site may not function correctly.
            </p>
            <p className="mt-4">
              To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">allaboutcookies.org</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Updates to This Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.
            </p>
          </section>
        </div>
    </div>
    </>
  );
}
