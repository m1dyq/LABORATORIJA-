create database daymian;
use daymian;


CREATE TABLE korisnik (
    korisnik_ID INT AUTO_INCREMENT PRIMARY KEY,
    ime VARCHAR(100) NOT NULL,
    prezime VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    sifra VARCHAR(255) NOT NULL,
    dob DATE,
    drzava VARCHAR(100),
    zanimanje VARCHAR(100),
    plan_ID INT,
    FOREIGN KEY (plan_ID) REFERENCES plan_pretplate(plan_ID)
        ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE AI_interakcija (
    interakcija_ID INT AUTO_INCREMENT PRIMARY KEY,
    korisnik_ID INT,
    input_message TEXT,
    output_message TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (korisnik_ID) REFERENCES korisnik(korisnik_ID)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE podrska (
    tiket_ID INT AUTO_INCREMENT PRIMARY KEY,
    korisnik_ID INT,
    predmet VARCHAR(200),
    poruka TEXT,
    status ENUM('otvoreno', 'zatvoreno', 'na cekanju') DEFAULT 'otvoreno',
    FOREIGN KEY (korisnik_ID) REFERENCES korisnik(korisnik_ID)
        ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE plan_pretplate (
    plan_ID INT AUTO_INCREMENT PRIMARY KEY,
    ime VARCHAR(100) NOT NULL,
    cijena DECIMAL(10,2) NOT NULL
);


CREATE TABLE funkcionalnost (
    funkcionalnost_ID INT AUTO_INCREMENT PRIMARY KEY,
    naslov VARCHAR(100) NOT NULL,
    opis TEXT
);


CREATE TABLE plan_funkcionalnosti (
    plan_ID INT,
    funkcionalnost_ID INT,
    PRIMARY KEY (plan_ID, funkcionalnost_ID),
    FOREIGN KEY (plan_ID) REFERENCES plan_pretplate(plan_ID)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (funkcionalnost_ID) REFERENCES funkcionalnost(funkcionalnost_ID)
        ON UPDATE CASCADE ON DELETE CASCADE
);



