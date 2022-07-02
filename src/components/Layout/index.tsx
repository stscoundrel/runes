// Components.
import Head from 'components/Head'
import Footer from 'components/Footer'

interface LayoutProps{
  children: JSX.Element | JSX.Element[],
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head></Head>
      <main className="container">
        {children}
      </main>
      <Footer/>
    </>
  )
}
