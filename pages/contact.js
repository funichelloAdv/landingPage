import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import FloatingWhatsApp from 'react-floating-whatsapp'

export default function Contact() {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.title}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Contato
          </h1>
          <p className="text-gray-500">Entre em contato conosco e tire suas dúvidas.</p>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-2 xl:space-y-0">
          <div className="md:flex-column flex flex-col items-start justify-start md:items-center md:justify-center md:space-x-6">
            <form className="w-full max-w-lg md:mt-10">
              <div className="-mx-3 mb-2 flex flex-wrap">
                <div className="mb-6 w-full px-3 md:mb-0">
                  <label
                    className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                    htmlFor="grid-name"
                  >
                    Nome
                  </label>
                  <input
                    className="mb-2 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-2 px-2 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                    id="grid-name"
                    type="text"
                    placeholder="Nome"
                  />
                </div>
              </div>
              <div className="-mx-3 mb-2 flex flex-wrap">
                <div className="mb-6 w-full px-3 md:mb-0">
                  <label
                    className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                    htmlFor="grid-email"
                  >
                    Email
                  </label>
                  <input
                    className="mb-2 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-2 px-2 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                    id="grid-email"
                    type="email"
                    placeholder="exemplo@exemplo.com"
                  />
                </div>
              </div>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="mb-6 w-full px-3 md:mb-0">
                  <label
                    className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                    htmlFor="grid-message"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mb-2 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-2 px-2 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                    placeholder="Sua Mensagem..."
                  ></textarea>
                </div>
              </div>
              <button className="text-white-700 border-white-500 rounded border bg-transparent py-2 px-4 font-semibold hover:border-transparent hover:bg-blue-500 hover:text-white">
                Enviar
              </button>
            </form>
            <FloatingWhatsApp
              accountName="Atendimento"
              phoneNumber="5516988213242"
              statusMessage=""
              chatMessage="Olá, como podemos te ajudar hoje?"
              placeholder="Escreva uma mensagem..."
            />
          </div>
        </div>
      </div>
    </>
  )
}
