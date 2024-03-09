class NotesManager {
  static quantity = 0;
  static #notes = [];
  create(data) {
    data.id =
      NotesManager.#notes.length === 0
        ? 1
        : NotesManager.#notes(NotesManager.#notes.length - 1).id + 1;
    NotesManager.quantity++;
    data.type ? data.type : "to do";
    data.type || new Date();
    !data.text ? "ingrese texto" : NotesManager.#notes.push(data);
    NotesManager.#notes.push(data);
  }
  read() {
    return NotesManager.#notes;
  }
}

const notes = new NotesManager();
notes.create({ text: "mi primera nota" });
console.log(notes.read());
