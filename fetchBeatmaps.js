const fetch = require('node-fetch');
const fs = require('fs');

const apiKey = process.env.OSU_API_KEY;
const beatmapIds = ['1944021', '다른 비트맵 ID']; // 여러 비트맵 ID 추가 가능
const url = `https://osu.ppy.sh/api/get_beatmaps?k=${apiKey}&b=${beatmapIds.join(',')}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
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
        fs.writeFileSync('_data/beatmaps.json', JSON.stringify(beatmaps, null, 2));
        console.log('Beatmap data updated.');
    })
    .catch(error => {
        console.error('Error fetching beatmap data:', error);
        process.exit(1);
    });
