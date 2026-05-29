import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'
import { getPostBySlug } from '@/utils/posts'

const markdownComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 gradient-text">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold mt-8 mb-3 text-white">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-100">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-gray-300 leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside ml-5 space-y-2 mb-4 text-gray-300">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside ml-5 space-y-2 mb-4 text-gray-300">{children}</ol>
  ),
  li: ({ children }) => <li className="text-gray-300 leading-relaxed">{children}</li>,
  pre: ({ children }) => (
    <pre className="bg-gray-900/80 border border-white/10 rounded-lg p-4 mb-4 overflow-x-auto">
      {children}
    </pre>
  ),
  code: ({ children, className }) => {
    const isBlock = !!className
    return isBlock ? (
      <code className="font-mono text-sm text-gray-200">{children}</code>
    ) : (
      <code className="bg-gray-800 text-purple-300 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    )
  },
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-white/20 pl-4 italic text-gray-400 mb-4">
      {children}
    </blockquote>
  ),
  strong: ({ children }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
  em: ({ children }) => <em className="text-gray-200 italic">{children}</em>,
  hr: () => <hr className="border-white/10 my-8" />,
}

const BlogPost = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = getPostBySlug(slug)

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — Niladri Chatterjee`
    }
  }, [post])

  if (!post) {
    return (
      <div className="min-h-screen pt-20 px-4 max-w-3xl mx-auto pb-20 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold mb-4 gradient-text">Post not found</h2>
        <p className="text-gray-400 mb-8">This post doesn't exist or may have been removed.</p>
        <Link
          to="/blog"
          className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 px-4 max-w-3xl mx-auto pb-20">
      <button
        onClick={() => navigate('/blog')}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </button>

      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="flex items-center gap-1.5 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-2 py-0.5 text-xs bg-purple-500/20 rounded text-purple-300"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="text-gray-400 text-lg leading-relaxed">{post.description}</p>
        <div className="mt-6 border-t border-white/10" />
      </header>

      <article>
        <ReactMarkdown components={markdownComponents}>{post.body}</ReactMarkdown>
      </article>

      <div className="mt-16 pt-8 border-t border-white/10">
        <Link
          to="/blog"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group w-fit"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>
    </div>
  )
}

export default BlogPost
