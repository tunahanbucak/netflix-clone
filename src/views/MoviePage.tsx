import { Box, Button, Link } from "@mui/material";
import Card from "../components/Card";
import requests from "../requests";

export default function MoviePage() {
  return (
    <Box>
      <Button>
        <Link href="/">anasayfayaya don</Link>
      </Button>
      <Card
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Card title="Trending now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Card title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Card
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <Card
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
      <Card
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
      <Card
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
      <Card
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </Box>
  );
}
