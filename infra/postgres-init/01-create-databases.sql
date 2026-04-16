DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'iam_db') THEN
    CREATE DATABASE iam_db;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'regions_db') THEN
    CREATE DATABASE regions_db;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'cms_db') THEN
    CREATE DATABASE cms_db;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'jewelry_db') THEN
    CREATE DATABASE jewelry_db;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'stones_db') THEN
    CREATE DATABASE stones_db;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'inventory_db') THEN
    CREATE DATABASE inventory_db;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'appointments_db') THEN
    CREATE DATABASE appointments_db;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'concierge_db') THEN
    CREATE DATABASE concierge_db;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'orders_db') THEN
    CREATE DATABASE orders_db;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'production_db') THEN
    CREATE DATABASE production_db;
  END IF;
END $$;

