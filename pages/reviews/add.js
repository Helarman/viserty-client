import Head from "next/head";
import Form from "@/pages/reviews/Form"
import Error from "@/components/Error/Error"
import NavbarSecondary from "@/components/Navbar/NavbarSecondary";
import Footer from "@/components/Footer/Footer";
import styles from '@/components/Reviews/feedbackform.module.scss'

const Add = ({ qCode, global, pageData, portfolio, usedData }) => {

  {/*const uuidData = portfolio.data.map(({ attributes: { uuid }, ...item }) => (uuid));//get universally unique identifiers for projects
  const uuidInclude = uuidData.includes(`${qCode}`); // check uuid exists

  const usedCodes = usedData.data.map(({ attributes: { code }, ...item }) => (code));//get existing review codes 
  const existigCodes = usedCodes.filter(element => element !== null); // remove null codes
  const codeInclude = existigCodes.includes(`${qCode}`);// check code usage

  if (!uuidInclude) {
    return (
      <Error //localization needed
        errorCode={`Ошибка`}
        errorName={`Код не существует`}
        errorText={`Отзыв не был добавлен`}
      />
    )
  }

  if (codeInclude) {
    return (
      <>
        <Head>
          <title>Artea - web stuido</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Error //localization needed
          errorCode={`Ошибка`}
          errorName={``}
          errorText={`Отзыв уже добавлен`}
        />
      </>
    )
  }

  if (!uuidInclude) {
    return (
      <>
        <Head>
          <title>Artea - web stuido</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Error
          errorCode={`Ошибка`}
          errorName={`Код не существует`}
          errorText={`Отзыв не был добавлен`}
        />
      </>
    )
  }*/}
  
  return (
    <div>
      <Head>
        <title>Artea - web stuido</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarSecondary global={global} />

      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1`}>
            <div className={styles.formHeader}>
              <h1>{pageData.formTitle}</h1>
              <p>{pageData.formDescription}</p>
            </div>
            {/*<Form inCode={qCode} page={pageData.data.attributes} />*/}
          </div>
        </div>
      </div>
      <Footer global={global} />
    </div>
  )
};

export default Add;


export const getServerSideProps = async ({ query }) => {
  const { code = 1 } = query; //default code
  const [res1, res2, res3, res4] = await Promise.all([
    fetch(`https://admin.viserty.ru/api/global?populate=*`),
    fetch(`https://admin.viserty.ru/api/review-page?populate=*`),
    fetch(`https://admin.viserty.ru/portfolio?fields[0]=uuid`),
    fetch(`https://admin.viserty.ru/reviews?fields[0]=code`)
  ]);

  const [data1, data2, data3, data4] = await Promise.all([
    res1.json(),
    res2.json(),
    res3.json(),
    res4.json()
  ])

  return {
    props: { global: data1, pageData: data2, portfolio: data3, qCode: code, usedData: data4 },

  }
};
