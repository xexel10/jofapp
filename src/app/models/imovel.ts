import { FileHandle } from './file-handle';
import { Categoria } from 'src/app/models/categoria';
import { Foto } from './foto';

export interface Imovel {
    id: number;
    nome: string;
    descricao: string;
    fotos: Foto[];
    categoria: number;
    categoria_nome: string;
    tipoImovel: number;
}
