BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[AuditTrail] (
    [id] INT NOT NULL IDENTITY(1,1),
    [Date] DATETIME2 NOT NULL,
    [Table] NVARCHAR(1000) NOT NULL,
    [Operation] NVARCHAR(1000) NOT NULL,
    [userId] INT NOT NULL,
    CONSTRAINT [AuditTrail_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[AuditTrail] ADD CONSTRAINT [AuditTrail_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
