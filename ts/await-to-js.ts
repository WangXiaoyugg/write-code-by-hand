function to<T, U=Error>(promise: Promise<T>, errorExt?: object): Promise<[null, T] | [U, undefined]> {
    return promise.then<[null, T]>((data: T) => [null, data])
        .catch<[U, undefined]>((err: U) => {
            if (errorExt) {
                const parsedError = Object.assign({}, err, errorExt)
                return [parsedError, undefined]
            } 
            return [err, undefined]
        })
}