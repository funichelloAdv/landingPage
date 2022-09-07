import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import logo from '@/data/logo-adv.png'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
// import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'
import WhatsappButton from './WhatsappButton'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-full flex-col justify-between">
        <header className="flex items-center justify-between px-12 py-10 sm:px-24">
          <div className="flex justify-center">
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  {/*<Logo />*/}
                  <Image src={logo} alt="logo" width="150px" height="50px" />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-100 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            {/* <ThemeSwitch /> */}
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
        <WhatsappButton />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
