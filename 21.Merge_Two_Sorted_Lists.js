/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

if(list1===null&&list2){
    return list2;
}
else if(list1&&list2===null){
    return list1;
}
else if(list1===null&&list2===null){
    return list1;
}
    let list3=new ListNode;
    let temp=list3;
    while(list1 && list2){
        if(list1.val<list2.val){
            temp.next=new ListNode(list1.val);
            temp=temp.next;
            list1=list1.next;
        }
        else{
            temp.next=new ListNode(list2.val);
            temp=temp.next;
            list2=list2.next;
        }
        
    }
    if(list1!==null&&list2===null){
                temp.next=list1;
    }
    else if(list1===null&&list2!==null){
                temp.next=list2;
    }
    list3=list3.next;
    return list3;

};
