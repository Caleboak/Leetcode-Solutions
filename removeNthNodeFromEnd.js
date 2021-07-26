//Remove Nth node from end of list

/*Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
*/

//I kinda struggled a bit here because of an edge case i forgot about ya.
//So i used the multiple loop and dummy node
var removeNthFromEnd = function(head, n) {
    let dummy =new ListNode();//We'd use the dummy node incase we have to remove the first element
    if(head.next==null && n==1){//This is an edge case we'd have to take care of, if its just 1 node and n==1
        return null;
    }
    dummy.next=head;//set the dummy.next to head so we can just set dummy.next to head.next to remove the head
    let cur=head;
    let count=0;
    let prev=null;
    while(cur){//loop to get the length
        cur=cur.next;
        count++;
    }
    let total=count-n+1;//to get the node from the beginning
    cur=dummy;
    while(total>0){//loop till we get to that Node, remember the previous is always going to be behind the node
        prev=cur;
        cur=cur.next;
        total--;
    }
    prev.next=cur.next;//then we can set prev.next to curr.next hence removing the node;
    return dummy.next;//return dummy.next which in this case is the head;
};

//Time complexity= O(n)