import {useNavigate} from 'react-router-dom'
import Layout from "../components/Layout";
import TipCard from "../components/TypingTipCard";
import { tips } from "../constants/typingTips";

export default function TypingTips() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-3xl font-bold dark:text-pink-700 w-full h-full text-center">
          Learn how to get used to your keyboard and type faster
        </h1>
        <hr className="h-px my-4 bg-black border-0 dark:bg-gray-700 w-[80%]" />
        <div className="flex flex-col items-center justify-center space-y-4 p-4">
          {tips.map((tip, index) => (
            <TipCard key={index} tip={tip} />
          ))}
        </div>
        <button 
        onClick={() => navigate('/typing-test')}
        className="btn btn-primary bg-black text-white dark:bg-pink-700 dark:uppercase dark:rounded-full hover:scale-110 transition duration-300 ease-in-out">
          Take a Typing Test
        </button>
      </div>
    </Layout>
  );
}
