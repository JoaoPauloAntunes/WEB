(function tests() {
    // test_prototype_Number(3);                // 6
    // test_prototype_String("test");    // 8
    // test_inheritance();
    // test_prototype_Array();
    // test_prototype_Object();
})();


function test_prototype_Object() {
    Object.prototype.esconde = function(callback) {
        this.style.opacity = 0;
        this.style.filter = "alpha(opacity=0)";
        callback.call(this, this);
    };


    document.getElementById('escondido').esconde((element) => {
        console.log(`escondemos a div de ID: ${element.getAttribute("id")}`);
    });
}


function test_prototype_Array() {
    Array.prototype.cataFruta = function(callback) {
        for(var i = 0; i < this.length; i++) {
            callback.call(this, this[i], i);
        }
    };

    var frutas = ["laranja","uva","pinha","morango"];
    frutas.cataFruta((element,index) => {
        console.log({"fruta": element, "posição": index});
    });
}


function test_inheritance() { // Herança
    function Lutador(){
        this.attackPlayer = function(){
            return true;
        };
    }

       
    function Habilidades(){
        this.esquivaPlayer = function(){
            console.log("esquivou");
        };
    }

    // fazendo Lutador herdar de Habilidades
    Lutador.prototype = new Habilidades();
    lutador1 = new Lutador();
    
    // Verificando
    console.log(lutador1);
    console.log(lutador1 instanceof Lutador);
    console.log(lutador1 instanceof Habilidades);
}


function test_prototype_String(str) {
    String.prototype.dobroTamanho = function() {
        return this.length * 2;
    };
    
    console.log(str.dobroTamanho());
}


function test_prototype_Number(value) {
    Number.prototype.dobro = function() {
        return this * 2;
    };
    
    const num = new Number(value);
    console.log(num.dobro());
}