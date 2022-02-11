const app = new Vue({

      el: '#app',
      data: {

        inputText: '',
        toDoText: [],
        done: false,

      },

      methods: {

        addToDo () {

            //se inputText ha del testo (e non è vuoto)
            if (this.inputText.length > 0) {

              //pusha il testo nell'array toDoText
              this.toDoText.push(this.inputText);

              //svuota inputText
              this.inputText = '';

            }
            
        },

        removeToDo (index) {
        
            this.toDoText.splice(index, 1);

        },

        toDoCheck() {
        
          if (this.done == true) {
          
              this.done = false;
          
          } else {

              this.done = true;

          }

        } 

      }
  
});