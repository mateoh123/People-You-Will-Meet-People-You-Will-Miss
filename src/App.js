import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sdcard from "./assets/MacSDCardIcon.png";
import exitvideoicon from "./assets/MacExitVideoIcon.png";
import introvideoicon from "./assets/MacIntroVideoIcon.png";
import foldericon from "./assets/MacFolderIcon.png";
import desktopscreensaver from "./assets/DesktopScreensaver.avif";
import applelogo from "./assets/applelogo.png";
import Clock from "./components/dateandtime";
import SDCardWindow from "./components/sdcardfolder";
import DesktopIcon from "./components/desktopicon";
import ProjectFolderWindow from "./components/projectfolder";
import introVideo from "./assets/introvideo.mp4";
import exitVideo from "./assets/outrovideo.mp4";
import AirdropSound from "./assets/AirdropFX.mp3";
import "./App.css";

function App() {
  const [windowOpen, setWindowOpen] = useState(false);
  const [openFolder, setOpenFolder] = useState(null);
  const [showStart, setShowStart] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [showExit, setShowExit] = useState(false);
  const timerRef = useRef(null);
  const [showExitIcon, setShowExitIcon] = useState(false);
  useEffect(() => {
    startExitTimer();
    return () => clearTimeout(timerRef.current);
  });

  const handleStart = () => {
    setShowStart(false);
    setShowIntro(true);
  };

  const playSound = () => {
    const airdropfx = new Audio(AirdropSound);
    airdropfx.play();
  };

  const startExitTimer = () => {
    timerRef.current = setTimeout(() => {
      setShowExitIcon(true);
      playSound();
    }, 150000);
  };

  const handleExitEnded = () => {
    setShowExit(false);
    setShowExitIcon(false);
    setShowStart(true);
    clearTimeout(timerRef.current);
    startExitTimer();
  };

  return (
    <>
      {showStart && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center cursor-pointer"
          onClick={handleStart}
        >
          <DesktopIcon icon={introvideoicon} label="mateos_camcorder.mp4" />
        </div>
      )}

      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <video
              src={introVideo}
              className="w-screen h-auto"
              autoPlay
              playsInline
              onEnded={() => setShowIntro(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showExit && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <video
              src={exitVideo}
              className="w-screen h-auto"
              autoPlay
              playsInline
              onEnded={handleExitEnded}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <main
        className="h-screen w-screen overflow-x-hidden relative"
        style={{
          backgroundImage: `url(${desktopscreensaver})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <header className="p-2 flex flex-row items-center backdrop-blur-sm text-white gap-3 text-[12px] sm:text-xs font-semibold">
          <img
            src={applelogo}
            className="w-4 h-4 object-contain shrink-0"
            alt="Apple Logo"
          />
          <h1>
            <strong>Finder</strong>
          </h1>
          <h1>File</h1>
          <h1>Edit</h1>
          <Clock className="ml-auto" />
        </header>
        <div className="flex flex-col gap-4 justify-end items-end p-8">
          <DesktopIcon
            icon={sdcard}
            label="Mateo's SD Card"
            onClick={() => setWindowOpen(true)}
          />
          <DesktopIcon
            icon={foldericon}
            label="project"
            onClick={() => setOpenFolder("project")}
          />
          {showExitIcon && (
            <DesktopIcon
              icon={exitvideoicon}
              label="the_exit.mp4"
              onClick={() => setShowExit(true)}
            />
          )}
        </div>
        {windowOpen && <SDCardWindow onClose={() => setWindowOpen(false)} />}
        {openFolder === "project" && (
          <ProjectFolderWindow onClose={() => setOpenFolder(null)} />
        )}
      </main>
    </>
  );
}

export default App;
