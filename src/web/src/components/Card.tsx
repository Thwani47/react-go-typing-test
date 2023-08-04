type CardProps = {
  title: string;
  content: string;
  imageSrc: string;
  actionButton: {
    text: string;
    action: () => void;
  };
};
export default function Card({
  title,
  content,
  imageSrc,
  actionButton
}: CardProps) {
  return (
    <div className="card  w-72 hover:scale-110 transition duration-300 ease-in-out  bg-base-100 shadow-xl max-h-96 rounded-xl dark:border dark:border-pink-700">
      <figure className="p-4">
        <img src={imageSrc} alt="card-image" className="rounded-xl w-48 h-36" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions">
          <button className="btn btn-primary dark:bg-pink-700 dark:uppercase dark:rounded-full hover:scale-105">
            {actionButton.text}
          </button>
        </div>
      </div>
    </div>
  );
}
