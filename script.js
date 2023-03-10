console.log('Vue ok', Vue);

/* Rifare l'esercizio della to do list.
Questa volta però ogni task sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del task
- done, un booleano (true/false) che indica se il task è stato fatto oppure no
Create almeno un task con done: true
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni task.
Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, 
il task viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante,
 il testo digitato viene letto e utilizzato per creare un nuovo task, 
 che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il task alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del task corrispondente 
(se done era uguale a false, impostare true e viceversa) */

const app = Vue.createApp({
    data(){
        return {
            tasks: [
                {
                    text: 'Inventare il blallo',
                    done : false,
                },
                {
                    text: 'Pettinare le bambole',
                    done : false,
                },
                {
                    text: 'Sciogliere le trecce ai cavalli',
                    done : false,
                },
                {
                    text: 'Aggiungere sale in zucca',
                    done : true,
                },
                {
                    text: 'Andare alla fiera dell est',
                    done : false,
                },
                {
                    text: 'Chiudersi in bagno',
                    done : false,
                },
              ],
            newText : '',
            textDecoration : 'text-decoration-line-through',  
        }
    },

    computed:{
        newTask(){
         let newTaskObject;
        return newTaskObject = {
             text: this.newText,
             done : false,
         }
        }
     },

     methods:{
         addNewTask(){
            if (this.newText) {
                this.tasks.push(this.newTask);
                this.newText = '';
            }
             
         },
         deleteTask(index){
             this.tasks.splice(index,1);
         },
         doneTask(index){  
             this.tasks[index].done = !this.tasks[index].done;
         },
        
     }
});

app.mount('#root')