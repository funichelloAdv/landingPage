import Link from '@/components/Link'
import dynamic from 'next/dynamic'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import Slider from 'react-slick'
import { useState } from 'react'
import Modal from 'react-modal'
import dataMissions from '../data/missions/data.json'
import dataExpertise from '../data/expertises/data.json'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    border: '0px',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
}

// const MapComponent = dynamic(() => import('../components/MapComponent'), { ssr: false })

export default function Home() {
  const [imgIndex, setImgIndex] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState()

  const settings = {
    infinite: false,
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setImgIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
        <div id="quem-somos" className="flex w-full flex-col justify-evenly py-20 sm:flex-row">
          <div className="flex flex-col justify-center px-8 sm:px-0">
            <div className="text-3xl">QUEM SOMOS</div>
            <div className="mt-4 -ml-36 h-1 w-56 bg-violet-500" />
            <p className="w-80 py-8 text-lg font-hairline sm:w-96">
              Somos um escritório estruturado com a premissa de oferecer uma{' '}
              <b>experiência diferenciada</b> e de <b>excelência</b> para defesa dos interesses de
              nossos clientes.
            </p>
          </div>
          <div className="py:0 w-full px-12 sm:w-1/2">
            <Slider {...settings}>
              {dataMissions.map((item, idx) => (
                <div key={item} className="flex h-80 flex-col justify-center pt-20">
                  <div
                    className={
                      idx - 1 === imgIndex
                        ? 'sm:h-46 sm:w-74 rounded-md bg-neutral-900 sm:-mt-12'
                        : 'mx-4 rounded-md bg-neutral-900'
                    }
                  >
                    <div className="mx-28 pt-8 sm:mx-14">
                      <Image src={item.icon} alt="home" width="61px" height="61px" />
                    </div>
                    <p
                      className={
                        idx - 1 === imgIndex
                          ? 'text-md text-center font-semibold'
                          : 'text-sm3 text-center'
                      }
                    >
                      {item.title}
                    </p>
                    <p className="p-4 pb-4 text-center text-xs font-hairline">{item.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div
          id="areas-atuacao"
          className="flex w-full flex-col justify-evenly bg-neutral-900 p-8 pt-16 sm:flex-row sm:p-0"
        >
          <Image src={'/static/images/expertises.png'} alt="home" width="577px" height="639px" />
          <div className="flex flex-col justify-center pt-14 sm:pt-0">
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
            {dataExpertise.map((item) => (
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
                      <img src={item.icon} alt="home" className="ml-4 w-10" />
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="text-white-300 text-md mb-2 h-8">{item.title}</div>
                    <p className="w-46 py-4 text-sm font-hairline line-clamp-5">{item.text}</p>
                  </div>
                  <div className="px-4 pb-4">
                    <p
                      onClick={() => {
                        setModalContent(item)
                        setIsOpen(true)
                      }}
                      className="w-46 cursor-pointer text-sm font-semibold text-violet-600"
                    >
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        overlayClassName={customStyles.overlay}
      >
        <div
          className="rounded-md px-4 py-8"
          style={{
            backgroundColor: '#332F40',
            boxShadow: 'inset 0 0 5em black',
          }}
        >
          <div className="px-8 pb-4">
            <div className="text-white-300 mb-2 text-xl">{modalContent?.title}</div>
            <p className="w-46 py-4 text-sm font-hairline">{modalContent?.text}</p>
          </div>
        </div>
      </Modal>
    </>
  )
}
