"use client";
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
    <>
      <div className='bg-zinc-800 '>
        <Carousel data-bs-theme="light">
          <Carousel.Item>
            <div className="flex items-center">
              <div className="relative w-1/2 h-96">
                <Image
                  className="object-cover"
                  src={"/assets/images/1.jpg"}
                  layout="fill"
                  alt="First slide"
                />
              </div>
              <div className="w-1/2 p-5 text-white text-center">
                <h3>It&apos;s me</h3>
                <h1>Mel Macario</h1>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="flex items-center ">
              <div className="relative w-1/2 h-96">
                <Image
                  className="object-cover"
                  src={"/assets/images/2.JPG"}
                  layout="fill"
                  alt="Second slide"
                />
              </div>
              <div className="w-1/2 p-4 text-white text-center">
                <h1>Front End Developer</h1>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="flex items-center">
              <div className="relative w-1/2 h-96">
                <Image
                  className="object-cover"
                  src={"/assets/images/3.JPG"}
                  layout="fill"
                  alt="Third slide"
                />
              </div>
              <div className="w-1/2 p-4 text-white text-center">
                <h1>Back End Developer</h1>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='text-center mt-5'>
        <p className="mt-3 italic">
          &ldquo;If you break your legs, it&apos;s hard to cook orangutan. So don&apos;t break your legs.&rdquo;<br />
          <span className="font-bold und">- Mel Macario</span>
        </p>
      </div>


    </>
  );
}
