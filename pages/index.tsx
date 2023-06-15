import Head from "next/head";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_5ttfhan",
          "template_czborkj",
          form.current,
          "hpvW0zEhHMupBhwZi"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
}
