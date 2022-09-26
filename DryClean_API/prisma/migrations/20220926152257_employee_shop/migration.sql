/*
  Warnings:

  - You are about to drop the column `BusinessPhone` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `Company` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `FaxNumber` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `JobTitle` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `WebPage` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `services` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[OrderLine] DROP CONSTRAINT [OrderLine_orderId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[OrderLine] DROP CONSTRAINT [OrderLine_serviceId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[orders] DROP CONSTRAINT [orders_userId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[PaymentInformation] DROP CONSTRAINT [PaymentInformation_orderId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[services] DROP CONSTRAINT [services_serviceTypeId_fkey];

-- AlterTable
ALTER TABLE [dbo].[Customer] DROP COLUMN [BusinessPhone],
[Company],
[FaxNumber],
[JobTitle],
[WebPage];

-- DropTable
DROP TABLE [dbo].[orders];

-- DropTable
DROP TABLE [dbo].[services];

-- CreateTable
CREATE TABLE [dbo].[Order] (
    [id] INT NOT NULL IDENTITY(1,1),
    [invoiceDate] DATETIME2 NOT NULL,
    [collectionTime] DATETIME2 NOT NULL,
    [onvoiceDate] DATETIME2 NOT NULL,
    [orderNumber] INT NOT NULL,
    [VAT] INT NOT NULL,
    [totalAmount] INT NOT NULL,
    [totalAmountWithVAT] INT NOT NULL,
    [userId] INT NOT NULL,
    CONSTRAINT [Order_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Service] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [picture] NVARCHAR(1000),
    [price] INT NOT NULL,
    [status] NVARCHAR(1000) NOT NULL,
    [serviceTypeId] INT NOT NULL,
    CONSTRAINT [Service_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Employee] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [surname] NVARCHAR(1000) NOT NULL,
    [employeeCode] NVARCHAR(1000) NOT NULL,
    [jobTitle] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [mobilePhone] NVARCHAR(1000) NOT NULL,
    [address] NVARCHAR(1000) NOT NULL,
    [postalCode] NVARCHAR(1000) NOT NULL,
    [city] NVARCHAR(1000) NOT NULL,
    [province] NVARCHAR(1000) NOT NULL,
    [notes] NVARCHAR(1000),
    [shopId] INT NOT NULL,
    CONSTRAINT [Employee_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Shop] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [location] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Shop_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Order] ADD CONSTRAINT [Order_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[OrderLine] ADD CONSTRAINT [OrderLine_orderId_fkey] FOREIGN KEY ([orderId]) REFERENCES [dbo].[Order]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[OrderLine] ADD CONSTRAINT [OrderLine_serviceId_fkey] FOREIGN KEY ([serviceId]) REFERENCES [dbo].[Service]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Service] ADD CONSTRAINT [Service_serviceTypeId_fkey] FOREIGN KEY ([serviceTypeId]) REFERENCES [dbo].[ServiceType]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PaymentInformation] ADD CONSTRAINT [PaymentInformation_orderId_fkey] FOREIGN KEY ([orderId]) REFERENCES [dbo].[Order]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Employee] ADD CONSTRAINT [Employee_shopId_fkey] FOREIGN KEY ([shopId]) REFERENCES [dbo].[Shop]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
