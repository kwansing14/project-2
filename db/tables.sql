CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS game_user (
		id SERIAL PRIMARY KEY,
		game_id INTEGER,
		user_id INTEGER
);

CREATE TABLE IF NOT EXISTS game(
		id SERIAL PRIMARY KEY,
		name TEXT
);

CREATE TABLE IF NOT EXISTS game_profile (
		id SERIAL PRIMARY KEY,
		tweet_id INTEGER,
		hash_id INTEGER
);

CREATE TABLE IF NOT EXISTS user_match (
		id SERIAL PRIMARY KEY,
		user1_id INTEGER,
		user2_id INTEGER
);

CREATE TABLE IF NOT EXISTS profile (
		id SERIAL PRIMARY KEY,
		game_id INTEGER,
		name TEXT,
		level TEXT,
		server TEXT,
		bio TEXT,
		user_id INTEGER
);