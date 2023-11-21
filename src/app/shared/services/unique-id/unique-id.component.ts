import { Injectable } from "@angular/core";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;
  // Testa se é seguido de letra maiscula ou minuscula e se tem hifen e dps vem qualquer outra coisa
  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;
  public generateUniqueIdWithPrefix(prefix: string): string {
    if(!prefix || !this.validId.test(prefix)) {
      throw Error("Prefix can't be empty");
    }

    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }
  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }
  private generateUniqueId(): string {
    return uuidv4();
  }
}
