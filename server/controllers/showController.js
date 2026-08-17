import axios from "axios";

export const getNowPlayingMovies = async (req, res) => {
  const url = "https://api.themoviedb.org/3/movie/now_playing";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${process.env.TMDB_API_KEY}`,
    },
  };

  try {
    const { data } = await axios.get(url, options);

    const movies = data.results;
    res.json({ success: true, movies: movies });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
