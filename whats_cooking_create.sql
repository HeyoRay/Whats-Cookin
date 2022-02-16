SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- CREATE TABLE public.user (
-- 	"_id" serial NOT NULL,
-- 	"username" varchar NOT NULL,
-- 	"email" varchar,
-- 	"password" varchar,
-- 	CONSTRAINT "user_pk" PRIMARY KEY ("_id")
-- ) WITH (
--   OIDS=FALSE
-- );

-- Handles Foreign Keys
-- ALTER TABLE public.people ADD CONSTRAINT "people_fk0" FOREIGN KEY ("species_id") REFERENCES  public.species("_id");
-- ALTER TABLE public.people ADD CONSTRAINT "people_fk1" FOREIGN KEY ("homeworld_id") REFERENCES  public.planets("_id");

CREATE TABLE  public.post (
	"_id" serial NOT NULL,
	"name" varchar NOT NULL,
	"rating" bigint NOT NULL,
	"thumb" varchar NOT NULL,
	"notes" varchar NOT NULL,
	"imageUrl" varchar NOT NULL,
	"linkUrl" varchar NOT NULL,
	CONSTRAINT "people_in_films_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

INSERT INTO public.post VALUES (1, 'Bacon Tomato Soup', 4, 'n', 'Awesome', 'https://www.simplyrecipes.com/thmb/uioMJ2BUO0mThSdC6VVWvMNXY3Q=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2009__08__tomato-white-bean-bacon-soup-horiz-a-2000-ba364e751c664086a08d68f7e3077ce5.jpg', 'https://www.w3schools.com/cssref/css_colors.asp')

-- CREATE TABLE  public.films (
-- 	"_id" serial NOT NULL,
-- 	"title" varchar NOT NULL,
-- 	"episode_id" integer NOT NULL,
-- 	"opening_crawl" varchar NOT NULL,
-- 	"director" varchar NOT NULL,
-- 	"producer" varchar NOT NULL,
-- 	"release_date" DATE NOT NULL,
-- 	CONSTRAINT "films_pk" PRIMARY KEY ("_id")
-- ) WITH (
--   OIDS=FALSE
-- );






-- CREATE TABLE  public.planets (
-- 	"_id" serial NOT NULL,
-- 	"name" varchar,
-- 	"rotation_period" integer,
-- 	"orbital_period" integer,
-- 	"diameter" integer,
-- 	"climate" varchar,
-- 	"gravity" varchar,
-- 	"terrain" varchar,
-- 	"surface_water" varchar,
-- 	"population" bigint,
-- 	CONSTRAINT "planets_pk" PRIMARY KEY ("_id")
-- ) WITH (
--   OIDS=FALSE
-- );

