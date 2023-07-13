import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import Slider from 'react-slick'
import { useState } from 'react'
import Modal from 'react-modal'
import dataMissions from '../data/missions/data.json'
import dataExpertise from '../data/expertises/data.json'
import Trabalhista from '@/data/expertises/details/Trabalhista'
import Civil from '@/data/expertises/details/Civil'
import Tributario from '@/data/expertises/details/Tributário'
import FamiliaSucessoes from '@/data/expertises/details/FamiliaSucessoes'
import Agronegocio from '@/data/expertises/details/Agronegocio'
import DireitoDigital from '@/data/expertises/details/DireitoDigital'
import DireitoMedico from '@/data/expertises/details/DireitoMedico'
import Empresarial from '@/data/expertises/details/Empresarial'
import Imobiliario from '@/data/expertises/details/Imobiliario'
import RecuperacaoJudicial from '@/data/expertises/details/RecuperacaoJudicial'
import Societario from '@/data/expertises/details/Societario'
import api from 'services/api'
import dynamic from 'next/dynamic'
const MyMap = dynamic(() => import('@/components/map'), { ssr: false })

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
    maxHeight: '70%',
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

const detailsComponents = {
  Societario: Societario,
  Civil: Civil,
  Trabalhista: Trabalhista,
  Tributario: Tributario,
  FamiliaSucessoes: FamiliaSucessoes,
  Agronegocio: Agronegocio,
  DireitoDigital: DireitoDigital,
  DireitoMedico: DireitoMedico,
  Empresarial: Empresarial,
  Imobiliario: Imobiliario,
  RecuperacaoJudicial: RecuperacaoJudicial,
}
// const MapComponent = dynamic(() => import('../components/MapComponent'), { ssr: false })

export default function Home() {
  const [imgIndex, setImgIndex] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [profession, setProfession] = useState('')
  const [subject, setSubject] = useState('')
  const [type, setType] = useState('')

  const Details =
    modalContent && modalContent?.detail ? detailsComponents[modalContent?.detail] : Civil

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

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (name && email && phone && message && profession && subject && type) {
      const data = {
        name,
        email,
        phone,
        message,
        subject,
        profession,
        type,
      }

      const html = `<p><strong>Nome</strong></p>

      <p>${name}</p>
      
      <p><strong>Telefone</strong></p>
      
      <p>${phone}</p>
      
      <p><strong>Email</strong></p>
      
      <p>${email}</p>
      
      <p><strong>Profiss&atilde;o</strong></p>
      
      <p>${profession}</p>
      
      <p><strong>Motivo do Contato</strong></p>
      
      <p>${subject}</p>
      
      <p><strong>Como nos conheceu?</strong></p>
      
      <p>${type}</p>
      
      <p><strong>Messagem</strong></p>
      
      <p>${message}</p>`

      try {
        const response = await api.post('/email', { message: html })
        alert('Mensagem enviada com sucesso!')
      } catch (error) {
        alert('Erro ao enviar mensagem!')
      }
    } else {
      alert('Preencha todos os campos!')
    }

    setEmail('')
    setMessage('')
    setName('')
    setProfession('')
    setSubject('')
    setType('')
    setPhone('')
  }

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="flex flex-col items-center justify-center">
        <div className="block sm:hidden">
          <Image
            src="/static/images/corporate-building2.jpg"
            alt="Corporate building"
            width="5728"
            height="2399"
          />
        </div>
        <div className="relative hidden h-screen w-full sm:block">
          <Image
            src="/static/images/corporate-building.png"
            alt="Corporate building"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50" />
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
            <p className="w-4/5 text-center text-2xl font-hairline text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]">
              Somos um escritório <b>Full Service</b> com expertise em diversas áreas de atuação,
              trabalhando com <b>equipes especializadas e multidisciplinares</b>, integradas por
              princípios sólidos e eficazes na busca dos interesses dos nossos clientes.
            </p>
          </div>
        </div>
        <div id="nossa-missao" className="flex w-full flex-col justify-evenly py-20 sm:flex-row">
          <div className="flex flex-col justify-center px-8 sm:px-0">
            <div className="text-center text-xl sm:text-left sm:text-3xl">NOSSA MISSÃO</div>
            <div className="mt-4 -ml-36 hidden h-1 w-56 bg-violet-500 sm:block" />
            <p className="text-md w-full py-8 text-center font-hairline sm:w-80 sm:text-left sm:text-lg">
              Nossa missão é defender, de forma <b>estratégica</b> e <b>inovadora</b>, os direitos
              de todos que confiam seus interesses em nossas mãos, atuando com{' '}
              <b>eficiência, compromisso</b> e <b>determinação</b> em todas as nossas entregas.
            </p>
          </div>
          <div className="block pb-8 text-center text-xl font-light text-gray-500 sm:hidden sm:text-left sm:text-3xl">
            NOSSOS <b>VALORES</b>
          </div>
          <div
            className="py:0 w-full bg-[right_bottom_-7rem] bg-no-repeat px-12 sm:w-3/5 sm:bg-[url('/static/images/fog.png')] sm:py-16 2xl:bg-left"
            style={{
              backgroundColor: '#000',
              boxShadow: 'inset 0 0 10em black',
            }}
          >
            <Slider {...settings}>
              {dataMissions.map((item, idx) => (
                <>
                  {item.title ? (
                    <div key={item} className="p-2">
                      {idx - 1 === imgIndex ? (
                        <div className="flex h-60 flex-col justify-center bg-neutral-900">
                          <div className="self-center">
                            <img src={item.icon} alt="home" className="w-14" />
                          </div>
                          <p className="text-center text-lg">{item.title}</p>
                          <p className="self-center text-center text-xs font-hairline sm:w-11/12 sm:text-sm">
                            {item.text}
                          </p>
                        </div>
                      ) : (
                        <div
                          key={item}
                          className="flex h-60 flex-col justify-center bg-neutral-900 sm:mt-8 sm:h-44"
                        >
                          <div className="self-center">
                            <img src={item.icon} alt="home" className="w-14 sm:w-12" />
                          </div>
                          <p className="text-center text-lg sm:text-sm">{item.title}</p>
                          <p className="w-4/5 self-center pt-4 text-center text-xs font-hairline sm:w-full sm:px-4 sm:pt-2">
                            {item.text}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </Slider>
          </div>
        </div>
        <div
          id="areas-atuacao"
          className="flex w-full flex-col justify-evenly bg-neutral-900 p-8 py-16 sm:flex-row sm:p-0 sm:py-16"
        >
          <div className="w-full sm:w-1/2">
            <Image
              src={'/static/images/expertises.png'}
              alt="home"
              width="2308px"
              height="2566px"
            />
          </div>
          <div className=" flex flex-col justify-center pt-14 sm:pt-0">
            <div className="text-xl sm:text-3xl">ÁREAS DE ATUAÇÃO</div>
            <div className="mt-4 h-1 w-20 bg-violet-500" />
            <p className="text-md w-80 py-8 font-hairline sm:w-96 sm:text-lg">
              Somos um escritório estruturado com a premissa de oferecer uma{' '}
              <b>experiência diferenciada</b> e de <b>excelência</b> para defesa dos interesses de
              nossos clientes.
            </p>
          </div>
        </div>
        <div className="w-full px-12 pt-8 pb-24 sm:pt-24">
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
                  <div className="mb-4 flex h-32 w-32 rotate-45 flex-col items-center justify-center rounded-[153px] border-y-4 border-[#7C52F6] bg-gradient-to-r from-[#4A4752] to-[#322C45] transition-all hover:border-x-4 hover:border-y-0">
                    <div className="self-center">
                      <img src={item.icon} alt="home" className="w-10 -rotate-45" />
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
        <div className="w-full px-8 pt-8 pb-24 sm:pt-8">
          <div className="mb-16 flex flex-col items-center">
            <div className="text-xl md:text-3xl">SÓCIO-FUNDADOR</div>
            <div className="mt-4 mb-4 flex w-[150px] flex-col items-center md:w-[225px]">
              <div className="h-1 w-28 bg-violet-500 md:w-40" />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center md:flex-row md:items-start">
            <div className="w-[300px] md:h-[300px] md:w-[275px] md:pr-8">
              <img
                src={'/static/images/socio-fundador.jpeg'}
                alt="Gabriel Funichello"
                className="w-full sm:w-[300px]"
              />
            </div>
            <div className="flex h-[250px] w-[300px] flex-col justify-between sm:w-[450px]">
              <p className="my-4 text-xl text-gray-300 md:my-0">Gabriel Funichello</p>
              <p className="text-justify text-sm text-gray-400">
                Gabriel Funichello é sócio e fundador do Funichello Advogados. Formado em direito
                pela Universidade de Ribeirão Preto (Unaerp); Pós graduado em Advocacia Contenciosa
                Cível pela faculdade Legale; Pós graduado em Direito do Trabalho pela Escola
                Brasileira de Direito (EBRADI); Pós graduado em Direito Tributário pela Escola
                Brasileira de Direito (EBRADI); Pós graduado em Direito Societário pela Escola
                Brasileira de Direito (EBRADI); Pós graduado em Direito Contratual e
                Responsabilidade Civil pela Escola Brasileira de Direito (EBRADI); Pós graduado em
                Direito Imobiliário pela Escola Paulista de Direito (EPD); Curso de Extensão em
                Direito do Seguro e Resseguro pela Fundação Getúlio Vargas (FGV).
              </p>
              <p className="text-justify text-sm text-gray-400">
                Conta com forte atuação na advocacia contenciosa e relevante experiência no
                assessoramento jurídico de empresas.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center sm:flex-row">
          <div id="contact" className="my-16 w-full p-4 px-8 sm:w-[50%] sm:px-0">
            <div className="mb-4 flex flex-col justify-center">
              <h1 className="tracking-light text-white-300 text-center text-3xl leading-9 sm:text-xl sm:leading-10 md:text-4xl md:leading-14">
                Contato
              </h1>
              <a className="text-center underline" href="tel:+5516994510470">
                16 99451-0470
              </a>
              <p className="text-center font-light text-gray-300">
                Entre em contato conosco e tire suas dúvidas.
              </p>
            </div>
            <div>
              <div className="md:flex-column flex flex-col items-start justify-start md:items-center md:justify-center md:space-x-6">
                <form className="mt-8 w-full max-w-lg" onSubmit={handleSubmit}>
                  <div className="-mx-3 mb-2 flex flex-wrap">
                    <div className="mb-0 w-full px-3">
                      <input
                        className="mb-2 block w-full appearance-none rounded border bg-transparent py-2 px-2 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                        id="grid-name"
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div className="-mx-3 mb-2 flex flex-wrap">
                    <div className="mb-0 w-full px-3">
                      <input
                        className="mb-2 block w-full appearance-none rounded border bg-transparent py-2 px-2 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                        id="grid-name"
                        type="text"
                        placeholder="Telefone"
                        value={phone}
                        onChange={(event) => {
                          setPhone(event.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div className="-mx-3 mb-2 flex flex-wrap">
                    <div className="mb-0 w-full px-3">
                      <input
                        className="mb-2 block w-full appearance-none rounded border bg-transparent py-2 px-2 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                        id="grid-name"
                        type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div className="-mx-3 mb-2 flex flex-wrap">
                    <div className="mb-0 w-full px-3">
                      <input
                        className="mb-2 block w-full appearance-none rounded border bg-transparent py-2 px-2 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                        id="grid-name"
                        type="text"
                        placeholder="Profissão"
                        value={profession}
                        onChange={(event) => {
                          setProfession(event.target.value)
                        }}
                      />
                    </div>
                  </div>
                  <div className="-mx-3 mb-2 flex flex-wrap">
                    <div className="mb-0 w-full px-3">
                      <select
                        id="assuntos"
                        className="mb-2 block w-full appearance-none rounded border bg-transparent py-2 px-2 leading-tight text-gray-500 outline-none focus:bg-white"
                        value={subject}
                        onChange={(event) => {
                          setSubject(event.target.value)
                        }}
                      >
                        <option selected>Qual o motivo do contato?</option>
                        <option value="Quero ser cliente">Quero ser cliente</option>
                        <option value="Parcerias">Parcerias</option>
                        <option value="Dúvidas/Informações">
                          Dúvidas/Informações sobre processos em andamento
                        </option>
                        <option value="Tenho interesse em acordo (Sou autor da ação)">
                          Tenho interesse em acordo (Sou Autor(a) da ação)
                        </option>
                        <option value="Tenho interesse em acordo (Sou réu da ação)">
                          Tenho interesse em acordo (Sou Réu da ação)
                        </option>
                        <option value="Trabalhe Conosco">Trabalhe Conosco</option>
                        <option value="Contato Geral">Contato Geral</option>
                      </select>
                    </div>
                  </div>
                  <div className="-mx-3 mb-2 flex flex-wrap">
                    <div className="mb-0 w-full px-3">
                      <select
                        id="countries"
                        className="mb-2 block w-full appearance-none rounded border bg-transparent py-2 px-2 leading-tight text-gray-500 focus:bg-white focus:outline-none"
                        value={type}
                        onChange={(event) => {
                          setType(event.target.value)
                        }}
                      >
                        <option selected>Como nos conheceu?</option>
                        <option value="Indicação">Indicação</option>
                        <option value="Google">Google</option>
                        <option value="Instagram">Instagram</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Jornais">Jornais</option>
                      </select>
                    </div>
                  </div>
                  <div className="-mx-3 mb-4 flex flex-wrap">
                    <div className="mb-0 w-full px-3">
                      <textarea
                        id="message"
                        rows="4"
                        className="mb-2 block w-full appearance-none rounded border bg-transparent py-2 px-2 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                        placeholder="Mensagem"
                        value={message}
                        onChange={(event) => {
                          setMessage(event.target.value)
                        }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex w-[50%] justify-center sm:w-full">
                    <button className="rounded border border-gray-400 bg-transparent py-2 px-4 font-semibold text-gray-400 hover:border-transparent hover:bg-violet-500 hover:text-white">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="z-0 w-full py-8 px-4 sm:w-[50%] sm:p-16">
            <MyMap />
          </div>
        </div>
        <Image
          className="brightness-50"
          width="1440px"
          height="1014px"
          src={'/static/images/balanca.png'}
          alt="home"
        />
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
            <Details />
          </div>
        </div>
      </Modal>
    </>
  )
}
