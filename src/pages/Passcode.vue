<template>
    <div class="h-screen flex justify-center items-center bg-gray-400">
        <div class="w-full md:w-1/3">
            <div class="grid grid-cols-5 gap-4 mb-5">
                <input type="text" v-for="i in 5" :ref="getInputRef(i)" class="p-3 rounded-lg shadow-inner border outline-none" readonly @click="setFocus(i)">
            </div>
            <div class="grid grid-cols-3 gap-4 items-center">
                <button v-for="button in buttons" :key="button.id" @click="button.click" class="p-3 button-shadow rounded-lg bg-gray-900 text-white">
                    {{ button.text }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            focusedInput: undefined
        }
    },
    computed: {
            buttons() {
                return [
                {
                    id: '1',
                    text: '1',
                    click: () => this.addNumber('1')
                },
                {
                    id: '2',
                    text: '2',
                    click: () => this.addNumber('2')
                },
                {
                    id: '3',
                    text: '3',
                    click: () => this.addNumber('3')
                },
                {
                    id: '4',
                    text: '4',
                    click: () => this.addNumber('4')
                },
                {
                    id: '5',
                    text: '5',
                    click: () => this.addNumber('5')
                },
                {
                    id: '6',
                    text: '6',
                    click: () => this.addNumber('6')
                },
                {
                    id: '7',
                    text: '7',
                    click: () => this.addNumber('7')
                },
                {
                    id: '8',
                    text: '8',
                    click: () => this.addNumber('8')
                },
                {
                    id: '9',
                    text: '9',
                    click: () => this.addNumber('9')
                },
                {
                    id: '0',
                    text: '0',
                    click: () => this.addNumber('0')
                },
                {
                    id: 'C',
                    text: 'C',
                    click: () => console.log('ciao')
                },
                {
                    id: 'GO',
                    text: 'GO',
                    click: () => console.log('ciao')
                },
            ]
            }
    },
    methods: {
        addNumber(num) {
            if (this.focusedInput) {
                this.focusedInput.value = num;
            }
        },
        getInputRef(i) {
            return 'input' + i;
        },
        setFocus(i) {
            if (this.focusedInput) {
                this.focusedInput.classList.remove('focused-input');
            }
            let ref = this.getInputRef(i);
            let el = this.$refs[ref];
            this.focusedInput = el[0];
            this.focusedInput.classList.add('focused-input');
        }
    }
}
</script>

<style scoped>
.button-shadow {
	box-shadow: 0px 8px 0px 0px theme('colors.gray.600');
	transition: all 0.1s ease-in-out;
}
.button-shadow:active {
	box-shadow: none;
	transform: translateY(10px);
}
.focused-input {
    background-color: theme('colors.yellow.100');
}
</style>