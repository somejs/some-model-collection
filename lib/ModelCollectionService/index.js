
/**
 * Конструктор сервиса моделирования коллекций.
 *
 * @class
 *
 * @namespace
 * @property {Function} $model
 * @property {String} name
 * @property {Object} properties
 * @property {Function} ModelCollection
 *
 * @requires events.EventEmitter
 *
 * @param {String} name
 * @param {Object} properties
 * @param {Function} model
 * @param {ModelCollectionService} parent
 * @returns {ModelCollectionService}
 */
var ModelCollectionService= module.exports= function ModelCollectionService($model, name, properties, ModelCollection, parent) {

    this.name= name

    $model= $model(name, properties || {})

    this.ModelCollection= function (items) {
        if (!(items instanceof Array)) {
            items= Array.prototype.slice.apply(arguments)
        }
        for (var i in items) if (items.hasOwnProperty(i)) { var item= items[i]
            if (item instanceof $model) {
                this.push(item)
            } else {
                this.push(
                    new $model(item)
                )
            }
        }
    }

    this.ModelCollection.prototype= Object.create(ModelCollection.prototype)
    this.ModelCollection.prototype.construct= this.ModelCollection
}

/**
 * Инстанцирует модель коллекции.
 *
 * @param {Object} data
 * @returns {ModelCollection} — return created
 */
ModelCollectionService.prototype.create= function (items) {
    //this.emit('instantiate', items)
    try {
        var collection= new this.ModelCollection(items)
        //this.emit('instantiated', collection)
        return collection
    } catch (err) {
        //this.emit('error', err)
    }
}



/**
 * Определяет потомка.
 *
 * @param {Function} $model
 * @param {String} name
 * @param {Object} properties
 * @returns {ModelCollectionService} — defined
 */
ModelCollectionService.prototype.define= function ($model, name, properties) {
    //this.emit('extend', name, properties)
    var srvc= new this.constructor($model, name, properties || {}, this.ModelCollection, this)
    //this.emit('extended')
    return srvc
}
