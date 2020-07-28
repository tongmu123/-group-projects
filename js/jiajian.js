
        function init() {
            var add=document.getElementById("b1");
            var sub=document.getElementById("b2");
            var text=document.getElementById("bb");
         
            add.addEventListener("click",clickButtonHandler);
            sub.addEventListener("click",clickButtonHandler);
            document.addEventListener("change",changeHandler);
        }
         
        function clickButtonHandler(e) {
            var evt=new Event("change");//本身的事件
            if(this.textContent=="+"){//获取点击属性为+时
                //nextElementSibling  下一个
                if(this.nextElementSibling.value==99) return;
                //给data.num赋值，一直加可以 小于100
                this.nextElementSibling.value++;
                evt.elem=this.nextElementSibling;//当前指向 对象
            }else{
                //previousElementSibling  上一个
                if(this.previousElementSibling.value==1) return;
                //给data.num赋值，减
                this.previousElementSibling.value--;
                evt.elem=this.previousElementSibling;//当前指向 对象
            }
            document.dispatchEvent(evt);//朝谁发送 抛发
        }
         
        function changeHandler(e) {
            console.log(e);
        }