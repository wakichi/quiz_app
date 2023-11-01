
from rest_framework import viewsets
from .models import Quiz
from .serializer import QuizSerializer

# Create your views here.
class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    