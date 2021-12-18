
INSERT INTO ROLE(id, name) VALUES (1, 'ROLE_ADMIN');
INSERT INTO ROLE(id, name) VALUES (2, 'ROLE_BUYER');
INSERT INTO ROLE(id, name) VALUES (3, 'ROLE_SELLER');

INSERT INTO USER(id, name, phone, username, email, password, status, role_id) VALUES (1, 'Miu Admin', '6418195689', 'admin', 'admin@miu.edu', '$2a$10$nrW7iZ22MzaRQChpvapgQ.dgdQyhMAjj6cYjf7kdR6S3sbnCOxcqO', 'ACTIVE', 1);
INSERT INTO USER(id, name, phone, username, email, password, status, role_id) VALUES (2, 'Miu Marketing', '6418195688','seller', 'seller@miu.edu', '$2a$10$nrW7iZ22MzaRQChpvapgQ.dgdQyhMAjj6cYjf7kdR6S3sbnCOxcqO', 'PENDING', 3);
INSERT INTO USER(id, name, phone, username, email, password, status, role_id) VALUES (3, 'Elen Mark', '6418195682', 'ellen', 'ellenmark@miu.edu', '$2a$10$nrW7iZ22MzaRQChpvapgQ.dgdQyhMAjj6cYjf7kdR6S3sbnCOxcqO', 'PENDING', 3);
INSERT INTO USER(id, name, phone, username, email, password, status, role_id) VALUES (4, 'Miu Customer', '6418195681', 'buyer', 'sarah@miu.edu', '$2a$10$nrW7iZ22MzaRQChpvapgQ.dgdQyhMAjj6cYjf7kdR6S3sbnCOxcqO', 'ACTIVE', 2);

INSERT INTO PRODUCT(id, name, model, unitprice, serialnum, description, status) VALUES (1, 'iPhone 13 Pro', 'PNX2-iPhone13', 2000, 'SN1234', 'Description', 'AVAILABLE');
INSERT INTO PRODUCT(id, name, model, unitprice, serialnum, description, status) VALUES (2, 'Samsung Galaxy M31', 'SNGX2-Samsung', 3000, 'SN4789', 'Description', 'AVAILABLE');
INSERT INTO PRODUCT(id, name, model, unitprice, serialnum, description, status) VALUES (3, 'MacBook Pro', 'SNMAC-MC2', 3200, 'SN454789', 'Description', 'AVAILABLE');
INSERT INTO PRODUCT(id, name, model, unitprice, serialnum, description, status) VALUES (4, 'Apple Watch', 'SNAPPL-WCH', 500, 'SN102789', 'Description', 'AVAILABLE');
INSERT INTO PRODUCT(id, name, model, unitprice, serialnum, description, status) VALUES (5, 'iPhone 11', 'APP2HJ', 1000, 'SN85748', 'Description', 'AVAILABLE');
INSERT INTO PRODUCT(id, name, model, unitprice, serialnum, description, status) VALUES (6, 'Mac Min', 'MACMIN', 2340, 'SN443748', 'Description', 'AVAILABLE');

