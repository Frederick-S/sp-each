export interface IIteratee<T> {
    (element: T, index: number, collection: IEnumerable<T>): void;
}

export declare function each<T>(collection: IEnumerable<T>, iteratee: IIteratee<T>, context?: any): void;