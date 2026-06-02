import { useState } from "react";
import foldericon from "../assets/MacFolderIcon.png";
import textfileicon from "../assets/MacTextFileIcon.png";
import DesktopIcon from "./desktopicon";
import PeopleYouMeetWindow from "./peopleyoumeetfolder";
import PeopleYouMissWindow from "./peopleyoumissfolder";
import LoveLetterWindow from "./loveletterfolder";

function SDCardWindow({ onClose }) {
  const [openFolder, setOpenFolder] = useState(null);

  return (
    <>
      <div className="absolute inset-0 md:inset-auto md:top-20 md:left-1/2 md:-translate-x-1/2 md:w-[600px] md:h-[400px] rounded-none md:rounded-xl overflow-hidden shadow-2xl">
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
              <h1 className="font-medium text-gray-200">{"<"}</h1>
              <h1 className="font-thin text-gray-200">|</h1>
              <h1 className="font-medium text-gray-200">{">"}</h1>
            </div>
            <p className="text-[12px] text-gray-600">Back/Forward</p>
          </div>
          <span className="text-xs text-gray-700 font-semibold self-start mt-2">
            Mateo's SD Card
          </span>
        </div>
        <div className="bg-white h-full p-4 md:pl-10">
          <div className="grid grid-cols-2 gap-4 place-items-center md:flex md:justify-start md:gap-14">
            <DesktopIcon
              icon={foldericon}
              label="people you meet"
              labelColor="text-black"
              labelWeight="font-normal"
              onClick={() => setOpenFolder("meet")}
            />
            <DesktopIcon
              icon={foldericon}
              label="people you miss"
              labelColor="text-black"
              labelWeight="font-normal"
              onClick={() => setOpenFolder("miss")}
            />
            <DesktopIcon
              icon={textfileicon}
              label="MyLoveLetter.txt"
              labelColor="text-black"
              labelWeight="font-normal"
              onClick={() => setOpenFolder("love")}
            />
          </div>
        </div>
      </div>

      {openFolder === "meet" && (
        <PeopleYouMeetWindow onClose={() => setOpenFolder(null)} />
      )}
      {openFolder === "miss" && (
        <PeopleYouMissWindow onClose={() => setOpenFolder(null)} />
      )}
      {openFolder === "love" && (
        <LoveLetterWindow onClose={() => setOpenFolder(null)} />
      )}
    </>
  );
}

export default SDCardWindow;
