import Image from "next/image";
import type { NextPage } from "next";

const Profile: NextPage = () => {
    return (
        <>
           <div className="text-center p-96 text-white relative rounded-2xl">
                <Image src="/assets/etet.png" alt="Profile pic" width={36} height={36}  />
                <h3>Ezekiel Christian Emmanuelaudu</h3>
                <p>Pure Designer | Growing Developer</p>
                <p>
                    Address: 0xbFbccAd69D2B42339674F4988Bf5f200fBDe3004
                </p>
                <div className="social-media">
                    <a href="https://www.instagram.com/ex3cofficial">
                        <Image src="/assets/instagram.png" alt="Instagram" width={25} height={25} />
                    </a>
                    <a href="https://x.com/ekondu_e">
                        <Image src="/assets/x.png" alt="X" width={25} height={25} />
                    </a>
                    <a href="https://t.me/i_ex3c">
                        <Image src="/assets/telegram.png" alt="Telegram" width={25} height={25} />
                    </a>
                </div>
                
                <a href="mailto:ekonduemmanuel@gmail.com?subject=A%20mail%20from%20your%20buidlguidl%profile%page">Say hello</a>

                <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 mb-6 space-y-1  py-4 overflow-x-auto">
                    <p>My name is Ezekiel Ekondu Christian Emmanuelaudu, &apos;
                        I'm a Product Designer, 3d modelling artist, Motion &apos; graphics designer and growing Developer.</p>
                </div>
                    
            </div> 

        </>
    )
}


export default Profile;