DROP TABLE IF EXISTS userlist;

CREATE TABLE userlist (
	id SERIAL primary key,
  name VARCHAR(255) not null CHECK (name != ''),
	surname VARCHAR(255) not null CHECK (surname != ''),
	email VARCHAR(255) not null CHECK (email != '') UNIQUE,
	password VARCHAR(255) not null CHECK (password != ''),
	img_url VARCHAR(300),
	bio VARCHAR(1000),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
