# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from rest_framework import viewsets
from .models import Niv_autorisation, Type_prestation, User, Fournisseur, Prestation, Produit, CustomView
from .serializers import UserSerializer, FournisseurSerializer, Niv_autorisationSerializer, Type_prestationSerializer, PrestationSerializer, ProduitSerializer
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class FournisseurViewSet(viewsets.ModelViewSet):
    queryset = Fournisseur.objects.all()
    serializer_class = FournisseurSerializer

class Niv_autorisationViewSet(viewsets.ModelViewSet):
    queryset = Niv_autorisation.objects.all()
    serializer_class = Niv_autorisationSerializer

class Type_prestationViewSet(viewsets.ModelViewSet):
    queryset = Type_prestation.objects.all()
    serializer_class = Type_prestationSerializer

class PrestationViewSet(viewsets.ModelViewSet):
    queryset = Prestation.objects.all()
    serializer_class = PrestationSerializer

class ProduitViewSet(viewsets.ModelViewSet):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer
