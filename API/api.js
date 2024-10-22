import axios from 'axios';

export const fetchBeatmapData = async (beatmapUrl) => {
  const apiUrl = `https://osu.ppy.sh/api/get_beatmaps?k=YOUR_API_KEY&b=${beatmapUrl}`;
  
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching beatmap data:", error);
    throw error;
  }
};
