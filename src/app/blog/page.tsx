import Link from "next/link"
import {getPosts} from "@/services/notion"

export default async function BlogHome(){
  const posts = await getPosts()
  return(
    <div>
      <ul className="text-white">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            <div>
              {post.tags.map((tag) => (
                <span key={tag}>
                  #{tag}
                </span>
              ))}
            </div>

            <p>{new Intl.DateTimeFormat("pt-BR").format( new Date(post.createdAt))}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}