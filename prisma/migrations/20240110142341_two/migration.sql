-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "subscription" TEXT,
    "status" TEXT,
    "token" TEXT,
    "avatarurl" TEXT,
    "verify" BOOLEAN DEFAULT false,
    "verificationtoken" TEXT,
    "createdat" DATE DEFAULT LOCALTIMESTAMP,
    "updateat" DATE,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" SERIAL NOT NULL,
    "n" INTEGER DEFAULT 0,
    "form" TEXT DEFAULT 'Введите значение',
    "number" INTEGER DEFAULT 0,
    "fio" TEXT NOT NULL,
    "edrpu" INTEGER DEFAULT 0,
    "passport" TEXT DEFAULT 'Введите значение',
    "birthday" TEXT DEFAULT 'Введите значение',
    "registrationplase" TEXT DEFAULT 'Введите значение',
    "adress" TEXT DEFAULT 'Введите значение',
    "phone" TEXT DEFAULT 'Введите значение',
    "email" TEXT NOT NULL,
    "membershipfee" DECIMAL(20,2) DEFAULT 0,
    "share" DECIMAL(20,2) DEFAULT 0,
    "payshare" DECIMAL(20,2) DEFAULT 0,
    "avatarUrl" TEXT DEFAULT 'Введите значение',
    "createdAt" DATE DEFAULT LOCALTIMESTAMP,
    "updateAt" DATE,
    "ownerid" INTEGER NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_password_key" ON "users"("password");

-- CreateIndex
CREATE UNIQUE INDEX "users_token_key" ON "users"("token");

-- CreateIndex
CREATE UNIQUE INDEX "users_avatarurl_key" ON "users"("avatarurl");

-- CreateIndex
CREATE UNIQUE INDEX "users_verificationtoken_key" ON "users"("verificationtoken");

-- CreateIndex
CREATE UNIQUE INDEX "contacts_email_key" ON "contacts"("email");

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_fkey_ownerid" FOREIGN KEY ("ownerid") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
