--- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema teste
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema teste
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `teste` DEFAULT CHARACTER SET utf8 ;
USE `teste` ;

-- -----------------------------------------------------
-- Table `teste`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teste`.`categoria` (
  `codigo` INT NOT NULL,
  `nome` VARCHAR(50) NOT NULL,
  `link_imagem` VARCHAR(300) NULL DEFAULT NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teste`.`produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teste`.`produto` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL DEFAULT NULL,
  `descricao` TEXT NULL DEFAULT NULL,
  `link_imagem` VARCHAR(300) NULL DEFAULT NULL,
  `Categoria_codigo` INT NOT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_Produto_Categoria_idx` (`Categoria_codigo` ASC) VISIBLE,
  CONSTRAINT `fk_Produto_Categoria`
    FOREIGN KEY (`Categoria_codigo`)
    REFERENCES `teste`.`categoria` (`codigo`))
ENGINE = InnoDB
AUTO_INCREMENT = 25
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teste`.`avaliacoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teste`.`avaliacoes` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NULL DEFAULT NULL,
  `link_imagem` VARCHAR(300) NULL DEFAULT NULL,
  `mensagem` VARCHAR(45) NULL DEFAULT NULL,
  `Produto_codigo` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_avaliacoes_Produto1_idx` (`Produto_codigo` ASC) VISIBLE,
  CONSTRAINT `fk_avaliacoes_Produto1`
    FOREIGN KEY (`Produto_codigo`)
    REFERENCES `teste`.`produto` (`codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teste`.`carrosel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teste`.`carrosel` (
  `idcarrosel` INT NOT NULL,
  `link_imagem` VARCHAR(300) NULL DEFAULT NULL,
  PRIMARY KEY (`idcarrosel`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teste`.`categoria_produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teste`.`categoria_produto` (
  `categoria_codigo` INT NOT NULL,
  `produto_codigo` INT NOT NULL,
  PRIMARY KEY (`categoria_codigo`, `produto_codigo`),
  INDEX `fk_categoria_has_produto_produto1_idx` (`produto_codigo` ASC) VISIBLE,
  INDEX `fk_categoria_has_produto_categoria1_idx` (`categoria_codigo` ASC) VISIBLE,
  CONSTRAINT `fk_categoria_has_produto_categoria1`
    FOREIGN KEY (`categoria_codigo`)
    REFERENCES `teste`.`categoria` (`codigo`),
  CONSTRAINT `fk_categoria_has_produto_produto1`
    FOREIGN KEY (`produto_codigo`)
    REFERENCES `teste`.`produto` (`codigo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teste`.`contato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teste`.`contato` (
  `idContato` INT NOT NULL,
  `nome` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefone` VARCHAR(45) NULL DEFAULT NULL,
  `mensagem` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`idContato`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teste`.`newsletter`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teste`.`newsletter` (
  `idNewsletter` INT NOT NULL,
  `nome` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idNewsletter`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
