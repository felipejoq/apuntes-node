import { multiplication } from "../../helpers";

export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  table: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor(
    /**
     * DI - Dependency Injection
     */
  ) { }

  execute({ table, limit = 10 }: CreateTableOptions) {
    return multiplication(table, limit);
  }
}