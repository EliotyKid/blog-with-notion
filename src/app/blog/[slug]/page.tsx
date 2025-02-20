import {getPost} from "@/services/notion"
import ReactMarkdown from 'react-markdown'

export default async function BlogPost({params}: {params: {slug: string}}){
  const post = await getPost(params.slug)
  return(
    <div>
      <ReactMarkdown
      components={{
        h1: ({node, ...props}) => (
          <h1 className="text-white" {...props}/>
        )
      }}
      >{post.content}</ReactMarkdown>
    </div>
  )
}