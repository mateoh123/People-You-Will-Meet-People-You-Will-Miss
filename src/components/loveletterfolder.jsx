function LoveLetterWindow({ onClose }) {
  return (
    <div className="absolute inset-0 md:inset-auto md:top-24 md:left-[55%] md:-translate-x-1/2 md:w-[600px] md:h-[400px] rounded-none md:rounded-xl overflow-hidden shadow-2xl flex flex-col">
      <div className="bg-white drop-shadow px-4 py-2 flex items-center gap-2 shrink-0">
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
          my love letter
        </span>
      </div>
      <div className="bg-white flex-1 p-4 overflow-y-auto flex flex-col gap-3">
        <p className="text-xs text-black">
          Photography was my first art form, but it was also my first love. In
          the eyes of someone who had not yet learned what it meant to say "I
          love you," to end up on my SD card was the greatest compliment of all.
        </p>
        <p className="text-xs text-black">
          The hobby I grasped so easily at twelve (
          <em>thank you revolutionary iPhone 8 plus</em>) became my earliest
          form of expression. It was never just about capturing my subject but
          rather solidifying my connection with those who mean the most to me.
        </p>
        <p className="text-xs text-black">
          "People You Meet, People You Miss" is a collage of meaningful candids
          shot on a variety of lenses, more specifically the Canon DSLR, Sony
          Handycam, and various disposables acquired over the years.
          Technologies that require far more precision than Apple's portrait
          mode.
        </p>
        <p className="text-xs text-black">
          A project born out of a deep sadnes, became what I come to recognize
          as my declaration of love for those who’ve decided to stick around me.
        </p>
        <p className="text-xs text-black italic">
          A love letter to the people that matter most.
        </p>
        <p className="text-xs text-black">
          I hope you have{" "}
          <a className="font-bold italic" href="http://faithproject.net">
            faith
          </a>{" "}
          in me.
        </p>
      </div>
    </div>
  );
}

export default LoveLetterWindow;
