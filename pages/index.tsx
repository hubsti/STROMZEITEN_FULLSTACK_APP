import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";
import EleChart from "../components/SimpleAreaChart";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import SimplePieChart from "../components/SimplePieChart";
import { format } from "date-fns";
import IconArrowUp from "../components/Icons/ArrowUp";
import DesktopNotification from "../components/Notification";
import SimpleBarchart from "../components/SimpleBarChart";
import React from 'react';
import Flag from "react-flagkit";
import OneSignal from 'react-onesignal';
import { ThemeContext, themes } from '../components/contexts/ThemeContext';
const inter = Inter({ subsets: ["latin"] });

type DataProps = {
  value: number;
  timestamp: string;
  country: string;
  metainfo: {
    unit: string;
    type: string;
  };
};

export default function Home({ eldata }: { eldata: DataProps[] }) {
  React.useEffect(() => {
    OneSignal.init({
      appId: "e0c22d2c-ba2c-4ca9-a361-57e8c56cecf4"
    });
    console.log("Onesignal")
  }, []);

  const formtdate = format(new Date(), "'at' HH:mm");
  const formtdate1 = format(new Date(), "do MMMM yyyy");
  console.log(formtdate);
  return (
    <>
      <Head>
        <title>Stromzeiten</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
        <SideBar />
      <div className={styles.container}>
      <div className={styles.countrydate}><div className={styles.flagicon}><Flag country="BE" /></div><div className={styles.countrytitle}>Belgium, {formtdate1}</div></div>
        <main className={styles.main}>
          <div className={styles.charttitle}>Carbon Intensity</div>
          <div className={styles.chartcont}><EleChart EleData={eldata}/></div>
          <div className={styles.charttitle}>Electricity generation</div>
          <div className={styles.chartcont}><SimpleBarchart/></div>
        </main>
        <div className={styles.widget}>
          <div className={styles.carbonint}>
            <div className={styles.carbdate}>Carbon intensity {formtdate}:</div>
            <div className={styles.wrapcarb}>
              <div className={styles.carbvalue}>123</div>
              <div className={styles.icon}>
                <IconArrowUp />
                5%
              </div>
            </div>
            <div className={styles.carbonunit}>
              gCO<sub>2</sub>/kWh
            </div>
          </div>
          <div className={styles.containerslot}>
            <div className={styles.slottitle}>Next recommended time slot:</div>
            <div className={styles.slothours}>13:00-16:00</div>
            <DesktopNotification />
          </div>
          <div className={styles.elecsharetitle}>Electricity generation share:</div>
          <div className={styles.rescontainer}>
            <div className={styles.piecontainer}><SimplePieChart/></div>
            <div className={styles.piecontainer}><SimplePieChart/></div>
          </div>
        </div>

        <div className={styles.forecastcontainer}>
          <div className={styles.forecastday}>
            <div className={styles.forecasttitle}>Tomorrow</div>
            <div className={styles.forecasthours}>12:00-14:00</div>
          </div>
          <div className={styles.forecastday}>
            <div className={styles.forecasttitle}>Tuesday</div>
            <div className={styles.forecasthours}>12:00-14:00</div>
            <div className={styles.forecasthours}>12:00-14:00</div>
          </div>
          <div className={styles.forecastday}>
            <div className={styles.forecasttitle}>Wednesday</div>
            <div className={styles.forecasthours}>12:00-14:00</div>
            <div className={styles.forecasthours}>12:00-14:00</div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const eldatatoJSON = await prisma.datapoint.findMany({
    select: {
      value: true,
      country: true,
      timestamp: true,
      metainfo: {
        select: {
          unit: true,
          type: true,
        },
      },
    },
    where: {
      AND: [
        {
          timestamp: {
            gte: new Date("2022-12-19"),
            lte: new Date("2022-12-20"),
          },
        },
        { country: "Belgium" },
        { metainfo: { type: "Biomass" } },
      ],
    },
  });
  const eldata = JSON.parse(JSON.stringify(eldatatoJSON));
  console.log(eldata);
  return {
    props: { eldata },
  };
};
