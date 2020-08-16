

CREATE TABLE movie_scores_genre (
	title TEXT PRIMARY KEY NOT NULL,
	genre TEXT,
 	SCORE INTEGER
 );

 CREATE TABLE datasets_movies (
	budget INTEGER,
	company TEXT,
	country TEXT,
	director TEXT,
	genre TEXT,
	gross INTEGER,
	name TEXT PRIMARY KEY NOT NULL,
	rating INTEGER,
	released DATE,
	runtime INTEGER,
 	score INTEGER,
	star INTEGER,
	votes INTEGER,
	writer TEXT,
	year INTEGER
);

-- DROP TABLE datasets_movies

-- DROP TABLE testing_connection

-- DROP TABLE movie_scores_genre

