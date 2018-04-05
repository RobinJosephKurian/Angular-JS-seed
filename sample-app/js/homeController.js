/**
 * Controller for Listing videos
 */

app.controller("HomeController", ["$scope", "$filter", "snackbar", "DataService", function($scope, $filter, snackbar, DataService) {
    $scope.Title         = 'Sample Video App';
    $scope.DisplayData   = [];
    $scope.RemainingData = [];
    $scope.RequestPage   = 1;
    $scope.CHUNK_SIZE    = 3;
    $scope.ChunkedData   = [];
    $scope.MoreData      = true;


    /**
     * Get the data as a grid
    */
    var _chunk = function(arr, size) {
        var newArr = [];
        for (var i = 0; i < arr.length; i += size) {
            newArr.push(arr.slice(i, i + size));
        }
        return newArr;
    };


    /**
     * To display on muliple of chunk size in a page
     * @param {data} data 
     */
    var _getDataMultiple = function (data) {
        var displayLength = 0;
		if(data.length >= 20) {
			displayLength = Math.floor(data.length / $scope.CHUNK_SIZE) * $scope.CHUNK_SIZE;
		} 
		else {
			displayLength = data.length;
		}
        var remainingLength = data.length - displayLength;

        return {
            displayData : $filter('limitTo')(data, parseInt(displayLength), 0),
            remainingData : $filter('limitTo')(data, parseInt(remainingLength), displayLength)
        }
    };

    /**
     * onClick handle for features not implemented
     */
    $scope.showFeatureInProgress = function () {
        snackbar.create("Feature not implemented!");
    };

    /** 
     * To load data once the scroll bar reaches 80% of the screen 
    */
    $scope.loadMore = function () {
        if($scope.MoreData) {    
            $scope.RequestPage++;
            var response         = angular.copy(DataService.getDataByPage($scope.RequestPage));
            response.page["content-items"].content = $scope.RemainingData.concat(response.page["content-items"].content);
            var filteredData     = _getDataMultiple(response.page["content-items"].content);
            $scope.DisplayData   = filteredData.displayData;
            $scope.RemainingData = filteredData.remainingData;
            $scope.ChunkedData   = $scope.ChunkedData.concat(_chunk($scope.DisplayData, $scope.CHUNK_SIZE));

            if(response.page["content-items"].content.length < 20) {
                $scope.MoreData = false;
            }
        }
    };

    /** 
     * function for initializing the view
    */
    $scope.init = function () {
        $scope.RequestPage = 1;
        var response         = angular.copy(DataService.getDataByPage($scope.RequestPage));
        var filteredData     = _getDataMultiple(response.page["content-items"].content);

        $scope.Title         = response.page.title;
        $scope.DisplayData   = filteredData.displayData;
        $scope.RemainingData = filteredData.remainingData;
        $scope.ChunkedData = _chunk($scope.DisplayData, $scope.CHUNK_SIZE);
    };
}]);