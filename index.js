var $model= require('some-model')

var ModelCollection= require('./lib/ModelCollection')
var ModelCollectionService= require('./lib/ModelCollectionService')

/**
 * Сервис моделирования коллекций
 *
 * @name $model.collection
 */
var $collection= module.exports= require('some-service')(
    new ModelCollectionService($model, '$model.collection', {}, ModelCollection)
)
