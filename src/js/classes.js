class Boss{
    constructor(nom, pv, pa){
        this.nom = nom;
        this.pv = pv;
        this.pa = pa;
        this.enigme = () => {
            if(this.pv <= 20){
                
            }

        };
    };
};

class Heros{
    constructor(nom, pv, pa){
        this.nom = nom;
        this.pv = pv;
        this.pa = pa; 
        this.attaque = () =>{
        };
        this.defense = () =>{
        };
    };
};

class Guerrier extends Heros{
    constructor(nom, pv, pa, prage){
        super (nom, pv, pa)
        this.prage = prage;
    };
};

class Mage extends Heros{
    constructor(nom, pv, pa, pmana){
        super (nom, pv, pa)
        this.pmana = pmana;
    };
};

class Archer extends Heros{
    constructor(nom, pv, pa, nbFleches){
        super (nom, pv, pa)
        this.nbFleches = nbFleches;
    };
};


export {Boss, Heros, Guerrier, Mage, Archer};