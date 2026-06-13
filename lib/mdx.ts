import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
}

export interface BlogPostData {
  slug: string;
  frontmatter: BlogFrontmatter;
  readingTime: string;
  content: string;
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function getAllBlogPosts(): BlogPostData[] {
  if (!fs.existsSync(blogDirectory)) return [];

  const files = fs.readdirSync(blogDirectory).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const filePath = path.join(blogDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        frontmatter: data as BlogFrontmatter,
        readingTime: calculateReadingTime(content),
        content,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );

  return posts;
}

export function getBlogPost(slug: string): BlogPostData | null {
  const filePath = path.join(blogDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    readingTime: calculateReadingTime(content),
    content,
  };
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tags = new Set<string>();
  posts.forEach((post) => post.frontmatter.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}
