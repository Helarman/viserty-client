import { AnimationOnScroll } from 'react-animation-on-scroll';

import Head from 'next/head'

import Link from 'next/link'
import Footer from '@/components/Footer/Footer';
import RequestForm from '@/components/Request/RequestForm';
import RequestTitle from '@/components/Request/RequestTitle'
import NavbarSecondary from '@/components/Navbar/NavbarSecondary';

export const getStaticProps = async () => {
  const [res1, res2] = await Promise.all([
    fetch(`https://admin.viserty.ru/api/request?populate=*`),
    fetch(`https://admin.viserty.ru/api/global?populate=*`),
  ]);

  const [data1, data2,] = await Promise.all([
    res1.json(),
    res2.json(),
  ])

  return {
    props: { request: data1, global: data2 },

  }
};

const Contacts = ({ global, request }) => {


  return (
    <div>
      <Head>
        <title>Artea - web stuido</title>
        <meta name="description" content="Artea - web stuido" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarSecondary global={global} />
      <div className={`container`}>
        <div className={`row`}>
          <RequestTitle request={request} />
          <RequestForm request={request} />
        </div>
      </div>

      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
        <Footer global={global} />
      </AnimationOnScroll>
    </div>
  )
}

export default Contacts;