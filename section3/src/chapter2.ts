/*
* Unknown 타입
* */

function unknownExam(){
    let a: unknown = 1;
    let b: unknown = "hi";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar : unknown;

    //  let num: number = unknownVar
    // let str: string = unknownVar
    // let bool: boolean = unknownVar

}

/*
* Never 타입 : 모든 타입의 서브타입. 모든 타입의 부분 집합. (공집합)
* */

function neverExam(){
    function neverFunc():never{
        while (true){}
    }


let num : number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

/*
* void 타입
* */

function voidExam(){
    function voidFunc():void{
        console.log('hi')
    }
let voidVar : void = undefined;
}



// any타입

function anyExam(){
    let unknownVar : unknown;
    let anyVar : any;
    let undefinedVar : undefined;
    let neverVar : never;

    anyVar = unknownVar;
    undefinedVar = anyVar;
    neverVar = anyVar;
}