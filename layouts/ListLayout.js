import Link from '@/components/Link'
import { useState } from 'react'
import formatDate from '@/lib/utils/formatDate'
import PostLayout from './PostLayout'

export default function ListLayout({ posts }) {
  const [searchValue, setSearchValue] = useState('')
  const [postSelected, setPostSelected] = useState(null)

  console.log(posts)

  return (
    <>
      {!postSelected ? (
        <div className="divide-y divide-gray-200 px-8 dark:divide-gray-700 md:px-24 ">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
              Blog
            </h1>
            <div className="relative max-w-lg">
              <input
                aria-label="Search articles"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Buscar"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
              <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <ul>
            {!posts && 'No posts found.'}
            {posts
              .filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((post) => {
                return (
                  <li key={post.id} className="py-4">
                    <article className="xl:posts-baseline space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Publicado em</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={post.created_at}>{formatDate(post.created_at)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-3 xl:col-span-3">
                        <div>
                          <h3 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              onClick={() => setPostSelected(post)}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {post.title}
                            </Link>
                          </h3>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">{}</div>
                      </div>
                    </article>
                  </li>
                )
              })}
          </ul>
        </div>
      ) : (
        <PostLayout post={postSelected} />
      )}
    </>
  )
}
