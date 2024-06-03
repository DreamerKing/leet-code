/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
    #stack: number[] = []
    #temp: number[] = []
    constructor() {

    }

    push(x: number): void {
        this.#temp.push(x);
    }

    pop(): number {
        if (this.#stack.length > 0) return this.#stack.pop() as number

        while (this.#temp.length) {
            this.#stack.push(this.#temp.pop() as number)
        }
        return this.#stack.pop() as number
    }

    peek(): number {
        if (this.#stack.length) return this.#stack[this.#stack.length - 1];
        while (this.#temp.length) {
            this.#stack.push(this.#temp.pop() as number)
        }
        return this.#stack[this.#stack.length -1]
    }

    empty(): boolean {
        return this.#stack.length + this.#temp.length == 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

