PGDMP         /                z        	   RecipEasy    14.2    14.2 	    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16387 	   RecipEasy    DATABASE     `   CREATE DATABASE "RecipEasy" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE "RecipEasy";
                postgres    false            ?            1259    16426    lesson_register    TABLE     ?   CREATE TABLE public.lesson_register (
    name text NOT NULL,
    firstname text NOT NULL,
    email text NOT NULL,
    chef text NOT NULL,
    date text NOT NULL,
    hour text NOT NULL,
    level text NOT NULL
);
 #   DROP TABLE public.lesson_register;
       public         heap    postgres    false            ?            1259    16448    users    TABLE     ?   CREATE TABLE public.users (
    username text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    confirm_password text NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?          0    16426    lesson_register 
   TABLE DATA           Z   COPY public.lesson_register (name, firstname, email, chef, date, hour, level) FROM stdin;
    public          postgres    false    209   ?       ?          0    16448    users 
   TABLE DATA           L   COPY public.users (username, email, password, confirm_password) FROM stdin;
    public          postgres    false    210   	       k           2606    16454    users users_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (email);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210            ?   L   x????I?tO-?M????r,Mҁ????\΀?R?????????????A?????!??tJM???K-?????? ?k?      ?   <   x????I???&鹉?9z???`0??Y?????	?R?sS?Ҋ83!B?+F??? Z?     