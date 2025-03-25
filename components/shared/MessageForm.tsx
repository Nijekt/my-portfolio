"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import emailjs from "@emailjs/browser";
import { Textarea } from "../ui/textarea";

const MessageForm = () => {
  const form = React.useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_ofex1dq", "template_8szdnfm", form.current, {
          publicKey: "IDxZq-qVdcHVEvbtK",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.log("no form");
    }
  };
  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      className="space-y-8 w-full max-w-[780px]"
    >
      <div className="flex gap-8">
        <Input
          name="name"
          className="h-[60px] bg-[#1c1d24] border-3 border-transparent focus:border-[#ceae7d] focus:border-3 transition-all"
          placeholder="Your Name"
        />
        <Input
          name="email"
          className="h-[60px] bg-[#1c1d24] border-3 border-transparent focus:border-[#ceae7d] focus:border-3 transition-all"
          placeholder="Your Email"
        />
      </div>
      <Input
        name="subject"
        className="h-[60px] bg-[#1c1d24] border-3 border-transparent focus:border-[#ceae7d] focus:border-3 transition-all"
        placeholder="Subject"
      />
      <Textarea
        name="message"
        className="h-[200px] resize-none bg-[#1c1d24] border-3 border-transparent focus:border-[#ceae7d] focus:border-3 transition-all"
        placeholder="Your Message"
      />
      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default MessageForm;
