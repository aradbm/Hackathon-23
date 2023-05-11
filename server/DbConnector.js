'use strict';

module.exports = class dbProduct {
    
    constructor(db) {
        this.db = db
    }
    async insert_product(makat, readerLocation, type, color, size, price, ts, snif) {
        makat = { name: 'makat', value: makat }
        readerLocation = { name: 'readerLocation', value: readerLocation }
        type = { name: 'type', value: type }
        color = { name: 'color', value: color }
        size = { name: 'size', value: size }
        price = { name: 'price', value: price }
        ts = { name: 'ts', value: ts }
        snif = { name: 'snif', value: snif }

        try {
            let rs = await this.db.sp(
                {
                    text: 'insert_product($1, $2, $3, $4, $5, $6, $7, $8)',
                    objParams: [makat, readerLocation, type, color, size, price, ts, snif]
                })
            return { rs: rs, err: U.FUNCTION_RETURN_OK }

        } catch (err) {
            console.error(err)
            return { rs: [], err: U.FUNCTION_RETURN_ERROR }
        }
    }
}