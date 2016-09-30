*******************************
GALE Silent Auction Mock Server
*******************************

Welcome to the GALE silent auction mock server.  This allows you to simulate requests and responses for front end development while the backend is being built out.

.. contents::
   :depth: 3
   :local:

MOCK SERVER MODULES
===================

constants
---------

App level constants.  We have extracted all constants from the mock_server app and moved them here.

factories
---------

All functions that generate test data go here.

mock_server.py
--------------

This is the entire django app in one file.  Super light.  Super Sexy.

TECHNOLOGIES USED
=================

- Django Rest Framework 1.10
- Faker 0.7.3
- Django 1.10

FOR POSTERITY
=============

This is a light weight django server.  We have added ``Django Rest Framework`` because it keeps the boilerplate down which keeps the file light, consistent with our production server and easier to work with.

We are also using ``Faker`` to generate fake data.  This allows the front end to create new data quickly and efficiently.  Not Familiar with ``Faker``?  No problem, this is the equivalent of something like ``chance`` for JavaScript

Why do you see a bunch of ``# noqa`` comments?  These tell our linters to not worry about the fact that our imports are not all at the top of module.

