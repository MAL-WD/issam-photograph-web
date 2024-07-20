import { useRef, useState } from 'react'
import './App.css'
import './index.css';
import logo from './assets/logo.svg'
import issam1 from './assets/issam.jpg'
import issam2 from './assets/issam2.jpg'
import sarah from './assets/sarah.jfif'
import salah from './assets/Salah.jfif'
import khadija from './assets/khadija.jpg'
import pic1 from './assets/pic1.webp'
import pic10 from './assets/pic10.webp'
import pic11 from './assets/pic11.webp'
import pic12 from './assets/pic12.webp'
import pic13 from './assets/pic13.webp'
import pic2 from './assets/pic2.webp'
import pic3 from './assets/pic3.webp'
import pic4 from './assets/pic4.webp'
import pic5 from './assets/pic5.webp'
import pic6 from './assets/pic6.webp'
import pic9 from './assets/pic9.webp'

import FacebookSvg from './components/FacebookSvg';
import InstagramSvg from './components/InstagramSvg';
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast';
import { motion,useScroll } from 'framer-motion';
import Reveal from './components/Reveal';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from './components/image';
import GmailSvg from './components/GmailSvg';
import PhoneSvg from './components/PhoneSvg';
function App() {
  const swiper = useSwiper();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const handleSubmit =(e)=>{
    e.preventDefault()
    const templateId="template_yy0alsb"
    const serviceId="service_nvkv6sm"
    const publicKey ="HtqH8-XG3jEU5bCTq"
    const  templateParams={
      from_name:name,
      from_email:email,
      to_name:'Issam',
      message:message,
    }
    toast.loading("Loading..")
    emailjs.send(serviceId, templateId, templateParams,publicKey).then(
      (response) => {
        toast.dismiss(); 
        toast.success("Message sent successfully!")
        console.log('SUCCESS!',response, response.status, response.text);
        setName('')
        setEmail('')
        setMessage('')
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );

  }
  return (
    <>
      <Toaster/>
    <main className='relative'>
      <div id='home' className="landing bg-main pb-20 border-b border-black  w-[100v] ">
      <div className="containerr text-left">
        <header className="flex max-xl:justify-center max-sm:py- justify-between items-center ">
          <button className="logo w-48 italic"><a href=""><img src={logo} alt="" srcset="" /></a></button>
          <nav className='flex max-xl:top-24 shadow  bg-light-main left-1/2 bg-opacity-50 backdrop-blur-2xl  -translate-x-1/2 gap-8 fixed p-4 max-sm:py-3 px-2 z-50 rounded-full'>
            <li><a className='text-black fs-small font-semibold    p-3.5 px-4  max-sm:py-1 max-sm:px-0.5 rounded-full  ' href="#home">Home</a></li>
            <li><a className='text-black fs-small font-medium   rounded-full p-3.5 max-sm:py-1 px-4 max-sm:px-1  rounded-full    ' href="#about"> Me</a></li>
            <li><a className='text-black fs-small font-medium   rounded-full p-3.5 max-sm:py-1 px-4 max-md:px-2 max-sm:px-0.5 max-[450px]:px-0 rounded-full    ' href="#photo">Gallery</a></li>
            <li><a className='text-black fs-small font-medium   rounded-full p-3.5 max-sm:py-1 px-4 max-md:px-2 max-sm:px-0.5  rounded-full max-[450px]:px-0    ' href="#reviews">Reviews</a></li>
            <li><a className='text-black fs-small font-medium   rounded-full p-3.5 max-sm:py-1 px-4 max-md:px-2 max-sm:px-0.5  rounded-full    ' href="#contact">Contacts</a></li>
          </nav>
          <div className="disponible max-xl:mt-2 flex items-center gap-4 max-xl:absolute top-40">
            <div className="point-wrap rounded-full flex-col justify-center items-center relative ">
              <div className='w-2 h-2 bg-green-500  relative z-3 rounded-full'></div>
            </div>
            <span className='font-medium text-green-500 mr-4
             text-[16x] '>Disponible</span>
             <div className="social  flex gap-2" >

          <FacebookSvg/>
          <InstagramSvg/>
             </div>
          </div>
          {/* <div className="social flex"><a href=""><img src="" alt="" /></a><a href=""><img src="" alt="" /></a><a href=""><img src="" alt="" /></a><a href=""><img src="" alt="" /></a><a href=""><img src="" alt="" /></a></div> */}
        </header>
        <Reveal>

      <h1 className='fs-h1 my-10 max-xl:mt-24 max-md:mt-30 uppercase  leading-[200px]  text-center font-black title '>Capturing <br /> <div className='fs-h3 max-md:leading-[50px] max-lg:leading-[70px] leading-[100px]'>THE MOMENTS THAT CAPTIVE YOUR HEART</div></h1>
        </Reveal>
        <Reveal delay={0.6}>
      <div className="content-me max-lg:flex-col flex gap-5">
        <div className="me  max-xl:basis-[45%]  basis-[29%] rounded-3xl bg-black p-6">
          <p className='text-main fs-h5'>Hi, I'm Issam Bensalem, a 21-year-old photographer from Bechar, Algeria. I specialize in capturing moments and telling stories through my lens. Welcome to my portfolio.</p>
        </div>
        <div className="image w-fit rounded-3xl basis-[70%] max-lg:basis-full  max-lg:w-full"><img style={{objectPosition:"0 15%"}} className='max-h-[800px] w-full rounded-3xl' src={issam1} alt="" /></div>
      </div>
        </Reveal>
      </div>
      </div>

      <section id='about' className="about-me bg-main   py-8">
        <div className="containerr" >
      <Reveal>
        <div className="content flex gap-8 max-lg:flex-col max-lg:text-center max-lg:justify-center">
        <h2 className='fs-h3 uppercase basis-[29%] title '>About Me</h2>
        <p className='fs-h4 max-md:leading-[2rem] max-lg:leading-[2.5rem] leading-[4rem] basis-[70%]'>Since picking up a camera at 16, I have passionately pursued photography, mastering the art of capturing stunning landscapes, captivating portraits. My work is driven by a desire to tell compelling stories and evoke deep emotions, turning fleeting moments into timeless visual art. Welcome to my portfolio, where each image reflects my journey and invites you to see the world through my lens.</p>
          
        </div>
      </Reveal>
      <div className="pics grid py-10 gap-5 grid-3  " style={{gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))"}}>
      <Reveal>
        {/* <Image src={pic1Web}></Image> */}
        <img className='rounded-3xl max-h-[700px] w-full'  src={pic1} alt="" />
      </Reveal>
      <Reveal delay={0.25}>

        <img className='rounded-3xl max-h-[700px] w-full'  src={pic2} alt="" />
      </Reveal>
      <Reveal delay={0.5}>
        <img className='rounded-3xl max-h-[700px] w-full'  src={pic3} alt="" />

      </Reveal>
        </div>
        </div>
      </section>

        <section id='services' className="featured-works bg-black">
          <div className="containerr">
        <Reveal>

          <h2 className='fs-h2 py-10 uppercase  leading[180px] title text-center font-black text-main'>FEATURED WORKS</h2>
          </Reveal>
          <div className="grid gap-5">
          <Reveal delay={0.25}>

          <div className="box relative h-fit w-full  " >
            <img src={pic4} className='max-h-[300px] w-full rounded-3xl' alt="" />
            <h3 className='absolute fs-h3 uppercase title font-black translate-y-1/2 top-1/2 text-white  left-10'>Marriages</h3>
          </div>
          </Reveal>
          <Reveal delay={0.35}>

          <div className="box relative h-fit w-full  " >
            <img  src={pic5} className='max-h-[300px]  w-full rounded-3xl'style={{objectPosition:"0 20%"}} alt="" />
            <h3 className='absolute fs-h3 uppercase  title font-black translate-y-1/2 top-1/2 text-white  left-10'>Portraits</h3>
          </div>
          </Reveal>
          <Reveal delay={0.5}>
          <div className="box relative h-fit w-full  " >
            <img  src={pic6} className='max-h-[300px] w-full rounded-3xl' style={{objectPosition:"0 65%"}} alt="" />
            <h3 className='absolute fs-h3 uppercase title font-black translate-y-1/2 top-1/2 text-white  left-10'>Graduations</h3>
          </div>
          </Reveal>
          
          </div>

          </div>
        </section>
        <section id='photo' className="projects bg-main">
        <div className="containerr">
        <h2 className='fs-h1 py-16 uppercase  leading-[180px] title text-center font-black text-black'>PROJECTS</h2>
        <Reveal>
        <div className="grid gallery gap-5 " >


          <img  className='max-h-[500px] prj1 rounded-3xl w-full' src={pic12} alt="" />
          <img  className='max-h-[500px] prj2 rounded-3xl w-full' src={pic13} alt="" />
          <img  className='max-h-[500px] prj3 rounded-3xl w-full' src={pic11} alt="" />
          <img  className='max-h-[500px] prj4 rounded-3xl w-full' src={pic9} style={{objectPosition:"0 20%"}} alt="" />
          <img  className='max-h-[500px] prj5 rounded-3xl w-full' src={pic10} alt="" />
        </div>
        </Reveal>

        </div>
        </section>
        <section id='reviews' className="Reviews pb-24 bg-black">
        <div className="containerr">

        <Reveal>

        <h2 className='fs-h1  uppercase  leading[190px] title text-center font-black text-main'>Reviews</h2>
          </Reveal>
          
          <div className="grid gap-10  justify-center align-center">
            <Reveal left={true}>

            <div className="box  text-center">

              <img src={sarah} className="w-24 h-24 object-contain bg-white mx-auto mb-6  rounded-full" alt="" />
              <p className='text-main text-xl font-bold mb-2'>Sarah</p>
              <p className='text-main text-lg max-w-[900px]'> "The pictures turned out beautifully, capturing all the joy and excitement of the day. Issam made me feel comfortable and confident, and the final shots were stunning. My family and friends were equally impressed. I highly recommend Issam for any special occasion!"</p>
            </div>
            </Reveal>
            <Reveal right={true}>

            <div className="box  text-center">

              <img src={salah} className="w-24 h-24 object-contain bg-white mx-auto mb-6  rounded-full" alt="" />
              <p className='text-main text-xl font-bold mb-2'>Salah</p>
              <p className='text-main text-lg max-w-[900px]'> "I recently had portrait photos taken by Issam and the experience was fantastic. Issam has a great eye for detail and knew exactly how to bring out my best features. The session was relaxed and enjoyable, and the final photos exceeded my expectations."</p>
            </div>
            </Reveal>
            <Reveal left={true}>

            <div className="box  text-center">

              <img src={khadija} className="w-24 h-24 object-contain bg-white mx-auto mb-6  rounded-full" alt="" />
              <p className='text-main text-xl font-bold mb-2'>Khadija</p>
              <p className='text-main text-lg max-w-[900px]'> "Every special moment was captured perfectly, from the smallest details to the big, emotional moments. Issam's professionalism and creativity were evident in every shot. Our wedding album is a beautiful reminder of our perfect day, and we are so grateful for the memories Issam preserved for us. Highly recommended for any couple looking for exceptional wedding photography!"</p>

            </div>
            </Reveal>

          </div>
          </div>
        </section>
        <div id='contact' className="contact-me  bg-black">
        <Reveal right={true}>

        <h2 className='fs-h2   uppercase p-10 max-md:leading-[3.5rem] max-lg:leading-[5.5rem]  leading-[150px] title bg-black rounded-3xl text-main text-center font-black'>What are you <br /> waiting for? </h2>
        </Reveal>

          <div className="containerr ">
        <Reveal >

            <div className="grid gap-5 " style={{gridTemplateColumns:"repeat(auto-fit, minmax(500px, 1fr))"}}>

          <div className="image "><img className='max-h-[800px]  w-full rounded-3xl' style={{objectPosition:"0 20%"}} src={issam2} alt="" /></div>

          <form onSubmit={handleSubmit} action="" className=' w-full my-auto  gap-4 my-8 '>
        <h2 className='fs-h3 py-10 uppercase  leading[180px] title text-center font-black text-main'>Contact ME</h2>
          <input className='p-4 bg-[#232323] text-white  w-full my-3 h-fit rounded-xl backdrop-blur-lg placeholder:text-blue-zodiac text-blue-main' value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name'/>
          <input className='p-4 bg-[#232323] text-white  w-full my-3 h-fit rounded-xl backdrop-blur-lg placeholder:text-blue-zodiac text-blue-main' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='example@gmail.com' />
          <textarea className='p-4 bg-[#232323] text-white w-full my-3 h-fit min-h-40 resize-none rounded-xl backdrop-blur-lg placeholder:text-blue-zodiac text-blue-main' value={message} onChange={(e)=>setMessage(e.target.value)} type="text" placeholder=' Message'/>
          <button type='submit' onClick={handleSubmit} className='bg-gold w-full my-3 py-4 text-xl rounded-full bg-main font-bold'> Send Text</button>
          </form>
          </div>
          </Reveal>

          </div>
        </div>
        <footer className='bg-main p-10'>
          <div className="flex fs-h4 justify-between gap-4 max-md:flex-col max-md:justify-center"><div className="gmail flex gap-3 flex items-center"><GmailSvg/>issamphotographe1@gmail.com</div> <div className="phone max-md:ml-auto flex items-center gap-3"><PhoneSvg/> 06558101241</div></div>
        <Reveal >

          <h2 className='fs-h2 my-10 uppercase p-10 max-lg:p-4  max-md:leading-[3.5rem] max-lg:leading-[5.5rem] leading-[150px] title bg-black rounded-3xl text-main text-center font-black'>Issam Photography </h2>
          </Reveal>
        </footer>
    </main>
    </>

  )
}

export default App
