export class MissingAttributeError extends Error {
  status: number;
  constructor(attribute: string) {
    super(`Missing attribute: ${attribute}`);
    this.status = 400;
  }
}

export class MissingEntityError extends Error {
  status: number;
  constructor(entity: string) {
    super(`Missing entity: ${entity}`);
    this.status = 400;
  }
}

export class NotFoundError extends Error {
  status: number;
  constructor(entity: string) {
    super(`Couldn't find:${entity}`);
    this.status = 404;
  }
}

export class AlreadyExistsError extends Error {
  status: number;
  constructor(entity: string) {
    super(`Entity already exists: ${entity}`);
    this.status = 409;
  }
}
