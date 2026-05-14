CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    district TEXT NOT NULL,
    city TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);