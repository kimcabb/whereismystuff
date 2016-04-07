"use strict";

(function(){
  angular
  .module("createItem")
  .factory("ItemFactory", [
    "$resource",
    ResourceFactoryFunction
  ]);

  function ResourceFactoryFunction($resource) {
    return $resource("http://localhost:3000/items/:id.json")
  };
}());
