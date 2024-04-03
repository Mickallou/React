export default class Entity {
    updateField(fieldName, value) {
        if (Object.prototype.hasOwnProperty.call(this, fieldName)) {
            this[fieldName] = value;
        }
    }
}