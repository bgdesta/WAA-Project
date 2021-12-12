-- INSERT INTO STUDENT (id, firstname, lastname, age, cgpa) VALUES (1, 'Martin', 'Johns', 45, 4.0);
-- INSERT INTO STUDENT (id, firstname, lastname, age, cgpa) VALUES (2, 'Bojie', 'Deng', 37, 3.9);
-- INSERT INTO STUDENT (id, firstname, lastname, age, cgpa) VALUES (3, 'Sarah', 'Walters', 24, 3.6);
INSERT INTO ROLE(id, name) VALUES (1, 'ROLE_ADMIN');
INSERT INTO ROLE(id, name) VALUES (2, 'ROLE_BUYER');
INSERT INTO ROLE(id, name) VALUES (3, 'ROLE_SELLER');

INSERT INTO USER(id, username, email, password, status, role_id) VALUES (1, 'admin', 'admin@miu.edu', '$2a$10$nrW7iZ22MzaRQChpvapgQ.dgdQyhMAjj6cYjf7kdR6S3sbnCOxcqO', 'ACTIVE', 1);
INSERT INTO USER(id, username, email, password, status, role_id) VALUES (2, 'seller', 'seller@miu.edu', '$2a$10$nrW7iZ22MzaRQChpvapgQ.dgdQyhMAjj6cYjf7kdR6S3sbnCOxcqO', 'PENDING', 3);
INSERT INTO USER(id, username, email, password, status, role_id) VALUES (3, 'seller1', 'seller1@miu.edu', '$2a$10$nrW7iZ22MzaRQChpvapgQ.dgdQyhMAjj6cYjf7kdR6S3sbnCOxcqO', 'PENDING', 3);