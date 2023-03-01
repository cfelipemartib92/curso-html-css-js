# Commands

0. Pregunta: Filtrar arrays para mostrar sólo las true
    Q: Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
    * Respuesta: 
        function countSheeps(arrayOfSheeps) {
            return arrayOfSheeps.filter(Boolean).length; // Funcion permite contar un array, filtrarlo 
        }
1. Pregunta: Convertir booleano a String
    Q: Implement a function which convert the given boolean value into its string representation.
    * Respuesta: 
        function booleanToString(b){
            return b.toString(b) 
        }
2. Pregunta: 
    Q: Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
    Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
    Create a function which translates a given DNA string into RNA.
    For example: "GCAT"  =>  "GCAU"
    R:

3. Pregunta:
    Q: 
    R: