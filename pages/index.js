import Link from '@/components/Link'
import dynamic from 'next/dynamic'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import Slider from 'react-slick'

// const MapComponent = dynamic(() => import('../components/MapComponent'), { ssr: false })

export default function Home() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const settings2 = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

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
        <div className="flex w-full flex-col justify-evenly py-12 sm:flex-row sm:py-28">
          <div className="flex flex-col justify-center px-8 sm:px-0">
            <div className="text-3xl">QUEM SOMOS</div>
            <div className="mt-4 -ml-36 h-1 w-56 bg-violet-500" />
            <p className="w-80 py-8 text-lg font-hairline sm:w-96">
              Nossa missão é defender, de forma <b>estratégica</b> e <b>inovadora</b>, os direitos
              de todos que confiam seus interesses em nossas mãos, atuando com{' '}
              <b>eficiência, compromisso</b> e <b>determinação</b> em todas as nossas entregas.
            </p>
          </div>
          <div className="py:0 w-full px-12 sm:w-1/2 sm:py-24">
            <Slider {...settings}>
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex h-80 flex-col justify-center pt-20">
                  <div
                    className={
                      item === 2
                        ? 'sm:h-46 sm:w-50 rounded-md bg-neutral-900 sm:-mt-3'
                        : 'mx-4 rounded-md bg-neutral-900'
                    }
                  >
                    <div className="mx-28 pt-8 sm:mx-16">
                      <Image
                        src={'/static/images/icon-test2.png'}
                        alt="home"
                        width="61px"
                        height="61px"
                      />
                    </div>
                    <h1 className="pb-8 text-center">EFICIÊNCIA</h1>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="flex w-full flex-col justify-evenly bg-neutral-900 p-8 pt-16 sm:flex-row sm:p-0">
          <Image src={'/static/images/expertises.png'} alt="home" width="577px" height="639px" />
          <div className="flex flex-col justify-center pt-8 sm:pt-0">
            <div className="text-3xl">ÁREAS DE ATUAÇÃO</div>
            <div className="mt-4 h-1 w-20 bg-violet-500" />
            <p className="w-80 py-8 text-lg font-hairline sm:w-96">
              Nossa missão é defender, de forma <b>estratégica</b> e <b>inovadora</b>, os direitos
              de todos que confiam seus interesses em nossas mãos, atuando com{' '}
              <b>eficiência, compromisso</b> e <b>determinação</b> em todas as nossas entregas.
            </p>
          </div>
        </div>
        <div className="w-full bg-neutral-900 px-12 pt-8 pb-24 sm:pt-24">
          <Slider {...settings2} className="sm:px-36">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item}>
                <div
                  className="mx-4 rounded-md px-4 py-8"
                  style={{
                    backgroundColor: '#332F40',
                    border: '0.1px solid #332F40',
                    boxShadow: 'inset 0 0 5em black',
                  }}
                >
                  <div className="flex h-36 w-32 flex-col justify-center bg-[url('/static/images/rounded-card.png')] bg-no-repeat">
                    <div className="self-center">
                      <Image
                        src={'/static/images/icon-test.png'}
                        alt="home"
                        width="39px"
                        height="40px"
                      />
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="text-white-300 mb-2 text-xl">CIVIL</div>
                    <p className="w-46 py-4 text-sm font-hairline">
                      Auxiliamos no planejamento e execução de estratégias processuais e materiais.
                      Auxiliamos no planejamento e execução de estratégias.
                    </p>
                  </div>
                  <div className="px-4 pb-4">
                    <p className="w-46 cursor-pointer text-sm font-semibold text-violet-600">
                      Ver mais
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <Image src={'/static/images/men-suit.png'} alt="home" width="1440px" height="1014px" />
        {/* <MapComponent /> */}
      </div>
    </>
  )
}
