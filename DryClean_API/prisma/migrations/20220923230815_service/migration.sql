BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000),
    [surname] NVARCHAR(1000) NOT NULL,
    [phoneNumber] INT NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [roleId] INT NOT NULL CONSTRAINT [User_roleId_df] DEFAULT 1,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [User_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [authConfirmToken] INT,
    [isVarrified] BIT CONSTRAINT [User_isVarrified_df] DEFAULT 0,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Role] (
    [id] INT NOT NULL IDENTITY(1,1),
    [description] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Role_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Customer] (
    [id] INT NOT NULL IDENTITY(1,1),
    [Name] NVARCHAR(1000) NOT NULL,
    [Surname] NVARCHAR(1000) NOT NULL,
    [Company] NVARCHAR(1000) NOT NULL,
    [WebPage] NVARCHAR(1000) NOT NULL,
    [JobTitle] NVARCHAR(1000) NOT NULL,
    [Email] NVARCHAR(1000) NOT NULL,
    [BusinessPhone] NVARCHAR(1000) NOT NULL,
    [MobilePhone] NVARCHAR(1000) NOT NULL,
    [FaxNumber] NVARCHAR(1000) NOT NULL,
    [Address] NVARCHAR(1000) NOT NULL,
    [PostalCode] INT NOT NULL,
    [City] NVARCHAR(1000) NOT NULL,
    [Province] NVARCHAR(1000) NOT NULL,
    [Notes] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Customer_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[orders] (
    [id] INT NOT NULL IDENTITY(1,1),
    [invoiceDate] DATETIME2 NOT NULL,
    [collectionTime] DATETIME2 NOT NULL,
    [onvoiceDate] DATETIME2 NOT NULL,
    [orderNumber] INT NOT NULL,
    [VAT] INT NOT NULL,
    [totalAmount] INT NOT NULL,
    [totalAmountWithVAT] INT NOT NULL,
    [userId] INT NOT NULL,
    CONSTRAINT [orders_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[OrderLine] (
    [id] INT NOT NULL IDENTITY(1,1),
    [orderId] INT NOT NULL,
    [serviceId] INT NOT NULL,
    CONSTRAINT [OrderLine_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[services] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [picture] NVARCHAR(1000),
    [price] INT NOT NULL,
    [status] NVARCHAR(1000) NOT NULL,
    [serviceTypeId] INT NOT NULL,
    CONSTRAINT [services_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[PaymentInformation] (
    [id] INT NOT NULL IDENTITY(1,1),
    [paymentDate] DATETIME2 NOT NULL,
    [paymentType] NVARCHAR(1000) NOT NULL,
    [paymentOrderNotes] NVARCHAR(1000),
    [orderId] INT NOT NULL,
    CONSTRAINT [PaymentInformation_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [PaymentInformation_orderId_key] UNIQUE NONCLUSTERED ([orderId])
);

-- CreateTable
CREATE TABLE [dbo].[ServiceType] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [ServiceType_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[User] ADD CONSTRAINT [User_roleId_fkey] FOREIGN KEY ([roleId]) REFERENCES [dbo].[Role]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[orders] ADD CONSTRAINT [orders_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[OrderLine] ADD CONSTRAINT [OrderLine_orderId_fkey] FOREIGN KEY ([orderId]) REFERENCES [dbo].[orders]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[OrderLine] ADD CONSTRAINT [OrderLine_serviceId_fkey] FOREIGN KEY ([serviceId]) REFERENCES [dbo].[services]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[services] ADD CONSTRAINT [services_serviceTypeId_fkey] FOREIGN KEY ([serviceTypeId]) REFERENCES [dbo].[ServiceType]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PaymentInformation] ADD CONSTRAINT [PaymentInformation_orderId_fkey] FOREIGN KEY ([orderId]) REFERENCES [dbo].[orders]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
