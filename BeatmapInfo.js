import React from 'react';

const BeatmapInfo = ({ data }) => {
  return (
    <div className="beatmap-container">
      <h2>{data.title}</h2>
      <p>Artist: {data.artist}</p>
      <p>Mapper: {data.creator}</p>
      <div className="stats">
        <p>Keys: {data.key_count}</p>
        <p>HP Drain: {data.hp_drain}</p>
        <p>Accuracy: {data.accuracy}</p>
        <p>Star Rating: {data.star_rating}</p>
      </div>
    </div>
  );
};

export default BeatmapInfo;
