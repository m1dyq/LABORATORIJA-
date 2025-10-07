create database daymian;
use daymian;

CREATE TABLE plan_pretplate (
    plan_ID INT AUTO_INCREMENT PRIMARY KEY,
    ime VARCHAR(100) NOT NULL,
    cijena DECIMAL(10,2) NOT NULL
);

CREATE TABLE korisnik (
    korisnik_ID INT AUTO_INCREMENT PRIMARY KEY,
    ime VARCHAR(50) NOT NULL,
    prezime VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    šifra VARCHAR(255) NOT NULL,
    dob INT,
    država VARCHAR(50),
    zanimanje VARCHAR(100),
    plan_ID INT,
    FOREIGN KEY (plan_ID) REFERENCES plan_pretplate(plan_ID)
);

CREATE TABLE funkcionalnosti (
    funkcionalnost_ID INT AUTO_INCREMENT PRIMARY KEY,
    naslov VARCHAR(100) NOT NULL,
    opis TEXT
);

CREATE TABLE AI_interakcija (
    interakcija_ID INT AUTO_INCREMENT PRIMARY KEY,
    korisnik_ID INT,
    input_message TEXT NOT NULL,
    output_message TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (korisnik_ID) REFERENCES korisnik(korisnik_ID)
);

CREATE TABLE plan_funkcionalnosti (
    plan_ID INT,
    funkcionalnost_ID INT,
    PRIMARY KEY (plan_ID, funkcionalnost_ID),
    FOREIGN KEY (plan_ID) REFERENCES plan_pretplate(plan_ID),
    FOREIGN KEY (funkcionalnost_ID) REFERENCES funkcionalnosti(funkcionalnost_ID)
);

CREATE TABLE podrška (
    tiket_ID INT AUTO_INCREMENT PRIMARY KEY,
    korisnik_ID INT,
    predmet VARCHAR(100) NOT NULL,
    poruka TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'otvoreno',
    FOREIGN KEY (korisnik_ID) REFERENCES korisnik(korisnik_ID)
);



