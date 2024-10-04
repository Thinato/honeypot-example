CREATE SCHEMA IF NOT EXISTS public;

DROP TYPE IF EXISTS public."PersonGender";

CREATE TYPE public."PersonGender" AS ENUM ( 'MALE', 'FEMALE');

DROP TABLE IF EXISTS public.relation;

DROP TABLE IF EXISTS public.person;

CREATE TABLE public.person (
	"name" text NOT NULL,
	"document" text NOT NULL UNIQUE,
	birth_date timestamp(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	gender public."PersonGender" NOT NULL,
	CONSTRAINT person_pkey PRIMARY KEY ("document")
);

DROP TYPE IF EXISTS public."RelationType";

CREATE TYPE public."RelationType" AS ENUM ( 'FATHER', 'MOTHER', 'SPOUSE', 'CHILD', 'RELATIVE');

CREATE TABLE public.relation (
    "person_document" text NOT NULL,
    "related_document" text NOT NULL,
    "type" public."RelationType" NOT NULL,
    CONSTRAINT relation_pkey PRIMARY KEY ("person_document", "related_document"),
    CONSTRAINT relation_person_document_fkey FOREIGN KEY ("person_document")
        REFERENCES public.person ("document") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT relation_related_document_fkey FOREIGN KEY ("related_document")
        REFERENCES public.person ("document") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);