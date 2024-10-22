import React, { useState, lazy, Suspense } from 'react';
import './styles.css';
import { fetchBeatmapData } from './api';

// BeatmapInfo 컴포넌트를 Lazy로 로드
const BeatmapInfo = lazy(() => import('./components/BeatmapInfo'));

function App() {
  const [beatmapUrl, setBeatmapUrl] = useState('');
  const [beatmapData, setBeatmapData] = useState(null);

  const handleFetchData = async () => {
    try {
      const data = await fetchBeatmapData(beatmapUrl);
      setBeatmapData(data[0]);  // API가 배열을 반환하는 경우 첫 번째 요소 사용
    } catch (error) {
      console.error("Error fetching beatmap data");
    }
  };

  return (
    <div className="app">
      <h1>osu! 비트맵 정보 가져오기</h1>
      <input
        type="text"
        value={beatmapUrl}
        onChange={(e) => setBeatmapUrl(e.target.value)}
        placeholder="비트맵 URL을 입력하세요"
      />
      <button onClick={handleFetchData}>데이터 가져오기</button>

      {/* 비트맵 데이터를 로드할 때 Suspense로 감쌉니다 */}
      <Suspense fallback={<div>Loading...</div>}>
        {beatmapData && <BeatmapInfo data={beatmapData} />}
      </Suspense>
    </div>
  );
}

export default App;
