import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

export default function Contact() {
  return (
    <>
    <Head >
        <title>Contact me</title>
        <meta name="description" content="send me your message" />
    </Head>
      <ContactForm />{" "}
    </>
  );
}
