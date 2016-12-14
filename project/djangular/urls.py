from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers
from cats.views import HomepageView, CatViewSet

router = routers.DefaultRouter()
router.register('cats', CatViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^$', HomepageView.as_view()),
    url(r'^admin/', include(admin.site.urls)),
    ]
