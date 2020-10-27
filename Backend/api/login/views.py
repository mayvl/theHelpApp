from rest_framework import permissions, generics
from login.serializer import NewUserSerializer
from .models import CustomUser


class NewUserCreateAPIView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = NewUserSerializer
    permission_class = [permissions.AllowAny]
