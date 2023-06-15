import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const form = useRef<HTMLFormElement | null>(null);

  const serverId = process.env.SERVICE_ID as string;
  const templateId = process.env.TEMPLATE_ID as string;
  const publicKey = process.env.PUBLIC_KEY as string;

  // const serverId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  // const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
  // const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(serverId, templateId, form.current, publicKey)

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
      <form ref={form} onSubmit={sendEmail} className={styles.body}>
        <h1>Nodemailer → EmailJS</h1>
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
