import { Byte } from "@angular/compiler/src/util";

export interface MyFile {
    id?: number;
    name: string;
    date: string;
    file: File;
    fileBytes: Byte[];
}