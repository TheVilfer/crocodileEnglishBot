module.exports = class WordsContoller{
    wordsArray = require("./wordsList");
    constructor(){
       console.log("Контроллер со словами инициализирован!") 
    }
    toString(){
        let res = "";
        this.wordsArray.forEach(element => {
            res+= element + ", "
        });
        res = res.substring(0, res.length - 2);
        return res;
    }
};