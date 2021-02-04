CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE news(
      id  UUID DEFAULT uuid_generate_v4() PRIMARY KEY ,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      tags json NOT NULL,
      date timestamp NOT NULL
);

INSERT INTO public.news (title, description, tags, date) VALUES ('News 1', 'Test description', '[]', now()) returning id;
INSERT INTO public.news (title, description, tags, date) VALUES ('News 5', 'Test description','[]', now()) returning id;
INSERT INTO public.news (title, description, tags, date) VALUES ('News 2', 'Test description','[]', now()) returning id;
INSERT INTO public.news (title, description, tags, date) VALUES ('News 5', 'Test description','[]', now()) returning id;
INSERT INTO public.news (title, description, tags, date) VALUES ('News 3', 'Test description','[]', now()) returning id;
