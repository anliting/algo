/*© An-Li Ting (anliting.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/function IntegerBinarySearch(head,tail){
    this._head=head;
    this._tail=tail;
}
Object.defineProperty(IntegerBinarySearch.prototype,'ask',{get(){
    return this._head!=this._tail
}});
Object.defineProperty(IntegerBinarySearch.prototype,'in',{set(val){
    if(val)
        this._tail=this.out;
    else
        this._head=this.out+1;
}});
Object.defineProperty(IntegerBinarySearch.prototype,'out',{get(){
    return ~~((this._head+this._tail)/2)
}});

function prefixSum(a){
    for(let i=1;i<a.length;i++)
        a[i]+=a[i-1];
    return a
}
function difference(a){
    for(let i=a.length-1;0<i;i--)
        a[i]-=a[i-1];
    return a
}
var array = {
    difference,
    prefixSum,
};

function arrayLowerBound(a,v,lt){
    return integerBinarySearch(i=>!lt(a[i],v),0,a.length)
}
function arrayUpperBound(a,v,lt){
    return integerBinarySearch(i=>lt(v,a[i]),0,a.length)
}
function integerBinarySearch(func,f,l){
    while(f-l){
        let m=~~((f+l)/2);
        if(func(m))
            l=m;
        else
            f=m+1;
    }
    return f
}
var integerBinarySearch$1 = Object.assign(
    integerBinarySearch,
    {arrayLowerBound,arrayUpperBound}
);

var algo = {
    IntegerBinarySearch,
    array,
    integerBinarySearch: integerBinarySearch$1,
};

export default algo;
export { IntegerBinarySearch, array, integerBinarySearch$1 as integerBinarySearch };
