-- INSERT INTO users (name) VALUES ('Cloud');
-- INSERT INTO users (name) VALUES ('Jason');
-- INSERT INTO users (name) VALUES ('John');

-- INSERT INTO game (name) VALUES ('Cloud');
-- INSERT INTO game (name) VALUES ('Jason');
-- INSERT INTO users (name) VALUES ('John');

select user2_id from user_match where user1_id
IN(select user2_id from user_match where user1_id = 10);