
INSERT INTO ROLE(id, name) VALUES (1, 'ROLE_ADMIN');
INSERT INTO ROLE(id, name) VALUES (2, 'ROLE_BUYER');
INSERT INTO ROLE(id, name) VALUES (3, 'ROLE_SELLER');

INSERT INTO USER(id, name, phone, username, email, password, status, role_id) VALUES (1, 'Miu Admin', '6418195689', 'admin', 'admin@miu.edu', '$2a$10$nrW7iZ22MzaRQChpvapgQ.dgdQyhMAjj6cYjf7kdR6S3sbnCOxcqO', 'ACTIVE', 1);
INSERT INTO USER(id, name, phone, username, email, password, status, role_id) VALUES (2, 'Miu Marketing', '6418195688','seller', 'seller@miu.edu', '$2a$10$nrW7iZ22MzaRQChpvapgQ.dgdQyhMAjj6cYjf7kdR6S3sbnCOxcqO', 'PENDING', 3);
INSERT INTO USER(id, name, phone, username, email, password, status, role_id) VALUES (3, 'Elen Mark', '6418195682', 'ellen', 'ellenmark@miu.edu', '$2a$10$nrW7iZ22MzaRQChpvapgQ.dgdQyhMAjj6cYjf7kdR6S3sbnCOxcqO', 'PENDING', 3);
INSERT INTO USER(id, name, phone, username, email, password, status, role_id) VALUES (4, 'Miu Customer', '6418195681', 'buyer', 'sarah@miu.edu', '$2a$10$nrW7iZ22MzaRQChpvapgQ.dgdQyhMAjj6cYjf7kdR6S3sbnCOxcqO', 'ACTIVE', 2);