import Link from 'next/link'

interface PostCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
}

export default function PostCard({ slug, title, excerpt, date, readTime }: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group cursor-pointer py-8 border-b border-nude last:border-b-0 transition-all duration-500 hover:pl-4 hover:-translate-y-1 hover:shadow-sm">
        <div className="space-y-3">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-lg font-semibold text-ink group-hover:opacity-70 transition flex-1">
              {title}
            </h3>
            <p className="text-xs text-stone whitespace-nowrap">{readTime}</p>
          </div>
          <p className="text-sm text-stone leading-relaxed">{excerpt}</p>
          <p className="text-xs text-stone tracking-wide">{date}</p>
        </div>
      </article>
    </Link>
  )
}
