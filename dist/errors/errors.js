export class MissingAttributeError extends Error {
    constructor(attribute) {
        super(`Missing attribute: ${attribute}`);
        this.status = 400;
    }
}
export class MissingEntityError extends Error {
    constructor(entity) {
        super(`Missing entity: ${entity}`);
        this.status = 400;
    }
}
export class NotFoundError extends Error {
    constructor(entity) {
        super(`Couldn't find:${entity}`);
        this.status = 404;
    }
}
export class AlreadyExistsError extends Error {
    constructor(entity) {
        super(`Entity already exists: ${entity}`);
        this.status = 409;
    }
}
