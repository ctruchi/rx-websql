import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

export class RxTransaction {

    private transaction: SQLTransaction;

    constructor(transaction: SQLTransaction) {
        this.transaction = transaction;
    }

    executeSql(sqlStatement: DOMString, args?: ObjectArray): Observable<SQLResultSet> {
        return Observable.create((observer: Observer<SQLResultSet>) => {
            this.transaction.executeSql(
                sqlStatement,
                args,
                (transaction: SQLTransaction, resultSet: SQLResultSet) => {
                    observer.next(resultSet);
                    observer.complete();
                },
                (transaction: SQLTransaction, error: SQLError) => {
                    observer.error(error);
                    return true;
                }
            );
        });
    }
}