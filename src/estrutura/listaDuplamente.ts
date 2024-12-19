import { no } from "../no/no";

export class listaDuplamente<T> {
  private head: no<T> | null = null;
  private tail: no<T> | null = null;

  addPrimeiroNo(value: T): void {
    const novoNo = new no(value);
    if (!this.head) {
      this.head = this.tail = novoNo;
    } else {
      novoNo.next = this.head;
      this.head.prev = novoNo;
      this.head = novoNo;
    }
  }

  addUltimoNo(value: T): void {
    const novoNo = new no(value);
    if (!this.tail) {
      this.head = this.tail = novoNo;
    } else {
      novoNo.prev = this.tail;
      this.tail.next = novoNo;
      this.tail = novoNo;
    }
  }

  removePrimeiroNo(): T | null {
    if (!this.head) return null;

    const removedData = this.head.data;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head!.prev = null;
    }
    return removedData;
  }

  removeUltimoNo(): T | null {
    if (!this.tail) return null;

    const removedData = this.tail.data;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail!.next = null;
    }
    return removedData;
  }

  // Método para remover um nó específico baseado no índice (não no valor)
  removeNoIndice(index: number): boolean {
    if (index < 0 || !this.head) {
      return false; 
    }

    let current: no<T> | null = this.head; 
    let count = 0;

    while (current) {
      if (count === index) {
        
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next; 
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev; 
        }

        return true;     }

      current = current.next;
      count++;
    }

    return false;
  }

  removeNoValor(value: T): boolean {
    let current = this.head;
    while (current) {
      if (current.data === value) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next; 
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev; 
        }

        return true; 
      }
      current = current.next;
    }
    return false;
  }

  imprimir(): void {
    let current = this.head;
    const values: T[] = [];
    while (current) {
      values.push(current.data);
      current = current.next;
    }
    console.log(values.join(" <-> "));
  }

  limpar(): void {
    this.head = this.tail = null;
  }
}
