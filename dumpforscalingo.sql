--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2 (Debian 14.2-1.pgdg110+1)
-- Dumped by pg_dump version 14.2 (Debian 14.2-1.pgdg110+1)

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

--
-- Data for Name: accueils; Type: TABLE DATA; Schema: public; Owner: admin-1j1s-cms
--

INSERT INTO public.accueils (id, created_at, updated_at, published_at, created_by_id, updated_by_id) VALUES (1, '2022-04-12 15:43:44.068', '2022-05-05 17:43:58.861', '2022-05-03 16:40:37.886', 1, 1);


--
-- Data for Name: accueils_components; Type: TABLE DATA; Schema: public; Owner: admin-1j1s-cms
--

INSERT INTO public.accueils_components (id, entity_id, component_id, component_type, field, "order") VALUES (12, 1, 1, 'article.article', 'articles', 1);
INSERT INTO public.accueils_components (id, entity_id, component_id, component_type, field, "order") VALUES (13, 1, 2, 'article.article', 'articles', 2);
INSERT INTO public.accueils_components (id, entity_id, component_id, component_type, field, "order") VALUES (14, 1, 3, 'article.article', 'articles', 3);


--
-- Data for Name: components_article_articles; Type: TABLE DATA; Schema: public; Owner: admin-1j1s-cms
--

INSERT INTO public.components_article_articles (id, titre, description, lien) VALUES (3, 'J''ai besoin d''un accompagnement', 'Retrouvez les structures proches de chez vous pouvant vous aider dans vos démarches ou votre parcours.', 'accompagnement');
INSERT INTO public.components_article_articles (id, titre, description, lien) VALUES (2, 'J’accède à mes aides financières', ' Avec La Boussole, trouvez les aides auxquelles vous avez droit : logement, santé, mobilité, emploi, culture, etc. ', 'mes-aides');
INSERT INTO public.components_article_articles (id, titre, description, lien) VALUES (1, 'Je découvre le Contrat d''Engagement Jeune', 'Un parcours entièrement personnalisé qui peut durer de 6 à 12 mois* en fonction de mon profil, pour m''aider à définir mon projet professionnel et à trouver un emploi.', 'contrat-engagement-jeune');


--
-- Data for Name: components_article_articles_components; Type: TABLE DATA; Schema: public; Owner: admin-1j1s-cms
--

INSERT INTO public.components_article_articles_components (id, entity_id, component_id, component_type, field, "order") VALUES (2, 3, 2, 'image.image', 'image', 1);
INSERT INTO public.components_article_articles_components (id, entity_id, component_id, component_type, field, "order") VALUES (3, 2, 3, 'image.image', 'image', 1);
INSERT INTO public.components_article_articles_components (id, entity_id, component_id, component_type, field, "order") VALUES (4, 1, 1, 'image.image', 'image', 1);


--
-- Data for Name: components_image_images; Type: TABLE DATA; Schema: public; Owner: admin-1j1s-cms
--

INSERT INTO public.components_image_images (id) VALUES (2);
INSERT INTO public.components_image_images (id) VALUES (3);
INSERT INTO public.components_image_images (id) VALUES (1);


--
-- Data for Name: files; Type: TABLE DATA; Schema: public; Owner: admin-1j1s-cms
--

INSERT INTO public.files (id, name, alternative_text, caption, width, height, formats, hash, ext, mime, size, url, preview_url, provider, provider_metadata, created_at, updated_at, created_by_id, updated_by_id) VALUES (7, 'logo1j1s-france-relance.svg', 'logo1j1s-france-relance.svg', 'logo1j1s-france-relance.svg', NULL, NULL, NULL, 'logo1j1s_france_relance_af2320096c', '.svg', 'image/svg+xml', 18.42, '/uploads/logo1j1s_france_relance_af2320096c.svg', NULL, 'local', NULL, '2022-05-05 17:42:55.989', '2022-05-05 17:42:55.989', 1, 1);


--
-- Data for Name: files_related_morphs; Type: TABLE DATA; Schema: public; Owner: admin-1j1s-cms
--

INSERT INTO public.files_related_morphs (file_id, related_id, related_type, field, "order") VALUES (7, 2, 'image.image', 'image', 1);
INSERT INTO public.files_related_morphs (file_id, related_id, related_type, field, "order") VALUES (7, 3, 'image.image', 'image', 1);
INSERT INTO public.files_related_morphs (file_id, related_id, related_type, field, "order") VALUES (7, 1, 'image.image', 'image', 1);


--
-- Data for Name: strapi_migrations; Type: TABLE DATA; Schema: public; Owner: admin-1j1s-cms
--



--
-- Data for Name: strapi_webhooks; Type: TABLE DATA; Schema: public; Owner: admin-1j1s-cms
--



--
-- Data for Name: up_users; Type: TABLE DATA; Schema: public; Owner: admin-1j1s-cms
--



--
-- Data for Name: up_users_role_links; Type: TABLE DATA; Schema: public; Owner: admin-1j1s-cms
--



--
-- Name: accueils_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.accueils_components_id_seq', 14, true);


--
-- Name: accueils_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.accueils_id_seq', 1, true);


--
-- Name: admin_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.admin_permissions_id_seq', 79, true);


--
-- Name: admin_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.admin_roles_id_seq', 3, true);


--
-- Name: admin_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.admin_users_id_seq', 1, true);


--
-- Name: components_article_articles_components_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.components_article_articles_components_id_seq', 4, true);


--
-- Name: components_article_articles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.components_article_articles_id_seq', 2, true);


--
-- Name: components_image_images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.components_image_images_id_seq', 3, true);


--
-- Name: files_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.files_id_seq', 7, true);


--
-- Name: i18n_locale_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.i18n_locale_id_seq', 1, true);


--
-- Name: strapi_api_tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.strapi_api_tokens_id_seq', 1, true);


--
-- Name: strapi_core_store_settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.strapi_core_store_settings_id_seq', 20, true);


--
-- Name: strapi_database_schema_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.strapi_database_schema_id_seq', 4, true);


--
-- Name: strapi_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.strapi_migrations_id_seq', 1, false);


--
-- Name: strapi_webhooks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.strapi_webhooks_id_seq', 1, false);


--
-- Name: up_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.up_permissions_id_seq', 12, true);


--
-- Name: up_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.up_roles_id_seq', 2, true);


--
-- Name: up_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin-1j1s-cms
--

SELECT pg_catalog.setval('public.up_users_id_seq', 1, false);


--
-- PostgreSQL database dump complete
--

