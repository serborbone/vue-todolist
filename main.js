const app = new Vue({

      el: '#app',
      data: {

        inputText: '',

        taskList: [],

      },

      methods: {

        addToDo () {

            //se inputText non è vuoto
            if (this.inputText.length > 0) {

              taskText = {text: this.inputText, done: false};

              //pusha l'oggetto nell'array taskList
              this.taskList.push(taskText);

              //svuota inputText
              this.inputText = '';

            }
            
        },

        //funzione che rimuove un elemento dall'array (quando clicco sulla X nella casella dell'attività)
        removeToDo (indexList) {
        
            this.taskList.splice(indexList, 1);

        },

        // funzione che cambia il valore di done quando clicco sull'attività 
        toDoCheck(index) {

            this.taskList[index].done = !this.taskList[index].done;
        
        } 

      }
  
});