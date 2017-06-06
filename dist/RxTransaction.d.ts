/// <reference types="websql" />
import { Observable } from 'rxjs/Observable';
export declare class RxTransaction {
    private transaction;
    constructor(transaction: SQLTransaction);
    executeSql(sqlStatement: DOMString, args?: ObjectArray): Observable<SQLResultSet>;
}
