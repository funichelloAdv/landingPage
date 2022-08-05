import Link from '@/components/Link'
import dynamic from 'next/dynamic'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'

const MapComponent = dynamic(() => import('../components/MapComponent'), { ssr: false })

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="flex flex-col items-center pt-4">
        <Image
          src={'/static/images/home-image.jpg'}
          alt="home"
          width="720px"
          height="480px"
          className="h-48 w-48 rounded-full"
        />
        <div className="mx-auto mt-16 max-w-5xl rounded-lg bg-white py-12 px-6 shadow-lg dark:bg-gray-800">
          <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
            Missão e valores
          </h2>
          <p className="mt-2 text-justify text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim id nisi in
            interdum. Morbi commodo sagittis dictum. Duis blandit nulla quis arcu viverra, accumsan
            tincidunt nulla sagittis. Integer vel nisl egestas, fermentum nisl egestas, pretium
            orci. Pellentesque ultricies odio ac risus maximus iaculis. Praesent consequat sapien
            lorem, et laoreet mi mollis et. Duis a molestie diam. Integer id turpis nec ex cursus
            commodo. Fusce tincidunt velit quam, eu dapibus dolor vestibulum id. Sed at congue
            lectus. Phasellus sit amet felis lacus. Proin a sodales mauris. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus
            aliquam magna eget ultrices placerat.
          </p>
        </div>
        <MapComponent />
      </div>
    </>
  )
}
