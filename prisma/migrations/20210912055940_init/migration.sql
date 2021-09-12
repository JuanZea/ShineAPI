-- CreateTable
CREATE TABLE `Film` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `referenceUrl` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191),
    `trailer` VARCHAR(191),
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `director` VARCHAR(191),
    `year` VARCHAR(191),
    `duration` VARCHAR(191),
    `stars` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
