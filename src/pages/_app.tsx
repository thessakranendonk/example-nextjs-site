import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ProjectLayout } from "../components/layout/ProjectLayout";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import clsx from "clsx";

// import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
// import "leaflet-defaulticon-compatibility";

export interface ContextProps {
  slideViewBox: boolean;
  setSlideViewBox: Dispatch<SetStateAction<boolean>>;
}

const ContextDefaultValue: ContextProps = {
  slideViewBox: false,
  setSlideViewBox: () => false,
};

export const SlideContext = createContext<ContextProps>(ContextDefaultValue);

export default function App({ Component, pageProps }: AppProps) {
  const [slideViewBox, setSlideViewBox] = useState<boolean>(false);
  const value = { slideViewBox, setSlideViewBox };
  return (
    <div>
      <SlideContext.Provider value={value}>
        <div
          className={clsx(
            slideViewBox
              ? "transition transform ease-in duration-500 delay-100 translate-x-80"
              : "transition transform ease-in-out duration-500 delay-100 translate-x-0"
          )}
        >
          <Head>
            <title>Thessa Kranendonk - Web Development</title>
          </Head>
          <ProjectLayout>
            <Component {...pageProps} />
          </ProjectLayout>
        </div>
      </SlideContext.Provider>
    </div>
  );
}
