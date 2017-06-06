import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {RxTransaction} from './RxTransaction';

export class RxDatabase {

    private database: Database;

    public constructor(name: DOMString, version: DOMString, displayName: DOMString, estimatedSize: number) {
        this.database = window.openDatabase(name, version, displayName, estimatedSize);
    }

    public transaction(): Observable<RxTransaction> {
        return Observable.create((observer: Observer<any>) => {
            this.database.transaction(
                (transaction: SQLTransaction) => {
                    observer.next(new RxTransaction(transaction));
                    observer.complete();
                },
                (error => observer.error(error))
            )
        });
    }
}