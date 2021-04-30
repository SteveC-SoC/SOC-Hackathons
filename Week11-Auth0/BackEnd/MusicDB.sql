genre artist youtube link

CREATE TABLE MusicApp (
    Id SERIAL PRIMARY KEY,
    Genre VARCHAR (30),
    Song VARCHAR (50),
    Artist VARCHAR (60),
    YouTubeLink TEXT

);

INSERT INTO
    MusicApp (Genre, Song, Artist, YouTubeLink)

VALUES
    ('Pop', 'Feel It Still','Portugal. The Man', 'https://www.youtube.com/watch?v=pBkHHoOIIn8');