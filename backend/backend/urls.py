from django.urls import path, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_swagger.views import get_swagger_view
schema_view = get_swagger_view(title="News Contents API")


urlpatterns = [
    path('api/auth/', include('authentication.urls')),
    path('api/', include('diet.urls')),
    path('admin/', admin.site.urls),
    path('api/docs/', schema_view),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
