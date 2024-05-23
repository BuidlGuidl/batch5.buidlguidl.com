import Image from "next/image";
import type { NextPage } from "next";

const PersonalPage: NextPage = () => {
  return (
    <>
      <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
        <h1 className="text-center">
          <span className="block text-2xl mb-2"> </span>
          <span className="block text-4xl font-bold"></span>
        </h1>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <Image src="/assets/chris.png" alt="Ezekiel Ekondu Christian Emmanuelaudu" width={399} height={399} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ezekiel E. Christian Emmanuelaudu</h2>
            <p>
                My name is Ezekiel Ekondu Christian Emmanuelaudu. <br />I am currently
                I'm a Product Designer, 3d modelling artist, Motion graphics designer and growing Developer.
              <br />I live in Lagos, Nigeria.
            </p>
            <div className="card-actions">
              <Image alt="Twitter" src="/assets/twitter.png" width={25} height={25} />
              <a href="https://twitter.com/ekondu_e" target="_blank">
                Twitter
              </a>

              <Image alt="Telegram" src="/assets/telegram.png" width={25} height={25} />
              <a href="https://t.me/i_ex3c" target="_blank">
                Telegram
              </a>

              <Image alt="Instagram" src="/assets/instagram.png" width={25} height={25} />
              <a href="https://www.instagram.com/ex3cofficial" target="_blank">
                Instagram
              </a>
    

              <Image alt="Github" src="/assets/github.png" width={25} height={25} />
              <a href="https://github.com/i-ex3c" target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalPage;
