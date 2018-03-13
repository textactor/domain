
export interface RepAccessOptions<T> {
    /**
     * Fields to return separated by spaces
     */
    fields?: (keyof T)[]
}

export interface RepUpdateOptions<T> extends RepAccessOptions<T> {

}

export interface RepUpdateData<T> {
    item: T
    delete?: (keyof T)[]
}

export interface IReadRepository<ID, T> {
    getById(id: ID): Promise<T>
    getByIds(ids: ID[]): Promise<T[]>
    exists(id: ID): Promise<boolean>
}

export interface IWriteRepository<ID, T> {
    delete(id: ID): Promise<boolean>
    create(data: T): Promise<T>
    update(data: RepUpdateData<T>): Promise<T>
}

export interface IRepository<ID, T> extends IReadRepository<ID, T>, IWriteRepository<ID, T> {

}