/*
 * @lc app=leetcode.cn id=225 lang=typescript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
class MyStack {
    #size = 0
    #data: number[] = []
    constructor() {

    }

    push(x: number): void {
        this.#data.push(x);
        this.#size++;
    }

    pop(): number {
        if (this.#size>=0) {
            this.#size--;
        }
        return this.#data.pop() as number;
    }

    top(): number {
       return this.#data[this.#size-1]
    }

    empty(): boolean {
        return this.#size == 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

