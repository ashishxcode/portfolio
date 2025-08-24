import { Container } from "@/components/container";

const blogPosts = [
  {
    title: "Write Clear and Meaningful Git Commit Messages",
    excerpt:
      "Learn how to write commit messages that tell a story and make your repository history more meaningful for your team and future self.",
    date: "Jan 16, 2023",
    reactions: 178,
    comments: 32,
    readTime: "2 min read",
    tags: ["webdev", "productivity", "github", "git"],
    url: "https://dev.to/ashishxcode/mastering-the-art-of-writing-effective-github-commit-messages-5d2p",
  },
  {
    title: "How to Debug Node.js Applications Like a Pro",
    excerpt:
      "Master the art of debugging Node.js applications with practical techniques, tools, and strategies that will save you hours of troubleshooting.",
    date: "Jul 17, 2024",
    reactions: 23,
    comments: 0,
    readTime: "3 min read",
    tags: ["webdev", "javascript", "node", "tutorial"],
    url: "https://dev.to/ashishxcode/how-to-debug-nodejs-applications-like-a-pro-4aon",
  },
  {
    title: "5 Powerful HTML Attributes That Don't Require JavaScript",
    excerpt:
      "Discover lesser-known HTML attributes that can add interactivity and improve user experience without writing a single line of JavaScript.",
    date: "Feb 28, 2024",
    reactions: 135,
    comments: 22,
    readTime: "2 min read",
    tags: ["webdev", "html", "learning", "programming"],
    url: "https://dev.to/ashishxcode/5-powerful-html-attributes-that-dont-require-javascript-lfb",
  },
  {
    title: "React 19: A Deep Dive into the Upcoming Major Release",
    excerpt:
      "Explore the exciting new features, breaking changes, and improvements coming in React 19, and how they'll impact your development workflow.",
    date: "Feb 22, 2024",
    reactions: 26,
    comments: 4,
    readTime: "3 min read",
    tags: ["programming", "react", "webdev", "javascript"],
    url: "https://dev.to/ashishxcode/react-19-a-deep-dive-into-the-upcoming-major-release-1pa7",
  },
  {
    title: "Building Scalable React Applications: Architecture Patterns",
    excerpt:
      "Learn proven architectural patterns and best practices for building React applications that can grow with your team and user base.",
    date: "Dec 15, 2023",
    reactions: 89,
    comments: 18,
    readTime: "5 min read",
    tags: ["react", "architecture", "frontend", "scalability"],
    url: "#",
  },
  {
    title: "Performance Optimization in Modern Web Applications",
    excerpt:
      "Practical strategies and techniques for optimizing web application performance, from bundle analysis to runtime optimizations.",
    date: "Nov 08, 2023",
    reactions: 67,
    comments: 12,
    readTime: "4 min read",
    tags: ["performance", "optimization", "webdev", "javascript"],
    url: "#",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Container>
        {/* Blog Posts */}
        <h2 className="text-sm text-muted uppercase tracking-wide mb-6">
          Recent Articles
        </h2>
        <div className="grid gap-4 sm:gap-6">
          {blogPosts.map((post, index) => (
            <article key={index} className="group">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="border rounded-lg sm:rounded-xl p-4 sm:p-6 hover:bg-accent/30 hover:border-foreground/20 transition-all duration-200 hover:shadow-sm">
                  {/* Header with title */}
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-muted transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </div>

                  {/* Excerpt */}
                  <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Footer with date/tags and read more button */}
                  <div className="flex items-center justify-between">
                    {/* Left side - Date and Tags */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs sm:text-sm text-muted">{post.date}</span>
                      <span className="text-muted">•</span>
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-0.5 bg-accent text-foreground text-xs rounded-full border border-border/50"
                          >
                            #{tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-2 py-0.5 bg-accent text-muted text-xs rounded-full border border-border/50">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right side - Read More Button */}
                    <button className="text-xs sm:text-sm text-muted hover:text-foreground transition-colors border border-border rounded-full px-3 py-1 hover:border-foreground/20">
                      Read more →
                    </button>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
