import ImageGrid from "./imagegrid";
import photo1 from "../assets/meetphotos/IMG_2528.avif";
import photo2 from "../assets/meetphotos/JPEG image-4E5E-9DC7-38-0.jpeg";
import photo3 from "../assets/meetphotos/ch8hek93ui8pus1vodzt.avif";
import photo4 from "../assets/meetphotos/dpr3w4jfd1m8bziintu6.avif";
import photo5 from "../assets/meetphotos/e7s9g5yxocv1gepy2ioi.avif";
import photo6 from "../assets/meetphotos/ejlzgobt89agbowaptt0.avif";
import photo7 from "../assets/meetphotos/gpvthanjvfy0o6cngxhk.avif";
import photo8 from "../assets/meetphotos/iuswykmey6yaufwkmjyz.avif";
import photo9 from "../assets/meetphotos/kxxlmt50bwo3z8oldeoh.avif";
import photo10 from "../assets/meetphotos/pwowkcquuoooylkslcrg.avif";
import photo11 from "../assets/meetphotos/tde5xb6fuzexh6xfau7i.avif";
import photo12 from "../assets/meetphotos/wczs0fioc5hiuqiw8fi5.avif";
import photo13 from "../assets/meetphotos/xcilrpu1ch9thcvgloom.avif";
import photo14 from "../assets/meetphotos/xguakp30fwa5grrj2jki.avif";
import photo15 from "../assets/meetphotos/xvmddlmobmpc7e3er3to.avif";
import photo16 from "../assets/meetphotos/yetuef8ndzuaaeapfoa6.avif";
import photo17 from "../assets/meetphotos/z8kkorxvqpt741gmphox.avif";
import photo18 from "../assets/meetphotos/DSCN0326.JPG";
import photo19 from "../assets/meetphotos/DSCN0745.JPG";

const meet_images = [
  { src: photo1, alt: "sienna_brooklyn.jpg" },
  { src: photo2, alt: "cassandra_ambassador.jpg" },
  { src: photo3, alt: "FirstBeachTrip.heic" },
  { src: photo4, alt: "MercedesCoachella.jpg" },
  { src: photo5, alt: "Me+Allyson.jpeg" },
  { src: photo6, alt: "missyougirl.heic" },
  { src: photo7, alt: "FirstNycHalloween.jpg" },
  { src: photo8, alt: "brokenheart.heic" },
  { src: photo9, alt: "vintage_cameras.png" },
  { src: photo10, alt: "PaimonPaimon.png" },
  { src: photo11, alt: "natalie.heic" },
  { src: photo12, alt: "LastBeachTrip.jpg" },
  { src: photo13, alt: "sona.png" },
  { src: photo14, alt: "suburban_legends.jpeg" },
  { src: photo15, alt: "Want_Soup.jpeg" },
  { src: photo16, alt: "5Feet_ToBeExact.jpg" },
  { src: photo17, alt: "goodbye_california.png" },
  { src: photo18, alt: "RAWRXD.png" },
  { src: photo19, alt: "me_and_ava.png" },
];

function PeopleYouMeetWindow({ onClose }) {
  return (
    <div className="absolute inset-0 md:inset-auto md:top-24 md:left-[55%] md:-translate-x-1/2 md:w-[600px] md:h-[400px] rounded-none md:rounded-xl overflow-hidden shadow-2xl">
      <div className="bg-white drop-shadow px-4 py-2 flex items-center gap-2">
        <div className="flex items-center gap-2 self-start mt-3">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500"
          />
          <button className="w-3 h-3 rounded-full bg-yellow-400" />
          <button className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-2 drop-shadow bg-white px-2 py-1 rounded-full">
            <h1
              className="font-medium text-gray-500 rounded-full hover:bg-black/10 hover:border hover:px-1  "
              onClick={onClose}
            >
              {"<"}
            </h1>
            <h1 className="font-thin text-gray-200">|</h1>
            <h1 className="font-medium text-gray-200">{">"}</h1>
          </div>
          <p className="text-[12px] text-gray-600">Back/Forward</p>
        </div>
        <span className="text-xs text-gray-700 font-semibold self-start mt-2">
          people you meet
        </span>
      </div>
      <div className="bg-white h-full p-1">
        <ImageGrid images={meet_images} />
      </div>
    </div>
  );
}

export default PeopleYouMeetWindow;
