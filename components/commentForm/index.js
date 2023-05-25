import axios from "axios";
import { useForm } from "react-hook-form";
import moment from "moment";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";

const CommentForm = ({ guest }) => {

  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { uuid } = router.query;

  const formSubmit = async ({ comments }) => {
    const userId = guest?.userId;
    await axios
      .patch(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation/comment/${uuid}`, {
        comments: comments,
        date: moment().format("DD MMMM YYYY, h:mm a"),
      })
      .then(() => {
        setLoading(true);
        setTimeout(() => {
          Swal.fire({
            title: "Terkirim",
            icon: "success",
            text: "Terima Kasih atas Partisipasinya",
            showConfirmButton: false,
            showClass: {
              popup: "animate__animated animate__zoomIn",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOut",
            },
          }),
            reset();
          setLoading(false);
          location.reload();
        }, 400);
        return () => clearTimeout();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: "Error",
        });
        reset();
        console.log(error)
      });
  };


  return (
    <>
      <div
        id="wish"
        className="overflow-hidden shadow-xl  pb-10  shadow-black/10 px-1 lg:px-3 relative bg-[#F5F5DC]"
      >
        <div className="absolute top-8  -right-12">
          <Image src="/img/bunga-2.png" alt="" width={200} height={175} objectFit="cover" />
        </div>
        <div className="pt-9 text-left">
          <div className="flex gap-2 items-center ">
            <h3
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-2xl alex text-stone-500">Pesan</h3>
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              className="titles text-4xl text-stone-500/80">
              &
            </p>
            <h3 data-aos="fade-left"
              data-aos-duration="1500" className="text-2xl alex text-stone-500">Harapan</h3>
          </div>
          <p className="text-stone-400/80 brush px-2 text-sm">
            Do`a dan ucapan terbaik untuk kami
          </p>
        </div>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="max-w-3xl mx-auto relative px-2 py-9 flex flex-col "
        >
          <div className="pt-3 antialiased">
            <textarea
              name=""
              cols="30"
              rows="10"
              className="w-full p-4 text-sm brush focus:outline-stone-400 focus:border-none placeholder:italic rounded text-zinc-700 border-none  "
              placeholder="Tulis Pesan ..."
              {...register("comments", {
                required: true,
              })}
            ></textarea>
          </div>

          <button
            type="submit"
            className="rounded text-sm sm:text-md w-full lg:w-fit mx-auto py-2 px-8 mt-3 bg-[#e2c798]  shadow text-stone-500 transition-all duration-300 ease-linear hover:scale-95 "
          >
            {loading ? (
              "loading..."
            ) : (
              "Kirim"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default CommentForm;
