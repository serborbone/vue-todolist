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

        //funzione che rimuove un elemento dall'array (quando clicco sulla X nella casella dell'attività)
        removeToDo (index) {
        
            this.toDoText.splice(index, 1);

        },

        //funzione per cambiare il valore di done (quando clicco sull'attività nella lista) 
        toDoCheck() {
        
          if (this.done == true) {
          
              this.done = false;
          
          } else {

              this.done = true;

          }

        } 

      }
  
});