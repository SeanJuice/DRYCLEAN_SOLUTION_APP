/*
  Warnings:

  - You are about to alter the column `MobilePhone` on the `Customer` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `Int`.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Customer] ALTER COLUMN [MobilePhone] INT NOT NULL;
ALTER TABLE [dbo].[Customer] ALTER COLUMN [Notes] NVARCHAR(1000) NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
