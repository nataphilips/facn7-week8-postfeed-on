BEGIN;

    DROP TABLE IF EXISTS users,tasks
    CASCADE;

CREATE TABLE users
(
    user_id serial PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    password VARCHAR(500) NOT NULL
);

CREATE TABLE posts
(
    post_id serial PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content_text TEXT NOT NULL,
    content_img_url VARCHAR(300),
    user_id int,
    post_rank INTEGER DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO users
    (user_name,password)
VALUES('natalia', '12345');

INSERT INTO posts
    (title, content_text, content_img_url,user_id)
VALUES('My firstpost', 'Hello Omri!', 'https://i.pinimg.com/originals/c2/f3/97/c2f397970e3f461782b8a5ea230c145e.jpg', 1);


COMMIT;
