from django.shortcuts import render
from django.http import JsonResponse
from .models import Conversion

# Create your views here.

def convert(fromUnit, to, value):
    fromVal = Conversion.objects.get(unit=fromUnit)
    toVal = Conversion.objects.get(unit=to)
    value = (fromVal.number * float(value)) * toVal.number
    return value

def index(request):
    if 'from' not in request.GET or 'to' not in request.GET or 'value' not in request.GET:
        resp = {'error': "GET param 'n' is missing!  Usage; ?N=<non-negative integer>", 'success': False }

    else:
        fromVal = request.GET['from']
        toVal = request.GET['to']
        value = request.GET['value']
        resp = {}
        resp['units'] = toVal
        resp['value'] = convert(fromVal, toVal, value)
    return JsonResponse(resp)
