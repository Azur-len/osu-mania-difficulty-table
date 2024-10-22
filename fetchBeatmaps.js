const fetch = require('node-fetch');
const fs = require('fs');

// 환경 변수에서 클라이언트 ID와 시크릿 가져오기
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// 가져올 비트맵 ID 목록
const beatmapIds = ['1944021', '다른 비트맵 ID']; // 필요에 따라 추가

// osu! API URL 구성
const url = `https://osu.ppy.sh/api/get_beatmaps?k=${clientId}&c=${clientSecret}&b=${beatmapIds.join(',')}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        // 필요한 데이터만 추출하여 저장
        const beatmaps = data.map(beatmap => ({
            artist: beatmap.artist,
            title: beatmap.title,
            difficulty: beatmap.version,
            creator: beatmap.creator,
            time: `${Math.floor(beatmap.total_length / 60)}:${('0' + (beatmap.total_length % 60)).slice(-2)}`,
            bpm: beatmap.bpm,
            rice: beatmap.count_circles,
            noodles: beatmap.count_sliders,
            hp: beatmap.drain,
            od: beatmap.overall_diff,
            star_rating: beatmap.difficultyrating,
            thumbnail: beatmap.cover
        }));
        // _data 디렉토리에 beatmaps.json 파일로 저장
        fs.writeFileSync('_data/beatmaps.json', JSON.stringify(beatmaps, null, 2));
        console.log('Beatmap data updated.');
    })
    .catch(error => {
        console.error('Error fetching beatmap data:', error);
        process.exit(1);
    });
