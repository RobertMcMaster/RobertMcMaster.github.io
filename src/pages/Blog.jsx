import { Link } from 'react-router-dom'
import { Calendar, Tag, ArrowRight, BookOpen } from 'lucide-react'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import { getAllPosts } from '@/utils/posts'

const posts = getAllPosts()

const Blog = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text flex items-center gap-3">
          <BookOpen className="w-8 h-8" />
          Blog
        </h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Thoughts on web development, tooling, and things I've learned building projects.
        </p>
      </ScrollAnimation>

      <div className="space-y-6">
        {posts.map((post) => (
          <ScrollAnimation key={post.slug}>
            <Link
              to={`/blog/${post.slug}`}
              className="group block bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 hover:border-white/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
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
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </Link>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}

export default Blog
