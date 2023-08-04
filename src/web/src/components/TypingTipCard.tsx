import { TypingTip } from "../global/types";

type TypingTipCardProps = {
  tip: TypingTip;
};
export default function TypingTipCard({ tip }: TypingTipCardProps) {
  return (
    <div className="w-[50%] p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-black dark:border-gray-700 hover:scale-110 transition duration-300 ease-in-out">
      <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-pink-700">
        {tip.title}
      </h5>
      <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        {tip.description}
      </p>
    </div>
  );
}
