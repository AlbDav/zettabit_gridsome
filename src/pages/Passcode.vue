<template>
    <div ref="backGroundContainer" class="h-screen flex justify-center items-center bg-gray-400">
        <div class="w-full md:w-1/3 mx-3">
            <div ref="digitsContainer" class="grid grid-cols-5 gap-4 mb-5">
                <input type="text" v-for="digit in digits"
                    :key="digit.id"
                    :ref="getInputRef(digit.id)"
                    v-model="digit.value"
                    class="p-3 rounded-lg shadow-inner border outline-none text-center"
                    readonly @click="setFocus(digit.id)">
            </div>
            <div class="grid grid-cols-3 gap-4 items-center">
                <button v-for="button in buttons" :key="button.id" @click="button.click" class="p-3 button-shadow rounded-lg bg-gray-900 text-white">
                    {{ button.value }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            focusedInput: undefined,
            focusedInputIndex: undefined,
            digits: [...Array(5).keys()].map(el => {
                    return {
                        id: el,
                        value: ''
                    }
                })
        }
    },
    computed: {
            buttons() {
                let numberButtons = [...Array(9).keys()].map(el => {
                    let num = el + 1
                    num = num.toString()
                    return {
                        id: num,
                        value: num,
                        click: (e) => this.addNumber(e, num)
                    }
                });
                return [...numberButtons,
                {
                    id: 'C',
                    value: 'C',
                    click: (e) => this.removeNumber(e)
                },
                {
                    id: '0',
                    value: '0',
                    click: (e) => this.addNumber(e, '0')
                },
                {
                    id: 'GO',
                    value: 'GO',
                    click: (e) => this.checkCode(e)
                },
            ]
            }
    },
    methods: {
        addNumber(e, num) {
            this.clickEffect(e.target);
            if (this.focusedInputIndex !== undefined) {
                let digit = JSON.parse(JSON.stringify(this.digits[this.focusedInputIndex]));
                digit.value = num;
                console.log(digit);
                this.$set(this.digits, this.focusedInputIndex, digit);
            }
        },
        removeNumber(e) {
            this.clickEffect(e.target);
            if (this.focusedInputIndex !== undefined) {
                let digit = JSON.parse(JSON.stringify(this.digits[this.focusedInputIndex]));
                digit.value = ''
                this.$set(this.digits, this.focusedInputIndex, digit);
            }
        },
        checkCode(e) {
            this.clickEffect(e.target);
            let code = this.digits.reduce((prev, curr) => prev + curr.value, '');
            if (code !== '71926') {
                this.wrongCode();
            } else {
                this.rightCode();
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
            this.focusedInputIndex = i;
            this.focusedInput.classList.add('focused-input');
        },
        clickEffect(button) {
            button.classList.add('button-shadow-active');
            setTimeout(() => {
                button.classList.remove('button-shadow-active')
            }, 100);
        },
        wrongCode() {
            let container = this.$refs.digitsContainer;
            let backGround = this.$refs.backGroundContainer;
            container.classList.add('wrong-code');
            backGround.classList.add('wrong-bg');
            setTimeout(() => {
                container.classList.remove('wrong-code');
                backGround.classList.remove('wrong-bg');
            }, 1000);
        },
        rightCode() {
            let backGround = this.$refs.backGroundContainer;
            backGround.classList.add('right-bg');
        }
    }
}
</script>

<style scoped>
.button-shadow {
	box-shadow: 0px 8px 0px 0px theme('colors.gray.600');
	transition: all 0.1s ease-in-out;
}
.button-shadow-active {
	box-shadow: none !important;
	transform: translateY(10px);
}
.focused-input {
    background-color: theme('colors.yellow.100');
}
.right-bg {
    background-color: theme('colors.green.500') !important;
}
.wrong-bg {
    background-color: theme('colors.red.500') !important;
}
.wrong-code {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>