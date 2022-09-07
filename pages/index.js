import Link from '@/components/Link'
import dynamic from 'next/dynamic'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'

// const MapComponent = dynamic(() => import('../components/MapComponent'), { ssr: false })

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="flex flex-col items-center justify-center">
        <Image
          src={'/static/images/corporate-building.png'}
          alt="home"
          width="1406px"
          height="787px"
        />
        <div>
          <Carousel autoPlay={false} showIndicators className="w-screen bg-white">
            <div className="w-48">
              <Image
                src={'/static/images/corporate-building.png'}
                alt="home"
                width="140px"
                height="78px"
              />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <Image
                src={'/static/images/corporate-building.png'}
                alt="home"
                width="140px"
                height="78px"
              />
              <p className="legend">Legend 2</p>
            </div>
          </Carousel>
        </div>
        <Image src={'/static/images/men-suit.png'} alt="home" width="1440px" height="1014px" />
        {/* <MapComponent /> */}
      </div>
    </>
  )
}
