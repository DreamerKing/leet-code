/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  /*   if (arguments.length = 1 && typeof arguments[0] == "string") {
        let sp = arguments[0].split(/\n/);
        l1 = sp[0];
        l2 = sp[1];
    }
    if(!l1){
        l1 = [];
    } 
    if(!l2){
        l2 = [];
    }
    
    let result = [];
    for (let n = 0, m = 0; n < l1.length || m < l2.length; ) {
       if(l1[n] && l2[m]){
           if(l1[n] <= l2[m]){
               result.push(l1[n]);
               n++;
           } else {
               result.push(l2[m]);
               m++;
           }
       } else if (!l1[n] && l2[m]){
           result.push(l2[m]);
           m++;
        } else if (l1[n] && !l2[m]) {
            result.push(l1[n]);
            n++;
        } 
    }
    return result; */

    let head = { val: -1, next: null },
        crt = head;
    while (l1 && l2) {
       if(l1.val <= l2.val){
           crt.next = l1;
           l1 = l1.next;
       } else {
           crt.next = l2;
           l2 = l2.next; 
       } 
       crt = crt.next;
    }
    crt.next = l1 || l2;
    return head.next;

   /*  let l = new LLink();
    let c1 = l1.head;
    let c2 = l2.head;
    while (c1.next || c2.next) {
        if(c1.next && c2.next){
            if (c1.next.value <= c2.next.value) {
                l.append(c1.next.value);
                c1 = c1.next;
            } else {
                l.append(c2.next.value);
                c2 = c2.next;
            } 
        } else if(!c1.next && c2.next){
            l.append(c2.next.value);
            c2 = c2.next;
        } else if (!c2.next && c1.next) {
            l.append(c1.next.value);
            c1 = c1.next;
        }
    }
    return l;  */
};

/* 
var mergeTwoLists = function (l1, l2) {
    var mergedHead = { val: -1, next: null },
        crt = mergedHead;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            crt.next = l2;
            l2 = l2.next;
        } else {
            crt.next = l1;
            l1 = l1.next;
        }
        crt = crt.next;
    }
    crt.next = l1 || l2;

    return mergedHead.next;
}; */

/* 
function ListNode(value){
    this.value = value;
    this.next = null;
}
function LLink(){
    this.head = new ListNode("head");
    this.append = function(val){
        let current = this.head;
        while(current && current.next !== null){
           current = current.next;
        } 
        current.next = new ListNode(val);
    }; */
  /*   this.display = function(){
        let current = this.head;
        while (!(current.next == null)) {
           console.log(current.next.value);
           current = current.next;
        }
    } */
// }

/* let l1 = new LLink();
l1.append(12);
l1.append(22);
l1.append(32);
// l1.display();


let l2 = new LLink();
l2.append(4);
l2.append(13);
l2.append(22);
l2.append(33);
l2.append(44);
// l2.display();

let m = mergeTwoLists(l1, l2);
m.display(); */
/* let m = mergeTwoLists([1, 2, 4, 5], [1, 3, 4]);
console.log(m); */




