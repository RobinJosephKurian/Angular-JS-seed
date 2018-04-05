app.factory('DataService', function ($filter) {
    /**
     * Page 1 JSON
     */
    var data1 = {
        "page": {
            "title": "Romantic Comedy",
            "total-content-items": "54",
            "page-num-requested": "1",
            "page-size-requested": "20",
            "page-size-returned": "20",
            "content-items": {
                "content": [
                    {
                        "name": "The Birds",
                        "poster-image": "poster1.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster2.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "poster3.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "poster2.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster1.jpg"
                    },
                    {
                        "name": "The Birds",
                        "poster-image": "poster3.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster3.jpg"
                    },
                    {
                        "name": "The Birds",
                        "poster-image": "poster2.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "poster1.jpg"
                    },
                    {
                        "name": "The Birds",
                        "poster-image": "poster1.jpg"
                    },
                    {
                        "name": "The Birds",
                        "poster-image": "poster1.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster2.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "poster3.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "poster2.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster1.jpg"
                    },
                    {
                        "name": "The Birds",
                        "poster-image": "poster3.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster3.jpg"
                    },
                    {
                        "name": "The Birds",
                        "poster-image": "poster2.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "poster1.jpg"
                    },
                    {
                        "name": "The Birds",
                        "poster-image": "poster1.jpg"
                    }
                ]
            }
        }
    };

    /**
     * Page 2 JSON
     */
    var data2 = {
        "page": {
            "title": "Romantic Comedy",
            "total-content-items": "54",
            "page-num-requested": "2",
            "page-size-requested": "20",
            "page-size-returned": "20",
            "content-items": {
                "content": [
                    {
                        "name": "Rear Window",
                        "poster-image": "poster5.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "poster6.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "poster5.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster4.jpg"
                    },
                    {
                        "name": "The Birds",
                        "poster-image": "poster6.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster6.jpg"
                    },
                    {
                        "name": "The Birds",
                        "poster-image": "poster5.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "poster4.jpg"
                    },
                    {
                        "name": "The Birds",
                        "poster-image": "poster4.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster5.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster5.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "poster6.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "poster5.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster4.jpg"
                    },
                    {
                        "name": "The Birds",
                        "poster-image": "poster6.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster6.jpg"
                    },
                    {
                        "name": "The Birds",
                        "poster-image": "poster5.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "poster4.jpg"
                    },
                    {
                        "name": "The Birds",
                        "poster-image": "poster4.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster5.jpg"
                    }
                ]
            }
        }
    };

    /**
     * Page 3 JSON
     */
    var data3 = {
        "page": {
            "title": "Romantic Comedy",
            "total-content-items": "54",
            "page-num-requested": "3",
            "page-size-requested": "20",
            "page-size-returned": "14",
            "content-items": {
                "content": [
                    {
                        "name": "Family Pot",
                        "poster-image": "poster9.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "poster8.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster7.jpg"
                    },
                    {
                        "name": "The Birds",
                        "poster-image": "poster9.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster9.jpg"
                    },
                    {
                        "name": "The Birds",
                        "poster-image": "poster8.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "poster7.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "poster9.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "poster8.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster7.jpg"
                    },
                    {
                        "name": "The Birds with an Extra Long Title",
                        "poster-image": "poster9.jpg"
                    },
                    {
                        "name": "Rear Window",
                        "poster-image": "poster9.jpg"
                    },
                    {
                        "name": "The Birds",
                        "poster-image": "poster8.jpg"
                    },
                    {
                        "name": "Family Pot",
                        "poster-image": "posterthatismissing.jpg"
                    }
                ]
            }
        }
    };

    /**
     * To get w.r.t the pageno
     * @param {*} pageNo 
     */
    var _getDataByPage = function (pageNo) {
        var retVal = {};
        switch(pageNo) {
            case 1: retVal = data1; break;
            case 2: retVal = data2; break;
            case 3: retVal = data3; break;
            default : retVal = _getReturnObject();
        }
        return retVal;
    }; 

    /**
     * To combine all JSON data
     */
    var _getCombineAllData = function () {
        var tempArr = null;
        var combineData = angular.copy(data1.page['content-items'].content);
        var combineData = combineData.concat(tempArr = angular.copy(data2.page['content-items'].content));
        var combineData = combineData.concat(tempArr = angular.copy(data3.page['content-items'].content));
        tempArr = null;

        return combineData;
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
     * To return data w.r.t page and search key
     * @param {*} searchData 
     * @param {*} pageNo 
     */
    var _getDataBySearch = function (searchData, pageNo) {
        var requestData  = '20';
        var retData      = [];
        var beginIndex   = parseInt(requestData) * (pageNo - 1);
        var combinedData = _getCombineAllData();
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

        return retVal;
    };

    return {
        getDataByPage: _getDataByPage,
        getDataBySearch: _getDataBySearch
    }

});