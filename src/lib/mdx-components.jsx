import Image from "next/image";
import Link from "next/link";
import React from "react";

// Utility function to generate slug from text
const generateSlug = (text) => {
    if (!text) return '';

    // Convert to string and extract text content from React elements
    const textContent = typeof text === 'string'
        ? text
        : React.Children.toArray(text).map(child =>
            typeof child === 'string' ? child : ''
          ).join('');

    return textContent
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')  // Replace non-alphanumeric with hyphens
        .replace(/^-+|-+$/g, '');      // Remove leading/trailing hyphens
};

// Header component with ID
const createHeading = (level, className) => {
    const HeadingComponent = ({ children }) => {
        const id = generateSlug(children);
        const props = { id, className };

        switch (level) {
            case 1: return <h1 {...props}>{children}</h1>;
            case 2: return <h2 {...props}>{children}</h2>;
            case 3: return <h3 {...props}>{children}</h3>;
            case 4: return <h4 {...props}>{children}</h4>;
            default: return <p {...props}>{children}</p>;
        }
    };

    HeadingComponent.displayName = `Heading${level}`;
    return HeadingComponent;
};

// Components object for MDX
export const mdxComponents = {
    code: ({children}) => (
        <code className="text-base bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded font-mono">
            {children}
        </code>
    ),
    p: ({children}) => (
        <p className="text-base leading-relaxed">{children}</p>
    ),
    h1: createHeading(1, "text-3xl font-bold mt-8 mb-4"),
    h2: createHeading(2, "text-2xl font-bold mt-6 mb-3"),
    h3: createHeading(3, "text-xl font-bold mt-5 mb-2"),
    h4: createHeading(4, "text-lg font-bold mt-4 mb-2"),
    ul: ({children}) => (
        <ul className="pl-6 list-disc space-y-1">{children}</ul>
    ),
    ol: ({children}) => (
        <ol className="pl-6 list-decimal space-y-1">{children}</ol>
    ),
    li: ({children}) => (
        <li className="text-base leading-relaxed">{children}</li>
    ),
    blockquote: ({children}) => (
        <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic mt-4 mb-4 text-gray-700 dark:text-gray-300">
            {children}
        </blockquote>
    ),
    table: ({children}) => (
        <div className="overflow-x-auto mt-4">
            <table className="table-auto border-collapse border border-gray-300 dark:border-gray-600 rounded-md w-full">
                {children}
            </table>
        </div>
    ),
    th: ({children}) => (
        <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 bg-gray-100 dark:bg-gray-800 font-semibold text-left">
            {children}
        </th>
    ),
    td: ({children}) => (
        <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">{children}</td>
    ),
    img: ({src, alt}) => 
        src ? (
            <figure className="my-8 flex flex-col items-center">
                <Image
                    alt={alt || "Blog image"}
                    src={src}
                    className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-full h-auto max-w-full object-cover" 
                    loading="lazy"
                    width={800}
                    height={600}
                />
                {alt && (
                    <figcaption className="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center italic">
                        {alt}
                    </figcaption>
                )}
            </figure>
        ) : null,
    a: ({href, children}) => (
        <Link
            href={String(href)}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
            rel="noopener noreferrer"
        >
            {children}
        </Link>
    ),
    pre: ({children}) => (
        <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto !mt-4 !mb-4 text-sm border border-gray-300 dark:border-gray-700">
            {children}
        </pre>
    ),
    hr: () => <hr className="border-gray-300 dark:border-gray-700 !my-6" />,
};

// Hook for Next.js MDX
export function useMDXComponents(components = {}) {
    return {
        ...mdxComponents,
        ...components,
    };
}
