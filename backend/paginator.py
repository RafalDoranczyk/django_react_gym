from rest_framework import pagination
from rest_framework.response import Response


class CustomPagination(pagination.PageNumberPagination):
    page_size = 10

    def get_paginated_response(self, data):
        results = self.paginate_queryset(data, self.request)
        return Response({
            'count': self.page.paginator.count,
            'pages': self.page.paginator.num_pages,
            'results': results
        })