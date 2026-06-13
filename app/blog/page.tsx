import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getAllBlogPosts, getAllTags } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const tags = getAllTags();

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient">Blog</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Thoughts on AI, machine learning, web development, and technology
          </p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <Badge variant="default" className="px-3 py-1">All</Badge>
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="px-3 py-1 cursor-pointer hover:border-primary/30">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="space-y-3">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.frontmatter.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.frontmatter.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.frontmatter.description}
                  </p>

                  {/* Tags & Read more */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {post.frontmatter.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
