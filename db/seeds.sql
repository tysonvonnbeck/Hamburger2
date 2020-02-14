USE burgers_db;

INSERT INTO burgers (name, eaten, createdAt, updatedAt) VALUES ('chees burger',false, curdate(), curdate());
INSERT INTO burgers (name, eaten, createdAt, updatedAt) VALUES ('ranch burger', true, curdate(), curdate());
INSERT INTO burgers (name, eaten, createdAt, updatedAt) VALUES ('spicy burger', true, curdate(), curdate());
INSERT INTO burgers (name, eaten, createdAt, updatedAt) VALUES ('double burger', true, curdate(), curdate());
SELECT * FROM burgers_db.Burgers;