import { useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

function ImageGrid({
  images,
  labelColor = "text-gray-800",
  labelWeight = "font-normal",
}) {
  const [selected, setSelected] = useState(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  const shuffled = useMemo(() => {
    return [...images].sort(() => Math.random() - 0.5);
  }, [images]);

  const handleClick = (image, e) => {
    const rect = e.target.getBoundingClientRect();
    setOrigin({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    setSelected(image);
  };

  return (
    <>
      <div className="overflow-y-auto overflow-x-hidden h-full p-3 pb-20">
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3">
          {shuffled.map((image, index) => (
            <div key={index} className="break-inside-avoid mb-3 px-1">
              <img
                src={image.src}
                alt={image.alt || ""}
                className="w-11/12 h-auto align-middle rounded-lg mx-auto drop-shadow-xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={(e) => handleClick(image, e)}
              />
              <span
                className={`${labelColor} ${labelWeight} mt-5 text-xs text-center drop-shadow-xl block w-11/12 mx-auto truncate`}
              >
                {image.alt || `IMG_${index + 1}`}
              </span>
            </div>
          ))}
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-[9999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="relative flex items-center justify-center"
                initial={{
                  scale: 0.1,
                  x: origin.x - window.innerWidth / 2,
                  y: origin.y - window.innerHeight / 2,
                  opacity: 0,
                }}
                animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
                exit={{
                  scale: 0.1,
                  x: origin.x - window.innerWidth / 2,
                  y: origin.y - window.innerHeight / 2,
                  opacity: 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selected.src}
                  alt={selected.alt || ""}
                  className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-xl shadow-2xl border-t-[25px] border-l-8 border-b-8 border-r-8 border-neutral-200"
                />
                <div className="absolute top-0 left-0 right-0 h-[25px] flex items-center px-3 gap-2">
                  <button
                    className="text-neutral-200 text-[10px] font-bold leading-none bg-black/50 rounded-full w-2.5 h-2.5 flex items-center justify-center"
                    onClick={() => setSelected(null)}
                  >
                    ✕
                  </button>
                  <span className="text-[13px] truncate font-bold text-black/60">
                    {selected.alt}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}

export default ImageGrid;
