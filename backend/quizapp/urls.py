from rest_framework import routers
from .views import QuizViewSet

router = routers.DefaultRouter()
router.register(r'quiz', QuizViewSet)
urlpatterns = router.urls