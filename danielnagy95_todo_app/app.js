
const args = process.argv.slice(2);

console.log(args);

if (args.includes('-l')) {
    console.log("listing");
    // File beolvasást
    // JSON parseolást => rawTodoList
    // warTodoList => todolist = [ Todo{}, Todo {}, ]
    // a todoList kilistázása
} else {
    console.log(
        `Parancssori Todo applikáció
        =============================
        
        Parancssori argumentumok:
            -l   Kilistázza a feladatokat
            -a   Új feladatot ad hozzá
            -r   Eltávolít egy feladatot
            -c   Teljesít egy feladatot`
    );
}
