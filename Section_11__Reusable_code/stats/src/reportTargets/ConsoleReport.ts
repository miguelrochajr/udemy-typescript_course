import { OutputTarger } from '../Summary';

export class ConsoloeReport implements OutputTarger {
  print(report: string): void {
    console.log(report);
  }
}
