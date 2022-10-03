/*
  Warnings:

  - You are about to drop the column `jobTitle` on the `Employee` table. All the data in the column will be lost.
  - You are about to alter the column `employeeCode` on the `Employee` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `Int`.
  - You are about to alter the column `mobilePhone` on the `Employee` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `Int`.
  - You are about to alter the column `postalCode` on the `Employee` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `Int`.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Employee] ALTER COLUMN [employeeCode] INT NOT NULL;
ALTER TABLE [dbo].[Employee] ALTER COLUMN [mobilePhone] INT NOT NULL;
ALTER TABLE [dbo].[Employee] ALTER COLUMN [postalCode] INT NOT NULL;
ALTER TABLE [dbo].[Employee] DROP COLUMN [jobTitle];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
