class ElementModel {
    private family: string;
    private englishName: string;
    private koreanName: string;
    private symbol: string;
    private position: number;

    public constructor(family:string, englishName: string, koreanName: string, symbol: string, position: number) {
        this.family = family;
        this.englishName = englishName;
        this.koreanName = koreanName;
        this.symbol = symbol;
        this.position = position;
    }

    public getFamily = ():string => {
        return this.family;
    }

    public getEnglishName = ():string => {
        return this.englishName;
    }

    public getKoreanName = ():string => {
        return this.koreanName;
    }

    public getSymbol = ():string => {
        return this.symbol;
    }

    public getPosition = ():number => {
        return this.position;
    }
};

export default ElementModel;