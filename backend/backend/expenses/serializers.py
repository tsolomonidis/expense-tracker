from rest_framework import serializers
from .models import Expense

class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['id', 'title', 'amount', 'date']

    def create(self, validated_data):
       
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)