

    export class Tab_Materiali_Model1 {

        public _Data_Registrazione!: Date;
      id: any;
        public get Data_Registrazione(): Date{
            return this._Data_Registrazione;
        }
        public set Data_Registrazione(val: Date) {
            this._Data_Registrazione = val;
        }
    
        public _Cantiere!: string;
        public get Cantiere(): string
        {
            return this._Cantiere;
        }
        public set Cantiere(val: string)
        {
            this._Cantiere = val;
        }
        public _Articolo!: string;
        public get Articolo(): string
        {
            return this._Articolo;
        }
        public set Articolo(val: string)
        {
            this._Articolo = val;
        }
        public _Unita_Misura!: string;
        public get Unita_Misura(): string
        {
            return this._Unita_Misura;
        }
        public set Unita_Misura (val: string)
        {
            this._Unita_Misura = val;
        }
        public _Quantita!: number;
        public get Quantita(): number
        {
            return this._Quantita;
        }
        public set Quantita(val: number)
        {
            this._Quantita = val;
        }
    
        public _Fornitore!: string;
        public get Fornitore(): string
        {
            return this._Fornitore;
        }
        public set Fornitore (val: string)
        {
            this._Fornitore = val;
        }
        public _Numero_Bolla!: string;
        public get Numero_Bolla(): string
        {
            return this._Numero_Bolla;
        }
        public set Numero_Bolla(val: string)
        {
            this._Numero_Bolla = val;
        }
        public _Note!: string;
        public get Note(): string
        {
            return this._Note;
        }
        public set Note(val: string)
        {
            this._Note = val;
        }

        
        public materialiModel2: Tab_Materiali_Model2[] = []
    
        constructor(Data_Registrazione_: Date, Cantiere_: string, Fornitore_:string,Numero_Bolla_: string,Note_:string) {
    
                this.Data_Registrazione = Data_Registrazione_;
                this.Cantiere = Cantiere_;
                this.Fornitore = Fornitore_;
                this.Numero_Bolla = Numero_Bolla_;
                this.Note =  Note_;
        }
    }

    export class Tab_Materiali_Model2 {

        public _Articolo!: string;
        public get Articolo(): string
        {
            return this._Articolo;
        }
        public set Articolo(val: string)
        {
            this._Articolo = val;
        }
        public _Unita_Misura!: string;
        public get Unita_Misura(): string
        {
            return this._Unita_Misura;
        }
        public set Unita_Misura (val: string)
        {
            this._Unita_Misura = val;
        }
        public _Quantita!: number;
        public get Quantita(): number
        {
            return this._Quantita;
        }
        public set Quantita(val: number)
        {
            this._Quantita = val;
        }
       
        constructor(Articolo_: string, Unita_Misura_:string,Quantita_: number) {
    
            this.Articolo = Articolo_;
            this.Unita_Misura = Unita_Misura_;
            this.Quantita = Quantita_;
        }
    }

    
    
    
    

    
        

    
    
    
    

    
        