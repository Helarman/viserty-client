import { useState, useEffect } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Head from "next/head";

import NavbarSecondary from "@/components/Navbar/NavbarSecondary";
import HeaderSecondary from "@/components/Header/HeaderSecondary"
import Description from "@/components/Description/Description";
import Counters from "@/components/Counter/Counters";
import StagesNumber from "@/components/Stages/StagesNumber";
import Questions from "@/components/Questions/Questions";
import Footer from "@/components/Footer/Footer";



export const getStaticProps = async () => {
    const [res1, res2] = await Promise.all([
        fetch(`https://admin.viserty.ru/api/global?populate=*`),
        fetch(`https://admin.viserty.ru/api/about-page?populate=*`),
    ]);

    const [data1, data2] = await Promise.all([
        res1.json(),
        res2.json()
    ])

    return {
        props: { global: data1, page: data2 },

    }
};

const About = ({ global, page }) => {

    const title = page.data.attributes.title;
    const background = page.data.attributes.background.data.attributes;
    const descriptionTitle = page.data.attributes.descriptionTitle;
    const description = page.data.attributes.description;
    const counters = page.data.attributes.counter;
    const steps = page.data.attributes.step;

    const Content = page.data.attributes;
    const Services = page.data.attributes.serviceCard;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Head>
                <title>Artea - web stuido</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavbarSecondary global={global} />

            <HeaderSecondary title={title} background={background} />

            <Description descriptionTitle={descriptionTitle} description={description} />

            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
                <Counters counters={counters} />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
                <StagesNumber steps={steps} />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
                <Questions />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true">
                <Footer global={global} />
            </AnimationOnScroll>
            <style jsx>{`
            .inline{
                display: inline;
            }
            .none {
                display: none;
            }
            `}</style>
        </>
    )
};

export default About;