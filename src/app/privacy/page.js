export const metadata = {
  title: 'Privacy Policy | SecureGen',
  description: 'Read our Privacy Policy. We prioritize your privacy with client-side generation and zero data collection.',
  keywords: 'privacy policy, data privacy, secure password generator privacy',
  openGraph: {
    title: 'Privacy Policy | SecureGen',
    description: 'Read our Privacy Policy. We prioritize your privacy with client-side generation and zero data collection.',
    url: 'https://securegen.app/privacy',
  },
};

export default function Privacy() {
  return (
    <div className="container py-16 max-w-3xl">
        <h1 className="font-heading text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose dark:prose-invert">
          <p className="text-lg text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Data Collection</h2>
          <p>
            SecureGen does not collect, store, or transmit any personal data. The passwords you generate are created locally on your device using your browser's cryptographic functions.
          </p>

          <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Cookies</h2>
          <p>
            We use minimal local storage to remember your preference settings (like theme preference or password length). No tracking cookies are used.
          </p>

          <h2 className="font-heading text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
          <p>
            We do not use third-party analytics or tracking scripts.
          </p>
        </div>
    </div>
  );
}

