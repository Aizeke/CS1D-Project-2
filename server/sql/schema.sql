-- Schema for SQL database/table.
DROP DATABASE IF EXISTS electron_db;

-- Create database
CREATE database electron_db;
USE electron_db;

-- Create Table for Disatnces
CREATE TABLE nfldistances (
    id INT NOT NULL AUTO_INCREMENT,
    distance INT NOT NULL,
    beginningstadium TEXT NOT NULL,
    teamname TEXT NOT NULL,
    endingstadium TEXT NOT NULL,
    PRIMARY KEY (id)
);

-- Create Table for Information
CREATE TABLE nflinformation (
    id INT NOT NULL AUTO_INCREMENT,
    conference TEXT NOT NULL,
    division TEXT NOT NULL,
    stadiumname TEXT NOT NULL,
    seatingcapacity INT NOT NULL,
    surfacetype TEXT NOT NULL,
    teamname TEXT NOT NULL,
    stadiumrooftype TEXT NOT NULL,
    location TEXT NOT NULL,
    dateopened INT NOT NULL,
    PRIMARY KEY (id)
);
