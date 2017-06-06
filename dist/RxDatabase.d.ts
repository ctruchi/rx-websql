/// <reference types="websql" />
import { Observable } from 'rxjs/Observable';
import { RxTransaction } from './RxTransaction';
export declare class RxDatabase {
    private database;
    constructor(name: DOMString, version: DOMString, displayName: DOMString, estimatedSize: number);
    transaction(): Observable<RxTransaction>;
}
