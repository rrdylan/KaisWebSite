# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

from rest_framework.views import APIView, Response

# Create your models here.
class Niv_autorisation(models.Model):
    libelle = models.CharField(max_length=50)
    code = models.IntegerField()

    class Meta:
        verbose_name = "Autorisation"
        verbose_name_plural = "Autorisations"

    def __unicode__(self):
        return self.libelle

class Type_prestation(models.Model):
    libelle = models.CharField(max_length=50)
    code = models.IntegerField(unique=True)

    class Meta:
        verbose_name = "Prestation"
        verbose_name_plural = "Prestations"

    def __unicode__(self):
        return self.libelle

class User(models.Model):
    nom = models.CharField(max_length=50)
    prenom = models.CharField(max_length=50)
    telephone = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    login = models.CharField(max_length=50, null=True)
    mdp = models.CharField(max_length=50, null=True)
    niv_autorisation = models.ForeignKey(Niv_autorisation, on_delete=models.DO_NOTHING, default='4')

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

    def __unicode__(self):
        '%s %s' % (self.first_name, self.last_name)
        return

class Fournisseur(models.Model):
    nom = models.CharField(max_length=50)
    numero = models.CharField(max_length=50)
    adresse = models.CharField(max_length=50)
    telephone = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)

    class Meta:
        verbose_name = "Fournisseur"
        verbose_name_plural = "Fournisseurs"

    def __unicode__(self):
        return self.nom

class Prestation(models.Model):
    libelle = models.CharField(max_length=50)
    prix = models.FloatField()
    type = models.ForeignKey(Type_prestation, on_delete=models.DO_NOTHING, null=True)

    class Meta:
        verbose_name = "Prestation"
        verbose_name_plural = "Prestations"

    def __unicode__(self):
        return self.libelle

class Produit(models.Model):
    libelle = models.CharField(max_length=50)
    prix = models.FloatField()
    fournisseur = models.ForeignKey(Fournisseur, on_delete=models.DO_NOTHING, null=True)

    class Meta:
        verbose_name = "Produit"
        verbose_name_plural = "Produits"

    def __unicode__(self):
        return self.libelle

class CustomView(APIView):
    def get(self, request, format=None):
        return Response("Some Get Response")

    def post(self, request, format=None):
        return Response("Some Post Response")
