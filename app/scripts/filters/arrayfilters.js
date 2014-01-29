angular.module('arrayFilters', []).
    filter('pagination', function () {
        return function (inputArray, selectedPage, pageSize) {
            var start = (selectedPage - 1) * pageSize;
            return inputArray.slice(start, start + pageSize);
        }
    }
).
filter('trim',function(limitToFilter){
        return function(input,limit){
            if(input.length>limit){
                return limitToFilter(input,limit-3)+"...";
            }
            return input;
        }

    });