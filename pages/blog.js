import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import api from 'services/api'

export async function getStaticProps() {
  const response = await api.get('/posts')
  const posts = JSON.stringify(response.data)

  return { props: { posts: posts } }
}

export default function Blog({ posts }) {
  return (
    <>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout posts={JSON.parse(posts)} />
    </>
  )
}
