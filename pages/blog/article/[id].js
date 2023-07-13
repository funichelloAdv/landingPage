import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PostLayout from '@/layouts/PostLayout'
import api from 'services/api'

export default function ShowPost() {
  const [post, setPost] = useState(null)
  const router = useRouter()
  const { id } = router.query

  const onInit = async () => {
    const response = await api.get('/posts')
    const postTemp = response.data.filter((post) => post.id == id)[0]
    setPost(postTemp)
  }

  useEffect(() => {
    onInit()
  }, [id])

  return <>{post && <PostLayout post={post} />}</>
}
