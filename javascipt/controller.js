var app = angular.module('myApp', []);
app.controller('controller', function($scope) {
    $scope.schools = [
        'Trường Cao đẳng Công nghệ và Thương mại Hà Nội',
        'Đại Học Công nghệ và Quản lý Hà Nội',
        'Trung Cấp Tổng Hợp Hà Nội',
        'Đại Học Thành Đông',
        'Đại Học Kinh doanh và Công nghệ Hà Nội'
    ];

    $scope.range = function(min, max, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) {
            input.push(i);
        }
        return input;
    };

    $scope.profile = {
        school: null,
        address: null,
        name: null,
        birthday: {
            day: 1,
            month: 1,
            year: 1995
        },
        fee: null,
        reason: null
    };

    $scope.printToCart = function(printSectionId) {
        var innerContents = document.getElementById(printSectionId).innerHTML;
        var popupWinindow = window.open('', '_blank', 'width=1654,height=2339,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    }
});