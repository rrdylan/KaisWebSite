from django.conf.urls import url
from rest_framework import routers
from project.app.views import UserViewSet, FournisseurViewSet, Niv_autorisationViewSet, Type_prestationViewSet, PrestationViewSet, ProduitViewSet, CustomView
from rest_framework_swagger.views import get_swagger_view

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'fournisseurs', FournisseurViewSet)
router.register(r'autorisations', Niv_autorisationViewSet)
router.register(r'type_prestations', Type_prestationViewSet)
router.register(r'prestations', PrestationViewSet)
router.register(r'produits', ProduitViewSet)

schema_view = get_swagger_view(title='Pastebin API')

urlpatterns = [
    url(r'customview', CustomView.as_view()),
    url(r'^docs/', schema_view),
]

urlpatterns += router.urls
