CREATE TABLE users (
    "id" SERIAL PRIMARY KEY,
    "password" VARCHAR(320) NOT NULL,
    "emial" VARCHAR(20),
    "Age" VARCHAR(20),
    "Gender" VARCHAR(63) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "deleted_at" TIMESTAMPTZ
);