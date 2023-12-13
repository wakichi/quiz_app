import os
DEBUG = False
ALLOWED_HOSTS = [
    'api.quizrunner.net',
    ]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.environ.get('DB_NAME'),
        'USER':os.environ.get('DB_USER'),
        'PASSWORD':os.environ.get('DB_PASSWORD'),
        'HOST': os.environ.get('DB_HOST'),
        'PORT': '3306'
    }
}

CORS_ORIGIN_WHITELIST = (
    "https://quizrunner.net",
    "http://quizrunner.net",
)

CORS_ALLOW_METHODS = [
'DELETE',
'GET',
'OPTIONS',
'PATCH',
'POST',
'PUT',
]