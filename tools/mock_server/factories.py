"""
This file contains methods that are used by our mock_server.py to generate
fake item, bid and event data.

http://faker.readthedocs.io/en/master/index.html

This section is split into the following sections:

1.  auction items
2.  auction bids
3.  auction events
"""

from faker import Factory
import constants as CONST

fake = Factory.create()

# ------------------------------------------------------------------------------
# 1.  auction items
# ------------------------------------------------------------------------------


def create_fake_auction_item(fake):
    """
    creates a single instance of a fake auction item
    """

    number_of_paragraphs = fake.random_number(1)

    item = {
        "id": fake.random_number(),
        "name": fake.word(),
        "description": fake.paragraphs(number_of_paragraphs),
        "seller_name": fake.name(),
        "seller_email": fake.email(),
        "retail_value": fake.pydecimal(left_digits=2, right_digits=2, positive=True),
        "minimum_bid": fake.random_int(min=0, max=50),
        "minimum_increase": fake.random_sample(elements=CONST.BID_INCREASES, length=1),
        "theme": fake.random_sample(elements=CONST.THEMES, length=1),
        "image": fake.random_sample(elements=CONST.IMAGES, length=1),
        "event": 'charity event'
    }

    return item


def create_fake_auction_items(fake, num_of_items):
    """
    creates a user specified number of items.  Thus, if the user sets num_of_items to 5,
    This method is going to create 5 auction item.
    """

    auction_items = []

    for i in range(num_of_items):
        auction_items.append(create_fake_auction_item(fake))

    return auction_items


# ------------------------------------------------------------------------------
# 2.  auction bids
# ------------------------------------------------------------------------------

def create_fake_auction_bid(fake):
    """
    creates a single instance of a fake auction bid
    """

    bid = {
        "id": fake.random_number(),
        "purchaser": fake.name(),
        "date": fake.date_time_this_month(before_now=True, after_now=False, tzinfo=None),
        "value": fake.random_sample_unique(elements=CONST.BID_VALUES, length=1),
        "item": fake.random_number(),
    }

    return bid


def create_fake_auction_bids(fake, num_of_bids):
    """
    creates a user specified number of auction bids.  Thus, if the user sets num_of_bids to 5,
    This method is going to create 5 auction bids.
    """

    auction_bids = []

    for i in range(num_of_bids):
        auction_bids.append(create_fake_auction_bid(fake))

    return auction_bids

# ------------------------------------------------------------------------------
# 3.  auction events
# ------------------------------------------------------------------------------


def create_fake_auction_event(fake):
    """
    creates a single instance of a fake auction bid
    """
    pass


def create_fake_auction_events(fake, num_of_events):
    """
    creates a single instance of a fake auction bid
    """
    pass
