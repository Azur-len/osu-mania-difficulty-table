document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'YOUR_OSU_API_KEY'; // 주의: 클라이언트 사이드에 API 키를 노출하지 않는 것이 중요합니다.
    const beatmapId = '1944021'; // 예시 비트맵 ID
    const url = `https://osu.ppy.sh/api/get_beatmaps?k=${apiKey}&b=${beatmapId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const beatmap = data[0];
                const infoDiv = document.getElementById('beatmap-info');
                infoDiv.innerHTML = `
                    <p>아티스트: ${beatmap.artist}</p>
                    <p>곡 제목: ${beatmap.title}</p>
                    <p>BPM: ${beatmap.bpm}</p>
                    <p>길이: ${beatmap.total_length}초</p>
                    <p>스타 등급: ${beatmap.difficultyrating}★</p>
                `;
            } else {
                document.getElementById('beatmap-info').innerText = '비트맵 정보를 불러올 수 없습니다.';
            }
        })
        .catch(error => {
            console.error('API 요청 오류:', error);
            document.getElementById('beatmap-info').innerText = '데이터를 불러오는 중 오류가 발생했습니다.';
        });
});
