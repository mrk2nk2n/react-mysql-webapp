CREATE DATABASE test;

CREATE TABLE `test`.`books` (
	`id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(45) NOT NULL,
    `desc` VARCHAR(255) NOT NULL,
    `cover` VARCHAR(45) NULL,
    PRIMARY KEY (`id`));
    
INSERT INTO `test`.`books` (`id`, `title`, `desc`, `cover`) VALUES ("1", "title1", "desc1", "cover1.png");
INSERT INTO `test`.`books` (`id`, `title`, `desc`, `cover`) VALUES ("2", "title2", "desc2", "cover2.png");

use test;
SELECT * FROM books;

ALTER TABLE `test`.`books` ADD COLUMN `price` INT NOT NULL AFTER `desc`;

