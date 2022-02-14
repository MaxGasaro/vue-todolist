const app = new Vue(
    {
        el: "#root",
        data: {
            todos: [
                {
                    text: 'Eat',
                    done: false
                },
                {
                    text: 'Sleep',
                    done: false
                },
                {
                    text: 'Code',
                    done: false
                },
                {
                    text: 'Repeat',
                    done: false
                },
            ],
            input: '',
        },
        mounted() {
            this.$nextTick(() => this.$refs.testInput.focus())
        },
        methods: {
            submit() {
                if(this.input.trim().length > 0) {
                    const newTodoObj = {
                        text: this.input.trim(),
                        done: false
                    }
                    this.todos.push(newTodoObj);
                } 
                this.input = '';
            },

            removeTodo(index) {
                this.todos.splice(index, 1);
            },

            lineThrough(index) {
                this.todos[index].done = !this.todos[index].done
            }
        }
    }
)