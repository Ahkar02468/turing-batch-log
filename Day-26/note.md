# Async Day-2

> must aviod async code that force the code to behave as sync code. Instead try to use promise.all()

* But all condition must resolve in promise.all()
* Promise has 3 status
     1. pending (neither fullfill nor reject)
     2. fullfill
     3. reject
* Promise.race() first complete(fullfill or reject)
* Promise.any() first complete(only fullfill)