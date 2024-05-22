import Image from "next/image";
import type { NextPage } from "next";
import { AcademicCapIcon, BriefcaseIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Profilepage: NextPage = () => {
    return(
        <>
        <div className="w-full h-screen bg-center flex items-center justify-center" >
            <div className="text-center p-96 text-white relative rounded-2xl">
                <Image src="assets/etet.png" class="w-36 p-1.5"></Image>
                <h3>Ezekiel Christian Emmanuelaudu</h3>
                <p>Pure Designer | Growing Developer</p>>
                <p style="font-size: 15px; padding: 3px; margin-top: 2px;">
                Address: 0xbFbccAd69D2B42339674F4988Bf5f200fBDe3004</p>
                <p></p>
                <div class="social-media">

                    <a href="https://www.instagram.com/ex3cofficial">
                        <Image src="assets/instagram.png" width={25} height={25}> </a>
                    <a href="https://x.com/ekondu_e">
                        <Image src="assets/x.png" width={25} height={25}></a>
                    <a href="https://t.me/i_ex3c">
                        <Image src="assets/telegram.png" width={25} height={25}></a>
                </div>

                <a href="mailto:ekonduemmanuel@gmail.com?subject=A%20mail%20from%20your%20buidlguidl%profile%page">
                    <btn type="button">Say hello</btn>
                </a>

                <div class="text-zinc-800 p-96 -mr-24 -ml-24 -mb-10 rounded-2xl">
                    <p>My name is Ezekiel Ekondu Christian Emmanuelaudu, &apos;<br>
                    I'm a Product Designer, 3d modelling artist, Motion &apos;<br> graphics designer and growing Developer.</p>
                </div>

            </div>

        </div>
        </>
    );
};

export default Profilepage;