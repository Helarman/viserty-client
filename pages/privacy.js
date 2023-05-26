import NavbarSecondary from "@/components/Navbar/NavbarSecondary";
import Footer from "@/components/Footer/Footer";
import ReactMarkdown from 'react-markdown'


export const getStaticProps = async () => {
    const [res1, res2] = await Promise.all([
      fetch(`https://admin.viserty.ru/api/global?populate=*`),
      fetch(`https://admin.viserty.ru/api/legal-info?populate=*`),
    ]);
  
    const [data1, data2] = await Promise.all([
      res1.json(),
      res2.json()
    ])
  
    return {
      props: { global: data1, legal: data2},
  
    }
  };
  
const Privacy = ({global, legal}) =>{
    return(
        <>
            <NavbarSecondary global={global}/>

            <div style={{marginTop: `50px`, marginBottom: `50px` }} className={`container`}>
                <div className={`row`}>
                   <ReactMarkdown children={legal.data.attributes.privacy}/>
                </div>
            </div>

            <Footer global={global}/>
        </>
    )
}

export default Privacy;