import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import formatDate from '@/lib/utils/formatDate'
import api from 'services/api'

export default function PostLayout({ post }) {
  return (
    <SectionContainer>
      <article>
        <div className="bg-white">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dd className="text-base font-medium leading-6 text-gray-600">
                    <time dateTime={post.created_at}>{formatDate(post.created_at)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
              </div>
            </div>
          </header>
          <div className="divide-y divide-gray-700 " style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className="flex flex-col items-center px-4 pb-16 pt-8 md:px-24">
              {post.image && <img className="mb-8" src={`${api.defaults.baseURL}${post.image}`} />}
              <div
                className="prose prose-invert"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
