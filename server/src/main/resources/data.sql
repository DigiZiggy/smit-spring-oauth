DROP TABLE IF EXISTS roles;

CREATE TABLE roles (
  user_id BIGINT NOT NULL,
  name VARCHAR(255),
  FOREIGN KEY (user_id)
    REFERENCES user(id) ON DELETE CASCADE
);

INSERT INTO User(id, name, username, password, email)
VALUES (1, 'Jaak Mats', 'jaak@smit', '123', 'jaak@smit.ee');
INSERT INTO User(id, name, username, password, email)
VALUES (2, 'Mikk Maasikas', 'mikk@smit', 'pass', 'mikk@smit.ee');

INSERT INTO roles(user_id, name) VALUES (1, 'admin');
INSERT INTO roles(user_id, name) VALUES (2, 'user');

INSERT INTO exchange_rate_toeur(id, rate, currency) VALUES (1, 1.6694, 'AUD');
INSERT INTO exchange_rate_toeur(id, rate, currency) VALUES (2, 1.0904, 'USD');
INSERT INTO exchange_rate_toeur(id, rate, currency) VALUES (3, 0.8956, 'GBP');
INSERT INTO exchange_rate_toeur(id, rate, currency) VALUES (4, 1.5273, 'CAD');
INSERT INTO exchange_rate_toeur(id, rate, currency) VALUES (5, 117.2600, 'JPY');
INSERT INTO exchange_rate_toeur(id, rate, currency) VALUES (6, 10.9078, 'NOK');
INSERT INTO exchange_rate_toeur(id, rate, currency) VALUES (7, 7.7797, 'CNY');
INSERT INTO exchange_rate_toeur(id, rate, currency) VALUES (8, 55.3490, 'PHP');
INSERT INTO exchange_rate_toeur(id, rate, currency) VALUES (9, 34.7780, 'THB');
