import ContentLoader from "react-content-loader";
const Skeleton = () => (
  <div className="pizza-block-wrapper">
    <ContentLoader
      speed={2}
      width={280}
      height={470}
      viewBox="0 0 280 470"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      {" "}
      <circle cx="140" cy="110" r="110" />
      <rect x="65" y="230" rx="10" ry="10" width="150" height="30" />
      <rect x="30" y="270" rx="20" ry="20" width="220" height="81" />
      <rect x="35" y="360" rx="10" ry="10" width="80" height="30" />
      <rect x="130" y="360" rx="15" ry="15" width="120" height="30" />
    </ContentLoader>
  </div>
);
export default Skeleton;
