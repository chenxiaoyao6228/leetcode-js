# sliding-window

## template

```js
function slidingWindow(arr){
    const needObj = {}, windowObj = {}
    // need to iterate arr to init needObj and windowObj
    for(let i = 0; i < arr.length; i++) {
        const a = arr[i];
        .....
    }
    // two pointer
    let left = 0, right=0

    // init data for specific usage

    while(right < arr.length){
        const c = arr[right]
          // expand window
        right++
        // update data in windowObj and needObj
        ...
        // check if need to shrink window
        while(window needs to shrink){
            const d = arr[left]
            // shrink window
            left++
            // update data
        }
    }
}
```