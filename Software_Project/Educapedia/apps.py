from django.apps import AppConfig


class EducapediaConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'Educapedia'
    def ready(self) :
        import Educapedia.signals
