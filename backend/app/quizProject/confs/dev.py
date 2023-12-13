import os
DEBUG = True
ALLOWED_HOSTS = ["*"]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'django-db',
        'USER':'django',
        'PASSWORD':'django',
        'HOST': 'db',
        'PORT': '3306'
    }
}

CORS_ORIGIN_WHITELIST = (
    'http://localhost',
    'http://localhost:3000',
    'http://localhost:8080',
    'http://172.0.0.1:3000',
    "http://127.0.0.1:8080",
    "http://172.18.0.4:3000"
)

CORS_ALLOW_METHODS = [
'DELETE',
'GET',
'OPTIONS',
'PATCH',
'POST',
'PUT',
]