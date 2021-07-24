import { BaseEntity } from "./entities";
import { RepositoryUpdateData } from "./repository";
import { AnySchema } from "joi";

export interface EntityValidator<T extends BaseEntity> {
  onCreate(data: T): T;
  onUpdate(data: RepositoryUpdateData<T>): RepositoryUpdateData<T>;
}

export interface EntityValidatorOptions {
  createSchema: any;
  updateSchema: any;
}

export class JoiEntityValidator<T extends BaseEntity>
  implements EntityValidator<T>
{
  constructor(private options: EntityValidatorOptions) {}

  onCreate(data: T) {
    const result = validateSchema(this.options.createSchema, data);
    if (result.error) {
      throw result.error;
    }
    return result.value;
  }
  onUpdate(data: RepositoryUpdateData<T>) {
    const result = validateSchema(this.options.updateSchema, data);
    if (result.error) {
      throw result.error;
    }
    return result.value;
  }
}

function validateSchema<T>(schema: AnySchema, data: T) {
  return schema.validate(data, {
    allowUnknown: false,
    abortEarly: true,
    convert: true,
    noDefaults: false,
    presence: "optional",
    stripUnknown: false,
    skipFunctions: false
  });
}
