from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'static_pages/index.html')

def portfolio(request):
    return render(request, 'static_pages/portfolio.html')

def contact(request):
    return render(request, 'static_pages/contact.html')