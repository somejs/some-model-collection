var Schema= require('some-schema')



/**
 * Модель коллекции. Конструктор коллекции моделей.
 *
 * Инстанцирует экземпляр коллекции моделей, объявляет свойства
 * и инициализирует их значения.
 *
 * @class
 * @namespace
 * @param {Array} items
 * @returns {Model}
 */
var ModelCollection= module.exports= function ModelCollection(items) {

}

ModelCollection.prototype= Object.create(Array.prototype)
ModelCollection.prototype.construct= ModelCollection
