/// <reference path="./typings/index.d.ts"/>

export interface IIteratee<T> {
    (element: T, index: number, collection: IEnumerable<T>): void;
}

export function each<T>(collection: IEnumerable<T>, iteratee: IIteratee<T>, context?: any): void {
    if (typeof collection.getEnumerator === 'function') {
        let index: number = 0;
        let current: T = null;
        let enumerator: IEnumerator<T> = collection.getEnumerator();

        while (enumerator.moveNext()) {
            current = enumerator.get_current();

            iteratee.call(context, current, index, collection);

            index++;
        }
    }
}