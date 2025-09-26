import React from "react";
import { Button } from "../ui/button";

const Welcome = () => {
  return (
    <section id="home" className="flex items-center bg-header-background">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-auto">
          <div className="flex-1 flex flex-col items-center mt-32 mb-24">
            <p className="text-2xl mb-4">Hi, my name is Nikita</p>
            <h1 className="lg:text-6xl text-center text-4xl">
              A Full-Stack Web Developer
            </h1>
            <p className="text-xl py-8 max-w-[400px] text-center">
              I create user interfaces that beautifully combine design and
              usability.
            </p>
            <Button variant={"default"} className="w-40 h-13">
              <a
                href="https://www.linkedin.com/in/nikita-snizhko-639805252/"
                target="_blank"
              >
                Reach out to me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
