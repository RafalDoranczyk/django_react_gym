from rest_framework.serializers import ValidationError


def raise_validation_error(msg):
    raise ValidationError({'message': msg})
