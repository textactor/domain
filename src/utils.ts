
import * as crypto from 'crypto'

export function md5(value: string): string {
    return crypto.createHash('md5').update(value, 'utf8').digest('hex').toLowerCase();
}

export function uniq<T>(items: T[]) {
    return items.filter((value, index, self) => self.indexOf(value) === index);
}

export function eachSeries<T>(arr: any[], iteratorFn: (item: any) => Promise<T>) {
    return arr.reduce((p, item) => p.then(() => iteratorFn(item)), Promise.resolve());
}
