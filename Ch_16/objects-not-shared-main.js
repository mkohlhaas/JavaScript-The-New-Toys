const sharedBuf = new SharedArrayBuffer(5 * Uint16Array.BYTES_PER_ELEMENT);
const sharedArray = new Uint16Array(sharedBuf);
sharedArray[0] = 42;
sharedBuf.foo = "foo";
sharedArray.bar = "bar";
const worker = new Worker("./objects-not-shared-worker.js");
console.log("(main) sharedArray[0] = " + sharedArray[0]);
console.log("(main) sharedArray.buffer.foo = " + sharedArray.buffer.foo);
console.log("(main) sharedArray.bar = " + sharedArray.bar);
worker.postMessage({
    type: "init",
    sharedArray
});
