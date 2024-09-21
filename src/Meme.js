export const Meme = ({ memeData }) => {
  const { author, url, title } = memeData;
  return (
    <div className="meme-body">
      <img className="meme" src={url} alt={title}></img>
      <p>Author : {author}</p>
    </div>
  );
};
