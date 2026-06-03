import { motion } from "framer-motion";

function DesktopIcon({
  icon,
  label,
  onClick,
  labelColor = "text-slate-200",
  labelWeight = "font-bold",
  locked = false,
}) {
  const shakeVariants = {
    shake: {
      x: [-5, 5, -5, 5, -3, 3, 0],
      transition: { duration: 0.4 },
    },
    idle: { x: 0 },
  };

  const handleClick = () => {
    if (locked) return;
    if (onClick) onClick();
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-2 cursor-pointer w-16"
      onClick={handleClick}
      whileTap={locked ? "shake" : {}}
      variants={shakeVariants}
    >
      <img src={icon} className="max-w-20 h-auto object-contain" alt={label} />
      <p
        className={`${labelColor} ${labelWeight} text-xs  text-center drop-shadow-2xl truncate`}
      >
        {label}
      </p>
    </motion.div>
  );
}

export default DesktopIcon;
