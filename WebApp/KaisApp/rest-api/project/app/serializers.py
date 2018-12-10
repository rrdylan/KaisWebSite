from rest_framework import serializers
from .models import Niv_autorisation, Type_prestation, User, Fournisseur, Prestation, Produit, CustomView

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class FournisseurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fournisseur
        fields = '__all__'

class Niv_autorisationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Niv_autorisation
        fields = '__all__'

class Type_prestationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type_prestation
        fields = '__all__'

class PrestationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestation
        fields = '__all__'

class ProduitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produit
        fields = '__all__'
