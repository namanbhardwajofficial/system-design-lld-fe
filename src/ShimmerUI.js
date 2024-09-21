export const ShimmerUI = () => {
  return (
    <div className="shimmer-container">
      {Array(16)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="meme-body">
            <div className="meme shimmer"></div>
          </div>
        ))}
    </div>
  );
};
