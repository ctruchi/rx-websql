# RxWebsql

This project is a wrapper around websql (See @types/websql) to use Observable from [RxJs](https://github.com/Reactive-Extensions/RxJS).

## Usage

```typescript
    import {RxDatabase, RxTransaction} from 'rx-websql';

    createDb(): void {
        const db: RxDatabase = new RxDatabase('test', '1.0', 'test', 5 * 1024 * 1024);
        db.transaction()
          .switchMap((transaction: RxTransaction) =>
              transaction.executeSql('CREATE TABLE IF NOT EXISTS foo (' +
                  '   id INTEGER,' +
                  '   label TEXT' +
                  ')'))
          .subscribe(() => console.log('db created'));
    }
    
    insert(): void {
        const db: RxDatabase = new RxDatabase('test', '1.0', 'test', 5 * 1024 * 1024);
        db.transaction()
          .switchMap((transaction: RxTransaction) => transaction.executeSql('INSERT INTO foo VALUES (1, \'bar\')'))
          .subscribe((rs: SQLResultSet) => {
              console.log(`${rs.rowsAffected} rows inserted`);
          });
    }

    select(): void {
        const db: RxDatabase = new RxDatabase('test', '1.0', 'test', 5 * 1024 * 1024);
        db.transaction()
          .switchMap((transaction: RxTransaction) => transaction.executeSql('SELECT * FROM foo'))
          .map((rs: SQLResultSet) => rs.rows)
          .subscribe((rows: SQLResultSetRowList) => {
              for (let i = 0; i < rows.length; i++) {
                  console.log(rows.item(i));
              }
          });
    }
```