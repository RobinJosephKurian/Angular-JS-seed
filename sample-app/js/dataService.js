app.factory('DataService', function ($filter, $http, $q, API_PAGES) {
    /**
     * To read the Api data from JSON
     * @param {*} pageno 
     */
    var _getDataFromJSON = function (pageNo) {
        return $http.get('API_JSON/CONTENTLISTINGPAGE-PAGE'+pageNo+'.json');
    };

    /**
     * To get w.r.t the pageno
     * @param {*} pageNo 
     */
    var _getDataByPage = function (pageNo, successCB, errorCB) {
        // var retVal = {};
        var response = _getDataFromJSON(pageNo);
        response.then( function (response) {
            successCB(response.data);
       }, errorCB);
    }; 

    /**
     * Dummy return object
     */
    var _getReturnObject = function () {
        return {
            "page": {
                "title": "Romantic Comedy",
                "total-content-items": "54",
                "page-num-requested": "2",
                "page-size-requested": "20",
                "page-size-returned": "0",
                "content-items": {
                    "content": []
                }
            }
        }
    };

    /**
     * To return integer as string
     * @param {*} value 
     */
    var _getStringValue = function(value) {
        return value + "";
    }

    /**
     * To call all the async functions together
     */
    var _allApiData = function () {
        var promises = [];
        for(var i = 1; i <= API_PAGES; i++) {
            promises.push(_getDataFromJSON(i));
        }

        return promises;
    };

    /**
     * To return data w.r.t page and search key
     * @param {*} searchData 
     * @param {*} pageNo 
     */
    var _getDataBySearch = function (searchData, pageNo, successCB, errorCB) {
        var requestData  = '20';
        var retData      = [];
        var beginIndex   = parseInt(requestData) * (pageNo - 1);

        $q.all(_allApiData()).then(function (responses) {
            var combinedData = []
            for(var i = 0; i < responses.length; i++ ) {
                combinedData = combinedData.concat(responses[i].data.page['content-items'].content);
            }
            
            // var combinedData = _getCombineAllData();
            var searchresult = $filter('filter')(combinedData, {'name': searchData});

            if(searchresult.length > beginIndex) {
                retData = $filter('limitTo')(searchresult, parseInt(requestData), beginIndex);
            }

            var retVal = _getReturnObject();
            retVal.page["total-content-items"] = _getStringValue(searchresult.length);
            retVal.page["page-num-requested"]  = pageNo;
            retVal.page["page-size-requested"] = requestData;
            retVal.page["page-size-returned"]  = _getStringValue(retData.length);
            retVal.page["content-items"].content = retData;

            successCB(retVal);

        }, function (error) {
            errorCB(error);
        });
    };

    return {
        getDataByPage: _getDataByPage,
        getDataBySearch: _getDataBySearch
    }

});