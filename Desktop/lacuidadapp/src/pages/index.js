import Head from "next/head";
// import Header from "../components/Header";
import Navbar from "@/components/navigation";
import ImageCarousel from "@/components/imageCarousel";

export default function Home() {
  const images = [
    {
      src: '/mainsec.jpg',
      alt: 'Image 1',
    },
    {
      src: '/mainsec2.jpg',
      alt: 'Image 2',
    },
    {
      src: '/mainsec3.jpg',
      alt: 'Image 3',
    },
    // Add more image objects as needed
  ];

  return (
    <>
      <Head>
        <title>Caleb's article examples</title>
        <link rel="icon" type="image/ico" href="/img/goals.ico" />
      </Head>
      <Navbar />
      {/* <ImageCarousel images={images} /> */}
    </>
  );
}