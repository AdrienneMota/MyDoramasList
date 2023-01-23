--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: doramas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.doramas (
    id integer NOT NULL,
    name text NOT NULL,
    overview text NOT NULL,
    grade integer NOT NULL,
    createdat timestamp without time zone DEFAULT now()
);


--
-- Name: doramas_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.doramas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: doramas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.doramas_id_seq OWNED BY public.doramas.id;


--
-- Name: doramas id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doramas ALTER COLUMN id SET DEFAULT nextval('public.doramas_id_seq'::regclass);


--
-- Data for Name: doramas; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.doramas VALUES (1, 'nosso verão', 'dorama bom', 5, '2023-01-23 15:20:48.343588');
INSERT INTO public.doramas VALUES (2, 'ombro amigo', 'dorama bom', 4, '2023-01-23 15:20:48.343588');


--
-- Name: doramas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.doramas_id_seq', 2, true);


--
-- Name: doramas doramas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doramas
    ADD CONSTRAINT doramas_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

