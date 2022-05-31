import { motion } from "framer-motion";

export default function Learning() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <>
      <motion.div
        className="base container mx-auto px-8 py-10 rounded shadow-md w-full shadow-gray-50/4 mb-2"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <h1 className="text-2xl font-bold">It's Time to learning.</h1>
        <p>have fun ygy</p>
      </motion.div>
      <div className="flex gap-5">
        <motion.div
          className="base w-auto px-2 py-2 rounded shadow-md shadow-gray-50/4"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div>
            <img
              src="https://crowdbotics.ghost.io/content/images/2021/05/React-Native-Img.png"
              alt="react-native"
              width="300"
              height="100%"
              className="rounded-md"
            />
            <h1 className="font-semibold pt-2">React native zeros to pros</h1>
            <h2 className="text-xs font-smooth mb-2">
              Author by Cepi herdiansyah
            </h2>
          </div>
          <div>
            <button className="primary w-full">Learn Now !</button>
          </div>
        </motion.div>
        <motion.div
          className="base w-auto px-2 py-2 rounded shadow-md shadow-gray-50/4"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div>
            <img
              src="https://static.codingforentrepreneurs.com/media/projects/try-reactjs/images/share/Try_Reactjs-Share.jpg"
              alt="react-native"
              width="300"
              height="200"
              className="rounded-md"
            />
            <h1 className="font-semibold pt-2">React Js zeros to pros</h1>
            <h2 className="text-xs font-smooth mb-2">
              Author by Unknown
            </h2>
          </div>
          <div>
            <button className="primary w-full">Learn Now !</button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
