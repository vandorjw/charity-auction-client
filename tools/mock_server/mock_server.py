#!/usr/bin/env python

import constants as CONST

"""
This is a light weight django server designed to mock the GALE Silent Auction
production server.  We have split this file into the following sections:

1.  settings.py
2.  views.py
3.  urls.py
4.  manage.py

If you are looking for the functions that are used to create fake data, these are
located in factories.py.
"""

# ------------------------------------------------------------------------------
# settings.py
# ------------------------------------------------------------------------------

from django.conf import settings  # noqa

settings.configure(
    DEBUG=CONST.DEBUG,
    SECRET_KEY=CONST.SECRET_KEY,
    ALLOWED_HOSTS=CONST.ALLOWED_HOSTS,
    ROOT_URLCONF=__name__,
    INSTALLED_APPS=CONST.INSTALLED_APPS,
    REST_FRAMEWORK=CONST.REST_FRAMEWORK,
    MIDDLEWARE_CLASSES=(
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',
    ),
)

# ------------------------------------------------------------------------------
# views.py
# ------------------------------------------------------------------------------

from rest_framework.views import APIView  # noqa
from rest_framework.response import Response  # noqa

from faker import Factory  # noqa
from factories import create_fake_auction_items, create_fake_auction_bids  # noqa

fake = Factory.create()


class ItemsList(APIView):
    """List all Items or create a new Item"""

    def get(self, request, format=None):
        data = create_fake_auction_items(fake, CONST.NUM_OF_AUCTION_ITEMS)

        return Response(data)


class ItemsId(APIView):
    """Retrieve, update or delete an Items instance"""

    def get(self, request, format=None):
        data = {'success': True}

        return Response(data)


class BidsList(APIView):
    """List all Bids or create a new Bid"""

    def get(self, request, format=None):
        data = create_fake_auction_bids(fake, CONST.NUM_OF_AUCTION_BIDS)

        return Response(data)


class BidsId(APIView):
    """Retrieve, update or delete an Bids instance"""

    def get(self, request, format=None):
        data = {'success': True}

        return Response(data)


class EventsList(APIView):
    """List all Events or create a new Event"""

    def get(self, request, format=None):
        data = {'success': True}

        return Response(data)


class EventsId(APIView):
    """Retrieve, update or delete an Events instance"""

    def get(self, request, format=None):
        data = {'success': True}

        return Response(data)


# ------------------------------------------------------------------------------
# urls.py
# ------------------------------------------------------------------------------

from django.conf.urls import url  # noqa

urlpatterns = [
    # http://localhost:8000/items/list/
    url(
        regex=r'^items/list/$',
        view=ItemsList.as_view()),

    # http://localhost:8000/items/5/
    url(
        regex=r'^items/(?P<item_id>[-\d]+)/$',
        view=ItemsId.as_view()),

    # http://localhost:8000/bids/list/
    url(
        regex=r'^bids/list/$',
        view=BidsList.as_view()),

    # http://localhost:8000/bids/3/
    url(
        regex=r'^bids/(?P<bid_id>[-\d]+)/$',
        view=BidsId.as_view()),

    # http://localhost:8000/events/list/
    url(
        regex=r'^events/list/$',
        view=EventsList.as_view()),

    # http://localhost:8000/events/6/
    url(
        regex=r'^events/(?P<event_id>[0-9]{4})/$',
        view=EventsId.as_view()),
]


# ------------------------------------------------------------------------------
# manage.py
# ------------------------------------------------------------------------------

import sys  # noqa
from django.core.wsgi import get_wsgi_application  # noqa

application = get_wsgi_application()

if __name__ == "__main__":
    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
