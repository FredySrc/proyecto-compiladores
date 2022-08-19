-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioNombre` VARCHAR(191) NOT NULL,
    `usuarioApellido` VARCHAR(191) NOT NULL,
    `usuarioCorreo` VARCHAR(191) NOT NULL,
    `usuarioContrasena` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Usuario_usuarioCorreo_key`(`usuarioCorreo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Doctor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `especialidadId` INTEGER NOT NULL,

    UNIQUE INDEX `Doctor_usuarioId_key`(`usuarioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Especialidad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `especialidadNombre` VARCHAR(191) NOT NULL,
    `especialidadImagen` LONGBLOB NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_especialidadId_fkey` FOREIGN KEY (`especialidadId`) REFERENCES `Especialidad`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
