'use strict';

angular.module('basics').controller('InitESCtrl', ['$scope', 'esServ', 'jsonDataServ', function ($scope, esServ, jsonDataServ) {

        /*Fill ES index with conservatories data*/
        var saveData = function (data) {
            var request = 'conservatory_index/conservatories/';

            esServ.saveData(request, data, {
                then: function (response) {
                    console.log("OK");
                },
                catch : function () {

                }
            });
        };

        $scope.saveDataInIndex = function () {
            jsonDataServ.loadDataFromFile('assets/json/les-conservatoires-et-ecoles-de-musique-en-ile-de-france.json', {
                then: function (response) {
                    var conservatoriesToSave = response.data;
                    for (var i = 0; i < conservatoriesToSave.length; i++) {
                        saveData(conservatoriesToSave[i]);
                    }
                },
                catch : function () {}
            });
        };

    }]);