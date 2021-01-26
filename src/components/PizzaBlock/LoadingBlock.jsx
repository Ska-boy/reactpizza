import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="322" rx="3" ry="3" width="280" height="87" />
      <rect x="2" y="424" rx="3" ry="3" width="109" height="36" />
      <rect x="0" y="280" rx="0" ry="0" width="280" height="25" />
      <rect x="125" y="424" rx="3" ry="3" width="155" height="36" />
      <rect x="65" y="437" rx="0" ry="0" width="1" height="0" />
      <circle cx="140" cy="140" r="120" />
    </ContentLoader>
  );
};

export default LoadingBlock;
