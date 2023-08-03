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
    <div className="card  w-72  bg-base-100 shadow-xl">
      <figure className="px-10 pt-4">
        <img src={imageSrc} alt="card-image" className="rounded-xl w-52 h-40" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions">
          <button className="btn btn-primary">{actionButton.text}</button>
        </div>
      </div>
    </div>
  );
}
