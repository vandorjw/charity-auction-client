# ------------------------------------------------------------------------------
# factories constants
# ------------------------------------------------------------------------------

BID_INCREASES = ('5', '10', '15')
BID_VALUES = ('20', '25', '30', '35', '40')

THEMES = ['travel & tourism', 'gift basket', 'home decor', 'animals']

IMAGES = [
    'https://static.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
    'https://static.pexels.com/photos/173295/pexels-photo-173295.jpeg',
    'https://www.pexels.com/photo/fruit-slice-orange-food-77071/',
]

NUM_OF_AUCTION_ITEMS = 5  # number of auction items to create
NUM_OF_AUCTION_BIDS = 5  # number of auction bids to create
NUM_OF_AUCTION_EVENTS = 5  # number of auction events to create


# ------------------------------------------------------------------------------
# settings constants
# ------------------------------------------------------------------------------

DEBUG = True

SECRET_KEY = 'thisisthesecretkey'

ALLOWED_HOSTS = ['*']

INSTALLED_APPS = (
    'django.contrib.auth',  # drf req
    'django.contrib.contenttypes',  # drf req
)

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    )
}
