function getAllDirectors(movies) {
  return movies.map(movie => movie.director);
}

function howManyMovies(movies) {
  const spielbergDramaMovies = movies.filter(
    movie =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );

  return spielbergDramaMovies.length;
}

function scoresAverage(movies) {
  if (movies.length === 0) return 0;

  const totalScore = movies.reduce((sum, movie) => {
    return sum + (movie.score || 0);
  }, 0);

  const averageScore = totalScore / movies.length;
  return Number(averageScore.toFixed(2));
}

function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));

  if (dramaMovies.length === 0) return 0;

  const totalScore = dramaMovies.reduce((sum, movie) => {
    return sum + (movie.score || 0);
  }, 0);
  const averageScore = totalScore / dramaMovies.length;
  return Number(averageScore.toFixed(2));
}

function orderByYear(moviesArr) {
  return moviesArr
    .map(function (movie) {
      return movie;
    })
    .sort(function (a, b) {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
}
function orderAlphabetically(moviesArr) {
  const onlyTitles = moviesArr.map(function (movie) {
    return movie.title;
  });
  onlyTitles.sort(function (a, b) {
    return a.localeCompare(b);
  });
  const top20 = onlyTitles.splice(0, 20);
  return top20;
}
function turnHoursToMinutes(movies) {
  return movies.map(movie => {
    const duration = movie.duration.split(' ');
    let totalMinutes = 0;
    for (let time of duration) {
      if (time.includes('h')) {
        totalMinutes += parseInt(time) * 60;
      }
      if (time.includes('min')) {
        totalMinutes += parseInt(time);
      }
    }
    return {
      ...movie,
      duration: totalMinutes,
    };
  });
}

function bestYearAvg(movies) {
  if (movies.length === 0) return null;

  const years = [...new Set(movies.map(movie => movie.year))];

  let bestYear = '';
  let bestAvg = -1;

  for (let year of years) {
    const moviesOfYear = movies.filter(movie => movie.year === year);
    const avg = scoresAverage(moviesOfYear);

    if (avg > bestAvg || (avg === bestAvg && year < bestYear)) {
      bestYear = year;
      bestAvg = avg;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
