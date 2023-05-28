import axios from 'axios'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/legacy/image";
import { useForm } from "react-hook-form"
import { GiLoveLetter } from 'react-icons/gi'
import BackSound from '../components/Backsound';
import AOSWrapper from '../components/AOS/AOSWrapper';

const GetUniqueCode = ({ guest }) => {
  const [isPlay, setIsPlay] = useState(false);

  const router = useRouter();
  const { uuid } = router.query;
  const { register, handleSubmit } = useForm();

  const [selectedValue, setSelectedValue] = useState("");
  const [loading, setLoading] = useState(false);

  const formSubmit = async ({ status }) => {

    try {
      const userId = guest?.userId;
      await axios.patch(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation/status/${uuid}?userId=${userId}`, {
        status: selectedValue,
      })
      setLoading(true);
      const timeoutId = setTimeout(() => {
        router.push(`/invitation/${uuid}?userId=${userId}`);

        setIsPlay(true);
      }, 500)

      return () => clearTimeout(timeoutId);

    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (value) => {
    setSelectedValue(value);
  };


  return (
    <>
      <BackSound setIsPlay={setIsPlay} isPlay={isPlay} />
      <AOSWrapper>
        <div className="overflow-hidden w-full bg-gradient-to-b from-[#F5F5DC] bg-cover h-full z-50 fixed top-0 lg:relative flex flex-col gap-2  items-center justify-center pt-0 ">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className='mb-3 text-stone-600 titles'>UNDANGAN PERNIKAHAN</h1>
          <div className='flex items-center flex-col justify-center relative'>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="absolute top-2 left-0 right-0 z-50 w-fit mx-auto flex text-stone-800/80 pt-1 gap-1 items-center">
              <h1 className='text-lg sm:text-xl '>Rudy</h1>
              <p className='font-[parisienne] text-4xl'>&</p>
              <h2 className='text-lg sm:text-xl '>Astrid</h2>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className=" border-2 border-stone-600/80 p-3 shadow-inner shadow-stone-500/80 relative">
              <div className='absolute w-full h-full bg-gradient-to-t top-0 z-40 left-0 from-[#FFE4B5]/60 via-transparent to-[#F5F5DC]/90' />
              <Image src="/img/gallery-4.png" alt="" width={240} height={340} className='' objectFit='contain' priority />
            </div>
            <div className=' w-full h-full absolute -bottom-44 -left-28 -z-10'>
              <Image src="/img/bunga-2.png" alt='bunga' width={450} objectFit='contain' height={375} priority />
            </div>
            <div className=' w-full h-full absolute -bottom-14 -right-28 -z-10'>
              <Image src="/img/bunga-2.png" alt='bunga' width={450} objectFit='contain' height={375} priority />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className='w-fit rounded-lg mt-3 border px-8 py-3 sm:py-4 text-center leading-relaxed'>
              <h4 className='mb-2 brush text-lg text-stone-500'>Kepada Yth, Bpk/Ibu/Saudara/i :</h4>
              <p className='py-2 text-2xl capitalize titles text-stone-600'>{guest?.name}</p>
              <p className='text-stone-500 text-lg brush'>Di Tempat.</p>
            </div>
            <form className='w-fit items-center justify-center flex flex-col' onSubmit={handleSubmit(formSubmit)}>
              <input
                type="text"
                onChange={() => handleClick("Opened")}
                {...register("status", { required: true })}
                checked={selectedValue === "Opened"}
                value="Opened"
                className="opacity-0 flex flex-col items-center justify-center"

              />
              {/* fixed status opened*/}
              {!guest?.status ? (
                <>
                  {loading === true ? <button
                    onClick={() => handleClick("Opened")}
                    type="submit"
                    className="py-2 text-sm  flex items-center gap-1 cursor-pointer px-3 shadow-lg rounded shadow-black/20 text-stone-600/80 hover:text-stone-700 bg-[#FFE4B5]/70  hover:bg-[#FFE4B5]/90 "
                  >

                    sedang memuat...
                  </button> : <button
                    onClick={() => handleClick("Opened")}
                    type="submit"
                    className="py-2 text-sm  flex items-center gap-1 cursor-pointer px-3 shadow-lg rounded shadow-black/20 text-stone-600 hover:text-stone-700 bg-[#FFE4B5]/70  hover:bg-[#FFE4B5]/90 "
                  >
                    <GiLoveLetter size={22} />
                    Buka Undangan
                  </button>}

                </>
              ) : (
                <>
                  {loading === true ? <button
                    onClick={() => handleClick("Opened")}
                    type="submit"
                    className="py-2 text-sm  flex items-center gap-1 cursor-pointer px-3 shadow-lg rounded shadow-black/20 text-stone-600/80 hover:text-stone-700 bg-[#FFE4B5]/70  hover:bg-[#FFE4B5]/90 "
                  >

                    sedang memuat...
                  </button> : <button
                    className="py-2 flex text-sm items-center gap-1 cursor-pointer px-3 shadow-lg rounded shadow-black/20 text-stone-600 hover:text-stone-700 bg-[#FFE4B5]/70  hover:bg-[#FFE4B5]/90 "
                    onClick={() => handleClick(guest?.status)}
                    type="submit"
                  >
                    <GiLoveLetter size={22} />
                    Buka Undangan
                  </button>}

                </>
              )}
            </form>
          </div>
        </div>
      </AOSWrapper>
    </>
  )
}

export default GetUniqueCode





// export const getStaticPaths = async () => {
//   const res = await axios.get(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation`);
//   const invitationDataList = res.data || [];
//   const paths = invitationDataList.length
//     ? invitationDataList.map((guests) => {
//       return {
//         params: {
//           uuid: guests.unique_Code,
//         },
//       };
//     })
//     : [];
//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const res = await axios.get(
//     `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/${params.uuid}`
//   );
//   const guest = res.data || {};
//   return {
//     props: {
//       guest,
//     },
//     revalidate: 1
//   };
// };


export const getServerSideProps = async ({ params }) => {

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/${params.uuid}`
  );
  const guest = res.data || {};

  return {
    props: {
      guest,
      revalidate: 1
    },
  };
};