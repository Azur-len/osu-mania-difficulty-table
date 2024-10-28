import React, { useState } from 'react';
import BeatmapCard from './BeatmapCard';
import DropZone from './DropZone';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {
  const [beatmaps, setBeatmaps] = useState([
    {
      title: 'Beatmap 1',
      artist: 'Artist 1',
      beatmap_set_id: 12345,
      beatmap_id: 67890,
      level: 13,
      sub_level: 0,
      creator: 'Creator 1',
      bpm: 180,
      length: '00:03:45',
      hp: 7.5,
      od: 8.0,
      star_rating: 4.5,
      key_count: 7,
    },
    // 추가 비트맵 데이터
  ]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <h1>osu! Beatmap Manager</h1>
        <div className="beatmap-list">
          {beatmaps.map((beatmap) => (
            <BeatmapCard key={beatmap.beatmap_id} beatmap={beatmap} />
          ))}
        </div>
        <div className="drop-zone-list">
          <DropZone level={13} subLevel={0} />
          <DropZone level={13} subLevel={5} />
          {/* 추가적인 DropZone */}
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
