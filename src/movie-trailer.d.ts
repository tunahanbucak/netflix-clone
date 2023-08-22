declare module "movie-trailer" {
  function movieTrailer(movieName: string, options?: any): Promise<string>;
  export = movieTrailer;
}
