import fs from 'fs';
import path from 'path';

const blogDir = path.join(process.cwd(), 'src/content/blog');

// Get all blog post metadata
export async function getBlogPosts() {
  try {
    if (!fs.existsSync(blogDir)) {
      return [];
    }

    const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.mdx'));
    
    const posts = files.map(file => {
      const slug = file.replace(/\.mdx$/, '');
      const filePath = path.join(blogDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract frontmatter
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      const frontmatter = frontmatterMatch ? frontmatterMatch[1] : '';
      
      const metadata = {
        slug,
        title: 'Untitled',
        description: '',
        date: new Date().toISOString(),
        author: 'SecureGen',
        ...parseFrontmatter(frontmatter)
      };

      return metadata;
    });

    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// Get a single blog post by slug
export async function getBlogPost(slug) {
  try {
    const filePath = path.join(blogDir, `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    const frontmatter = frontmatterMatch ? frontmatterMatch[1] : '';
    const body = frontmatterMatch ? content.replace(/^---\n[\s\S]*?\n---\n/, '') : content;

    const metadata = {
      slug,
      title: 'Untitled',
      description: '',
      date: new Date().toISOString(),
      author: 'SecureGen',
      ...parseFrontmatter(frontmatter)
    };

    return {
      metadata,
      content: body
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

// Parse YAML-like frontmatter
function parseFrontmatter(frontmatter) {
  const metadata = {};
  const lines = frontmatter.split('\n').filter(line => line.trim());

  lines.forEach(line => {
    const [key, ...valueParts] = line.split(':');
    const value = valueParts.join(':').trim();
    
    // Remove quotes if present
    const cleanValue = value.replace(/^['"]|['"]$/g, '');
    metadata[key.trim()] = cleanValue;
  });

  return metadata;
}
