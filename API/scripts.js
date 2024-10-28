document.getElementById('fetch-beatmap').addEventListener('click', fetchBeatmapData);

function fetchBeatmapData() {
    const beatmapLink = document.getElementById('beatmap-link').value;

    // osu! API에서 비트맵 데이터를 받아오는 가정 (실제 API를 사용해야 함)
    const dummyData = {
        title: 'Sample Beatmap',
        artist: 'Sample Artist',
        creator: 'Sample Creator',
        length: '3:45',
        bpm: 180,
        hp: 7.5,
        od: 8.0,
        star_rating: 5.0,
        beatmap_set_id: 123456,
        beatmap_id: 654321,
        image: 'https://via.placeholder.com/150' // 썸네일 이미지 (실제 데이터로 변경 필요)
    };

    createBeatmapCard(dummyData);
}

function createBeatmapCard(data) {
    const cardContainer = document.getElementById('beatmap-cards');
    
    // 비트맵 카드 생성
    const card = document.createElement('div');
    card.classList.add('beatmap-card');
    card.innerHTML = `
        <img src="${data.image}" alt="Beatmap Thumbnail">
        <h3>${data.title} - ${data.artist}</h3>
        <p>제작자: ${data.creator}</p>
        <p>BPM: ${data.bpm}</p>
        <p>길이: ${data.length}</p>
        <p>HP: ${data.hp}, OD: ${data.od}</p>
        <p>Star Rating: ${data.star_rating}</p>
    `;

    cardContainer.appendChild(card);
}
